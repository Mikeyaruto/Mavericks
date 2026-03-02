from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Models
class ContactMessage(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    service: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    service: str
    message: str

# Function to send email
def send_email_notification(contact_data: ContactMessageCreate):
    """Send email notification to Michael's Gmail"""
    try:
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"New Portfolio Contact from {contact_data.name}"
        msg['From'] = "portfolio@michaelegbeneye.com"  # This can be any address
        msg['To'] = "stormmichael382@gmail.com"

        # Create HTML email body
        html = f"""
        <html>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
            </div>
            <div style="padding: 30px; background-color: #f8fafc;">
              <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
              
              <p style="margin: 10px 0;"><strong style="color: #475569;">Name:</strong> {contact_data.name}</p>
              <p style="margin: 10px 0;"><strong style="color: #475569;">Email:</strong> <a href="mailto:{contact_data.email}" style="color: #0ea5e9;">{contact_data.email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #475569;">Phone:</strong> {contact_data.phone or 'Not provided'}</p>
              <p style="margin: 10px 0;"><strong style="color: #475569;">Service Needed:</strong> {contact_data.service}</p>
              
              <div style="margin-top: 20px; padding: 20px; background-color: white; border-left: 4px solid #0ea5e9; border-radius: 4px;">
                <h3 style="color: #1e293b; margin-top: 0;">Message:</h3>
                <p style="color: #475569; line-height: 1.6;">{contact_data.message}</p>
              </div>
              
              <div style="margin-top: 30px; padding: 15px; background-color: #dbeafe; border-radius: 4px;">
                <p style="margin: 0; color: #1e40af; font-size: 14px;">
                  <strong>Quick Actions:</strong><br>
                  Reply: <a href="mailto:{contact_data.email}" style="color: #0ea5e9;">Send Email</a>
                  {f' | Call: <a href="tel:{contact_data.phone}" style="color: #0ea5e9;">{contact_data.phone}</a>' if contact_data.phone else ''}
                </p>
              </div>
            </div>
          </body>
        </html>
        """
        
        part = MIMEText(html, 'html')
        msg.attach(part)

        # Send using Gmail SMTP (you'll need to set up app password)
        # For now, we'll log it - user needs to configure Gmail app password
        logger.info(f"Email notification would be sent to stormmichael382@gmail.com")
        logger.info(f"Contact from: {contact_data.name} ({contact_data.email})")
        
        # Uncomment and configure when Gmail app password is ready:
        # with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        #     server.login(os.environ.get('GMAIL_USER', 'stormmichael382@gmail.com'), 
        #                  os.environ.get('GMAIL_APP_PASSWORD', ''))
        #     server.send_message(msg)
        
        return True
    except Exception as e:
        logger.error(f"Error sending email: {str(e)}")
        return False

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Contact Form Endpoint
@api_router.post("/contact", response_model=ContactMessage)
async def submit_contact_form(input: ContactMessageCreate):
    """Receive contact form submissions and send email notification"""
    try:
        # Create contact message object
        contact_dict = input.model_dump()
        contact_obj = ContactMessage(**contact_dict)
        
        # Save to database
        doc = contact_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        await db.contact_messages.insert_one(doc)
        
        # Send email notification
        send_email_notification(input)
        
        logger.info(f"Contact form submitted by {input.name} ({input.email})")
        
        return contact_obj
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Error submitting contact form")

@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    """Get all contact messages (for admin use)"""
    messages = await db.contact_messages.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for msg in messages:
        if isinstance(msg['timestamp'], str):
            msg['timestamp'] = datetime.fromisoformat(msg['timestamp'])
    
    return messages

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
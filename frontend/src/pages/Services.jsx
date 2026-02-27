import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Workflow, MessageSquare, Phone, Server, FileCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Shopify Website Design & Optimization',
      description: 'Build a professional online store that converts visitors into customers',
      deliverables: [
        'Premium Shopify store setup from scratch',
        'Custom theme design and customization',
        'Speed optimization for faster loading',
        'Conversion-focused product pages',
        'Payment gateway and shipping integration',
        'App integrations (email, reviews, analytics)',
        'Basic SEO setup (meta tags, alt text, URLs)',
        'Mobile responsive design',
        'Admin training and documentation',
      ],
    },
    {
      icon: Workflow,
      title: 'n8n Automation & Workflow Systems',
      description: 'Automate repetitive tasks and connect your business tools seamlessly',
      deliverables: [
        'Business process automation design',
        'Lead capture and CRM synchronization',
        'Automated email sequences and follow-ups',
        'Google Drive/Sheets workflow automation',
        'Multi-platform data synchronization',
        'Webhook and API integrations',
        'Custom workflow logic and conditions',
        'Error handling and notifications',
        'Documentation and workflow diagrams',
      ],
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbots (WhatsApp + Web + Business Assistants)',
      description: 'Smart chatbots that handle customer queries and capture leads 24/7',
      deliverables: [
        'WhatsApp Business API integration',
        'Website chatbot deployment',
        'Customer support automation',
        'Appointment booking system',
        'Lead qualification flows',
        'AI-powered FAQ responses',
        'Knowledge base integration',
        'Multi-language support options',
        'CRM integration and data logging',
      ],
    },
    {
      icon: Phone,
      title: 'AI Voice Agents (Twilio / Telnyx / LiveKit)',
      description: 'Intelligent voice assistants for inbound and outbound calls',
      deliverables: [
        'AI receptionist for inbound calls',
        'Outbound sales assistant setup',
        'Call routing and IVR configuration',
        'Call transcription and summaries',
        'CRM logging and follow-up triggers',
        'Custom voice scripts and flows',
        'Twilio/Telnyx infrastructure setup',
        'Real-time analytics dashboard',
        'Testing and quality assurance',
      ],
    },
    {
      icon: Server,
      title: 'VPS + Docker Deployment',
      description: 'Deploy and manage your applications on cloud infrastructure',
      deliverables: [
        'VPS server setup and configuration',
        'Docker containerization',
        'Reverse proxy setup (Nginx)',
        'SSL certificate installation',
        'Domain and DNS configuration',
        'Environment variable management',
        'Automated backups setup',
        'Monitoring and logging',
        'Maintenance and update procedures',
      ],
    },
    {
      icon: FileCheck,
      title: 'Meta / Instagram / Facebook App Review Support',
      description: 'Navigate the Meta app review process successfully',
      deliverables: [
        'App verification requirements assessment',
        'Permission justification documentation',
        'Screencast recording guidance',
        'Privacy policy and terms preparation',
        'Common compliance issues resolution',
        'Review submission checklist',
        'Feedback response assistance',
        'Re-submission support if needed',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Services That Drive Real Business Results
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              From e-commerce stores to AI-powered automation, I build systems that help your business sell more and work less.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-slate-200 overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Left: Icon & Title */}
                      <div>
                        <div className="bg-cyan-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                          <Icon className="text-cyan-600" size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">
                          {service.title}
                        </h2>
                        <p className="text-slate-600">{service.description}</p>
                      </div>

                      {/* Right: Deliverables */}
                      <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">
                          What You Get:
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-slate-200 bg-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Not Sure What You Need?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Let's have a quick conversation about your business goals and I'll recommend the best solution.
              </p>
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Link to="/contact">
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-slate-600 mb-6">
            Pricing depends on project scope and complexity. Every business has unique needs, so I provide custom quotes after understanding your requirements.
          </p>
          <p className="text-slate-700 font-medium">
            Send me a message for a quick, no-obligation quote.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Let's discuss your project and create a plan that works for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Link to="/contact">Contact Me</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
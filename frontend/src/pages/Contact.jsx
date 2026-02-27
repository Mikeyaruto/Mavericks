import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - in real implementation, this would send to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    'Shopify Website Design',
    'n8n Automation',
    'AI Chatbots',
    'AI Voice Agents',
    'VPS Deployment',
    'Meta App Review',
    'NeoLife',
    'Other',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg md:text-xl text-slate-600">
              Ready to discuss your project? Choose your preferred way to reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-cyan-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-cyan-600" size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Email Me</h3>
                <a
                  href="mailto:stormmichael382@gmail.com"
                  className="text-cyan-600 hover:text-cyan-700 text-sm break-all"
                >
                  stormmichael382@gmail.com
                </a>
                <div className="mt-4">
                  <Button
                    asChild
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                  >
                    <a href="mailto:stormmichael382@gmail.com">Send Email</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">WhatsApp</h3>
                <a
                  href="tel:+2349073661738"
                  className="text-green-600 hover:text-green-700 text-sm"
                >
                  +234 907 366 1738
                </a>
                <div className="mt-4">
                  <Button
                    asChild
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    <a
                      href="https://wa.me/2349073661738?text=Hi%20Michael!%20I%20found%20your%20portfolio%20website%20and%20I'd%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Call Me</h3>
                <a
                  href="tel:+2349073661738"
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  +234 907 366 1738
                </a>
                <div className="mt-4">
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <a href="tel:+2349073661738">Call Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Or Send a Message
            </h2>
            <p className="text-slate-600">
              Fill out the form below and I'll get back to you within 24 hours
            </p>
          </div>

          <Card className="border-slate-200">
            <CardContent className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. I'll respond to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="+234 xxx xxx xxxx"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project, goals, and timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                  >
                    Send Message
                    <Send className="ml-2" size={20} />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How long does a Shopify store take?',
                a: 'Typically 2-4 weeks depending on complexity, customization needs, and content availability.',
              },
              {
                q: 'Can you automate my lead gen?',
                a: 'Yes! I can build n8n workflows that capture leads from multiple sources, enrich data, sync to your CRM, and trigger automated follow-ups.',
              },
              {
                q: 'Do you deploy to VPS?',
                a: 'Absolutely. I handle full VPS setup including Docker containers, reverse proxy, SSL, monitoring, and deployment pipelines.',
              },
              {
                q: 'Can you build WhatsApp + AI chatbots?',
                a: 'Yes, I build intelligent chatbots for WhatsApp and web that handle customer support, appointments, and lead qualification.',
              },
              {
                q: 'Can you build AI voice agents for calls?',
                a: 'Yes! Using Twilio/Telnyx, I create AI voice agents for inbound/outbound calls with CRM integration and call logging.',
              },
              {
                q: 'Do you offer support/maintenance?',
                a: 'Yes, I provide ongoing support and maintenance packages to ensure your systems continue running smoothly.',
              },
              {
                q: 'What do you need from me to start?',
                a: 'Clear project goals, any existing assets (branding, content, logins), and your timeline. We\'ll discuss the rest in our initial call.',
              },
              {
                q: 'Can you integrate HubSpot?',
                a: 'Yes, I work with HubSpot API and can integrate it with other systems for seamless data flow.',
              },
              {
                q: 'Can you connect APIs/webhooks?',
                a: 'Definitely. API and webhook integrations are core to most automation projects I build.',
              },
              {
                q: 'How do I join NeoLife through you?',
                a: 'Visit the NeoLife page on this site and use my distributor link to sign up. I\'ll be available to support you.',
              },
            ].map((faq, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2 text-lg">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
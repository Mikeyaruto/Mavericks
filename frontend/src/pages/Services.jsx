import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Workflow, MessageSquare, Phone, Server, FileCheck, CheckCircle, ArrowRight, Bot, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Shopify Website Design & Optimization',
      painPoint: '❌ Slow, outdated Shopify store losing customers?',
      solution: '✅ I build lightning-fast, conversion-optimized stores that turn visitors into buyers',
      deliverables: [
        'Premium Shopify store setup from scratch',
        'Custom theme design and customization',
        'Speed optimization (2-3 second load times)',
        'Conversion-focused product pages',
        'Payment gateway and shipping integration',
        'App integrations (email, reviews, analytics)',
        'Advanced SEO setup (meta tags, schema, URLs)',
        'Mobile-first responsive design',
        'Admin training and documentation',
      ],
    },
    {
      icon: Workflow,
      title: 'n8n Automation & Workflow Systems',
      painPoint: '❌ Wasting 10+ hours/week on repetitive manual tasks?',
      solution: '✅ I automate your workflows so you focus on growth, not grunt work',
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
      title: 'AI Chatbots (WhatsApp + Web + MoltBot)',
      painPoint: '❌ Missing customer messages and losing sales?',
      solution: '✅ My AI chatbots respond instantly 24/7 and never miss a lead',
      deliverables: [
        'WhatsApp Business API integration',
        'Website chatbot deployment (MoltBot framework)',
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
      title: 'AI Voice Agents (Twilio / Telnyx)',
      painPoint: '❌ Calls going to voicemail costing you money?',
      solution: '✅ AI voice agents answer every call and qualify leads automatically',
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
      icon: Bot,
      title: 'ClawBot & OpenClaw Automation',
      painPoint: '❌ Need advanced web scraping and data extraction?',
      solution: '✅ ClawBot extracts data from any website automatically and accurately',
      deliverables: [
        'Custom ClawBot scraper development',
        'OpenClaw framework integration',
        'Dynamic content scraping (JavaScript sites)',
        'Data extraction and formatting',
        'Scheduled automated scraping',
        'Anti-detection and proxy setup',
        'Data export (CSV, JSON, Database)',
        'Error handling and monitoring',
        'Documentation and maintenance',
      ],
    },
    {
      icon: Server,
      title: 'VPS + Docker Deployment',
      painPoint: '❌ App ready but no idea how to deploy to production?',
      solution: '✅ I handle full deployment: server setup, Docker, SSL, monitoring - everything',
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
      painPoint: '❌ App review keeps getting rejected by Meta?',
      solution: '✅ I prepare perfect documentation and get your app approved fast',
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
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🚨 Struggling with these problems? I fix them.
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Services That Actually Solve Your Business Problems
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                No fluff. No jargon. Just solutions that save time, make money, and grow your business.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="border-2 border-slate-200 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl">
                    <CardContent className="p-8 md:p-12">
                      <div className="grid md:grid-cols-3 gap-8">
                        {/* Left: Icon & Title */}
                        <div>
                          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 border-2 border-cyan-200">
                            <Icon className="text-cyan-600" size={32} />
                          </div>
                          <h2 className="text-2xl font-bold text-slate-900 mb-3">
                            {service.title}
                          </h2>
                          
                          {/* Pain Point */}
                          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r mb-3">
                            <p className="text-sm font-semibold text-red-800">{service.painPoint}</p>
                          </div>
                          
                          {/* Solution */}
                          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                            <p className="text-sm font-semibold text-green-800">{service.solution}</p>
                          </div>
                        </div>

                        {/* Right: Deliverables */}
                        <div className="md:col-span-2">
                          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                            <Zap className="text-cyan-600 mr-2" size={20} />
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
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Card className="border-slate-200 bg-white shadow-xl">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Not Sure What You Need?
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Let's have a quick conversation about your business goals and I'll recommend the best solution.
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/50">
                  <Link to="/contact">
                    Schedule a Free Consultation
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
            <p className="text-lg text-slate-600 mb-6">
              Pricing depends on project scope and complexity. Every business has unique needs, so I provide custom quotes after understanding your requirements.
            </p>
            <p className="text-slate-700 font-medium">
              Send me a message for a quick, no-obligation quote.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6TTQgMzR2Mmgydi0ySDR6bTAtNHYyaDJ2LTJINHptMC00djJoMnYtMkg0em0wLTR2Mmgydi0ySDR6bTAtNHYyaDJ2LTJINHptMC00djJoMnYtMkg0em0wLTR2Mmgydi0ySDR6bTAtNHYyaDJ2LTJINHptMC00djJoMnYtMkg0em0zMiAwdjJoMnYtMmgtMnptNCAwdjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <ScrollReveal>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Let's discuss your project and create a plan that works for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/50">
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Services;

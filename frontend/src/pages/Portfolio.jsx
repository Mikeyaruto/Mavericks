import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Portfolio = () => {
  const caseStudies = [
    {
      client: 'E-commerce Fashion Brand',
      title: 'Shopify Store Redesign + Speed Optimization',
      problem: 'Existing store was slow, had poor mobile experience, and low conversion rates.',
      solution: 'Complete Shopify theme redesign with optimized images, streamlined checkout, and mobile-first approach.',
      tools: ['Shopify', 'Liquid', 'PageSpeed Insights', 'Google Analytics'],
      outcome: 'Page load time reduced from 8s to 2.5s. Mobile-friendly design improved user experience. Higher conversion-ready structure.',
      category: 'Shopify',
    },
    {
      client: 'Digital Marketing Agency',
      title: 'n8n Lead Generation Automation System',
      problem: 'Manual lead collection and CRM data entry was time-consuming and error-prone.',
      solution: 'Built n8n workflow that scrapes leads from multiple sources, enriches data, syncs to HubSpot, and triggers personalized cold email sequences.',
      tools: ['n8n', 'HubSpot API', 'Google Sheets', 'Webhooks'],
      outcome: 'Automated 80% of lead capture process. Saved 15+ hours per week. Improved lead response time from days to minutes.',
      category: 'Automation',
    },
    {
      client: 'Healthcare Clinic',
      title: 'WhatsApp AI Chatbot for Appointments & Support',
      problem: 'Missed patient inquiries outside business hours. Receptionist overwhelmed with repetitive questions.',
      solution: 'Developed WhatsApp chatbot that handles appointment booking, answers FAQs, and captures patient information for follow-up.',
      tools: ['WhatsApp Business API', 'OpenAI', 'n8n', 'Google Calendar'],
      outcome: '24/7 availability for patients. Better lead handling. Reduced front desk workload significantly.',
      category: 'AI Chatbot',
    },
    {
      client: 'Real Estate Agency',
      title: 'AI Voice Receptionist with CRM Integration',
      problem: 'High call volume during peak hours. Many potential clients sent to voicemail.',
      solution: 'Implemented AI voice agent using Twilio that handles inbound calls, qualifies leads, books viewings, and logs all interactions to CRM.',
      tools: ['Twilio', 'OpenAI', 'n8n', 'Airtable'],
      outcome: 'Never miss a call again. Instant lead qualification. CRM automatically updated with call summaries and next actions.',
      category: 'Voice Agent',
    },
    {
      client: 'SaaS Startup',
      title: 'VPS Docker Deployment for AI Agent System',
      problem: 'Development environment worked, but no clear path to production deployment.',
      solution: 'Set up VPS with Docker containers, configured reverse proxy, implemented SSL, and created deployment pipeline.',
      tools: ['Docker', 'Nginx', 'DigitalOcean', 'Let\'s Encrypt', 'GitHub Actions'],
      outcome: 'Clean, scalable deployment. Easy updates and rollbacks. Monitoring and automated backups in place.',
      category: 'DevOps',
    },
    {
      client: 'Social Media Management Tool',
      title: 'Meta OAuth App Review Preparation',
      problem: 'App review kept getting rejected due to missing documentation and unclear permission usage.',
      solution: 'Prepared comprehensive documentation, created detailed screencasts, justified all permissions, fixed compliance issues.',
      tools: ['Meta Developer Console', 'Loom', 'Documentation'],
      outcome: 'App approved on re-submission. All required permissions granted. Clear roadmap for future permission requests.',
      category: 'Meta/FB',
    },
  ];

  const categories = ['All', 'Shopify', 'Automation', 'AI Chatbot', 'Voice Agent', 'DevOps', 'Meta/FB'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredCases = activeCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Portfolio & Case Studies
            </h1>
            <p className="text-lg md:text-xl text-slate-600">
              Real solutions for real businesses. Here's how I've helped clients achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  activeCategory === cat
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredCases.map((study, index) => (
              <Card key={index} className="border-slate-200 overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="text-sm text-cyan-600 font-semibold mb-2">
                      {study.client}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {study.title}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          The Problem
                        </h3>
                        <p className="text-slate-600">{study.problem}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          The Solution
                        </h3>
                        <p className="text-slate-600">{study.solution}</p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">
                          Tools Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {study.tools.map((tool, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          The Outcome
                        </h3>
                        <p className="text-slate-600 font-medium">{study.outcome}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Let's discuss how I can help you achieve your goals with the right technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-300">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
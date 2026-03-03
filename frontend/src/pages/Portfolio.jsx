import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';

const Portfolio = () => {
  const caseStudies = [
    {
      client: 'E-commerce Fashion Brand',
      title: 'Shopify Store Redesign + Speed Optimization',
      problem: 'Existing store was slow (8s load time), had poor mobile experience, and low conversion rates. Losing customers at checkout.',
      solution: 'Complete Shopify theme redesign with optimized images, streamlined checkout, mobile-first approach, and conversion-focused product pages.',
      tools: ['Shopify', 'Liquid', 'PageSpeed Insights', 'Google Analytics'],
      outcome: 'Page load time: 8s → 2.5s | Mobile score improved 65% | Bounce rate reduced 40% | Higher conversion-ready structure',
      metrics: [
        { label: 'Load Time', value: '70% Faster', icon: Clock },
        { label: 'Mobile Score', value: '+65%', icon: TrendingUp },
        { label: 'Conversions', value: '+40%', icon: Users },
      ],
      category: 'Shopify',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    },
    {
      client: 'Digital Marketing Agency',
      title: 'n8n Lead Generation Automation System',
      problem: 'Manual lead collection from multiple sources. CRM data entry taking 15+ hours/week. Slow response times losing hot leads.',
      solution: 'Built n8n workflow that scrapes leads from multiple sources, enriches data, syncs to HubSpot CRM, and triggers personalized cold email sequences automatically.',
      tools: ['n8n', 'HubSpot API', 'Google Sheets', 'Webhooks', 'OpenAI'],
      outcome: 'Automated 80% of lead capture | Saved 15+ hours/week | Response time: days → minutes | 3x lead follow-up speed',
      metrics: [
        { label: 'Time Saved', value: '15+ hrs/wk', icon: Clock },
        { label: 'Automation', value: '80%', icon: TrendingUp },
        { label: 'Response', value: '3x Faster', icon: Users },
      ],
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
    {
      client: 'Healthcare Clinic',
      title: 'WhatsApp AI Chatbot (MoltBot) for Appointments',
      problem: 'Missed patient inquiries outside business hours. Receptionist overwhelmed with repetitive questions. No 24/7 support.',
      solution: 'Developed WhatsApp chatbot using MoltBot framework that handles appointment booking, answers medical FAQs, captures patient info, and syncs with Google Calendar.',
      tools: ['WhatsApp Business API', 'OpenAI', 'MoltBot', 'n8n', 'Google Calendar'],
      outcome: '24/7 patient availability | Zero missed inquiries | 60% reduction in front desk workload | Instant appointment booking',
      metrics: [
        { label: 'Availability', value: '24/7', icon: Clock },
        { label: 'Workload', value: '-60%', icon: TrendingUp },
        { label: 'Response', value: 'Instant', icon: Users },
      ],
      category: 'AI Chatbot',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
    },
    {
      client: 'Real Estate Agency',
      title: 'AI Voice Receptionist with CRM Integration',
      problem: 'High call volume during peak hours. Many potential clients sent to voicemail. Lost 30% of leads due to missed calls.',
      solution: 'Implemented AI voice agent using Twilio that handles inbound calls, qualifies leads, books property viewings, and logs all interactions to Airtable CRM automatically.',
      tools: ['Twilio', 'OpenAI', 'n8n', 'Airtable', 'Python'],
      outcome: 'Zero missed calls | Instant lead qualification | Auto CRM logging | 100% call coverage | Increased bookings by 45%',
      metrics: [
        { label: 'Missed Calls', value: '0%', icon: Clock },
        { label: 'Bookings', value: '+45%', icon: TrendingUp },
        { label: 'Coverage', value: '100%', icon: Users },
      ],
      category: 'Voice Agent',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
    },
    {
      client: 'E-commerce Data Analytics Startup',
      title: 'ClawBot Web Scraper for Market Intelligence',
      problem: 'Needed to track competitor pricing across 200+ e-commerce sites daily. Manual tracking impossible. Outdated data losing competitive edge.',
      solution: 'Built custom ClawBot scraper using OpenClaw framework that extracts pricing, product data, and reviews from 200+ sites daily. Auto-detects changes and sends alerts.',
      tools: ['ClawBot', 'OpenClaw', 'Python', 'MongoDB', 'Docker'],
      outcome: 'Automated 200+ site scraping | Real-time price monitoring | 100% accurate data extraction | Daily competitor reports',
      metrics: [
        { label: 'Sites Scraped', value: '200+', icon: TrendingUp },
        { label: 'Accuracy', value: '100%', icon: Users },
        { label: 'Updates', value: 'Daily', icon: Clock },
      ],
      category: 'ClawBot',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
    {
      client: 'SaaS Startup',
      title: 'VPS Docker Deployment for AI Agent System',
      problem: 'Development environment worked perfectly, but no clear path to production. Worried about security, SSL, scaling, and monitoring.',
      solution: 'Set up production-ready VPS with Docker containers, Nginx reverse proxy, SSL certificates, environment management, automated backups, and monitoring dashboard.',
      tools: ['Docker', 'Nginx', 'DigitalOcean', 'Let\'s Encrypt', 'GitHub Actions', 'Prometheus'],
      outcome: 'Clean scalable deployment | 99.9% uptime | Auto backups | Easy updates/rollbacks | Full monitoring | Zero downtime deployments',
      metrics: [
        { label: 'Uptime', value: '99.9%', icon: TrendingUp },
        { label: 'Deployment', value: 'Auto', icon: Clock },
        { label: 'Monitoring', value: '24/7', icon: Users },
      ],
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
    },
    {
      client: 'Social Media Management Tool',
      title: 'Meta OAuth App Review Preparation & Approval',
      problem: 'App review kept getting rejected by Meta. Missing documentation, unclear permission usage, compliance issues. 3 failed attempts.',
      solution: 'Prepared comprehensive documentation, created detailed screencasts showing exact permission usage, justified all permissions, fixed privacy policy compliance issues.',
      tools: ['Meta Developer Console', 'Loom', 'Documentation', 'Privacy Tools'],
      outcome: 'App approved on next submission | All required permissions granted | Clear roadmap for future permission requests | Faster review times',
      metrics: [
        { label: 'Approval', value: '1st Try', icon: TrendingUp },
        { label: 'Permissions', value: '100%', icon: Users },
        { label: 'Time Saved', value: 'Weeks', icon: Clock },
      ],
      category: 'Meta/FB',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
    },
  ];

  const categories = ['All', 'Shopify', 'Automation', 'AI Chatbot', 'Voice Agent', 'ClawBot', 'DevOps', 'Meta/FB'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredCases = activeCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Real Projects, Real Results
              </h1>
              <p className="text-lg md:text-xl text-slate-600">
                See how I've helped businesses like yours solve problems, save time, and increase revenue.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredCases.map((study, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-2 border-slate-200 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl">
                  {/* Project Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)';
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {study.category}
                      </span>
                    </div>
                  </div>

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

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-slate-50 rounded-xl">
                      {study.metrics.map((metric, idx) => {
                        const Icon = metric.icon;
                        return (
                          <div key={idx} className="text-center">
                            <Icon className="mx-auto text-cyan-600 mb-2" size={24} />
                            <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
                            <div className="text-xs text-slate-600">{metric.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center">
                            <span className="text-red-500 mr-2">❌</span> The Problem
                          </h3>
                          <p className="text-slate-600">{study.problem}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center">
                            <span className="text-green-500 mr-2">✅</span> The Solution
                          </h3>
                          <p className="text-slate-600">{study.solution}</p>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-3">
                            Tools & Technologies
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {study.tools.map((tool, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 text-sm rounded-full border border-cyan-200 font-medium"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            The Results
                          </h3>
                          <p className="text-slate-600 font-medium bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                            {study.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6TTQgMzR2Mmgydi0ySDR6bTAtNHYyaDJ2LTJINHptMC00djJoMnYtMkg0em0wLTR2Mmgydi0ySDR6bTAtNHYyaDJ2LTJINHptMC00djJoMnYtMkg0em0wLTR2Mmgydi0ySDR6bTAtNHYyaDJ2LTJINHptMC00djJoMnYtMkg0em0zMiAwdjJoMnYtMmgtMnptNCAwdjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <ScrollReveal>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want Similar Results for Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Let's discuss how I can help you achieve your goals with proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/50">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Portfolio;

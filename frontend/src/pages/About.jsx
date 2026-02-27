import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Code, Workflow, MessageSquare, Phone, Server, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const techStack = [
    { name: 'Shopify', category: 'E-commerce' },
    { name: 'n8n', category: 'Automation' },
    { name: 'OpenAI', category: 'AI' },
    { name: 'Twilio', category: 'Voice' },
    { name: 'Telnyx', category: 'Voice' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'VPS/Cloud', category: 'Infrastructure' },
    { name: 'WhatsApp API', category: 'Messaging' },
    { name: 'HubSpot', category: 'CRM' },
    { name: 'APIs & Webhooks', category: 'Integration' },
    { name: 'Nginx', category: 'Web Server' },
    { name: 'PostgreSQL/MongoDB', category: 'Database' },
  ];

  const workProcess = [
    {
      step: '01',
      title: 'Discover',
      description: 'We discuss your business goals, current challenges, and desired outcomes. I ask questions to understand what success looks like for you.',
      icon: MessageSquare,
    },
    {
      step: '02',
      title: 'Build',
      description: 'I design and develop the solution, keeping you updated throughout. You\'ll see progress regularly and can provide feedback at key milestones.',
      icon: Code,
    },
    {
      step: '03',
      title: 'Test',
      description: 'Thorough testing ensures everything works correctly before launch. We test real scenarios to catch issues early.',
      icon: CheckCircle,
    },
    {
      step: '04',
      title: 'Deploy & Support',
      description: 'I deploy to production, train your team, provide documentation, and offer ongoing support to ensure long-term success.',
      icon: Server,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/michael-profile.jpg"
                  alt="Michael Egbeneye"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Hi, I'm Michael Egbeneye
              </h1>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                I'm a freelance tech specialist focused on helping businesses leverage technology to sell more and work less. I specialize in Shopify e-commerce, automation systems, AI chatbots, and voice agents.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                What sets me apart is that I don't just build what you ask for - I think about what will actually work best for your business. I combine technical expertise with real business thinking to create solutions that drive measurable results.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I believe in clear communication, on-time delivery, and building long-term relationships with clients. When you work with me, you're not just getting a developer - you're getting a partner who's invested in your success.
              </p>
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Link to="/contact">
                  Let's Work Together
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Tech Stack & Tools
            </h2>
            <p className="text-lg text-slate-600">
              Technologies I use to build reliable, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="font-semibold text-slate-900 mb-1">{tech.name}</div>
                  <div className="text-sm text-slate-600">{tech.category}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How I Work
            </h2>
            <p className="text-lg text-slate-600">
              A simple, transparent process from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-md h-full border border-slate-200">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-50 rounded-full mb-4">
                      <Icon className="text-cyan-600" size={28} />
                    </div>
                    <div className="text-4xl font-bold text-cyan-600 mb-2">{process.step}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{process.title}</h3>
                    <p className="text-slate-600">{process.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Why Work With Me?
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'Reliability You Can Count On',
                text: 'I meet deadlines, respond quickly, and keep you informed throughout the project.',
              },
              {
                title: 'Clear Communication',
                text: 'No technical jargon unless you want it. I explain things in plain language and make sure we\'re always on the same page.',
              },
              {
                title: 'Business-First Thinking',
                text: 'Technology is just a tool. I focus on solutions that actually drive business results, not just cool features.',
              },
              {
                title: 'Long-Term Support',
                text: 'I don\'t disappear after launch. I provide ongoing support and maintenance to ensure your system keeps working smoothly.',
              },
              {
                title: 'Honest, Transparent Pricing',
                text: 'No surprises or hidden fees. You\'ll know exactly what you\'re paying for and why.',
              },
            ].map((item, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-6 flex items-start space-x-4">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Ready to take your business to the next level? Let's talk about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
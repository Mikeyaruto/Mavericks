import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Workflow, MessageSquare, Phone, Server, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Shopify Website Design',
      description: 'Custom Shopify stores optimized for conversions and speed',
    },
    {
      icon: Workflow,
      title: 'n8n Automation',
      description: 'Business process automation and workflow systems',
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbots',
      description: 'WhatsApp and web chatbots for customer support',
    },
    {
      icon: Phone,
      title: 'AI Voice Agents',
      description: 'Intelligent voice assistants for calls and support',
    },
    {
      icon: Server,
      title: 'VPS Deployment',
      description: 'Docker containerization and cloud infrastructure',
    },
  ];

  const tools = [
    'Shopify',
    'n8n',
    'OpenAI',
    'Twilio',
    'Docker',
    'HubSpot',
    'WhatsApp API',
    'Telnyx',
  ];

  const benefits = [
    'Fast delivery and clear communication',
    'Real business results, not just features',
    'Long-term support and maintenance',
    'Transparent pricing and process',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-cyan-50 text-cyan-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
                Available for Projects
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                I Build Shopify Stores, AI Automations & Voice Agents That Help Businesses Sell More and Work Less
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Shopify design • n8n automation • WhatsApp/AI chatbots • AI voice agents • VPS/Docker deployment • Lead gen systems
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white text-base px-8"
                >
                  <Link to="/contact">
                    Get a Free Consultation
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 text-base px-8"
                >
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/michael-profile.jpg"
                  alt="Michael Egbeneye"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-slate-200">
                <div className="flex items-center space-x-3">
                  <Shield className="text-cyan-600" size={32} />
                  <div>
                    <div className="font-bold text-slate-900">Trusted Expert</div>
                    <div className="text-sm text-slate-600">5+ Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Strip */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-600 font-medium mb-6">Tools & Platforms I Work With</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {tools.map((tool, index) => (
              <div key={index} className="text-slate-700 font-semibold text-lg">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Services That Drive Results
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From e-commerce to automation, I build systems that save time and increase revenue
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-cyan-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-cyan-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-slate-600">
              Real solutions for real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-slate-100" />
                <CardContent className="p-6">
                  <div className="text-sm text-cyan-600 font-medium mb-2">
                    Shopify + Automation
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    E-commerce Store Transformation
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Complete redesign with automated lead capture system
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-slate-300">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            What Clients Say
          </h2>
          <Card className="border-slate-200">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-lg text-slate-700 mb-4 italic">
                "Michael delivered exactly what we needed - a fast, professional Shopify store with seamless automation. His communication was clear and the project was completed on time."
              </p>
              <div className="font-semibold text-slate-900">E-commerce Owner</div>
              <div className="text-sm text-slate-600">Fashion Retail Business</div>
            </CardContent>
          </Card>
          <div className="mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* NeoLife CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Interested in Health & Wellness?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            I'm also a NeoLife distributor. Join a community focused on quality wellness products.
          </p>
          <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
            <Link to="/neolife">Learn About NeoLife</Link>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Let's discuss how I can help your business grow with the right technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <a href="mailto:stormmichael382@gmail.com">Email Me</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
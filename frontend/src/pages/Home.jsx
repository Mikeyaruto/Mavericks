import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, CheckCircle, Code, Workflow, MessageSquare, Phone, Server, Briefcase, Facebook, Twitter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import ParticleBackground from '../components/ParticleBackground';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

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
      {/* Hero Section with Gradient Background and Particles */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* Dramatic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6TTQgMzR2Mmgydi0ySDR6bTAtNHYyaDJ2LTJINHptMC00djJoMnYtMkg0em0wLTR2Mmgydi0ySDR6bTAtNHYyaDJ2LTJINHptMC00djJoMnYtMkg0em0wLTR2Mmgydi0ySDR6bTAtNHYyaDJ2LTJINHptMC00djJoMnYtMkg0em0zMiAwdjJoMnYtMmgtMnptNCAwdjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Particle Effects */}
        <ParticleBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <ScrollReveal>
              <div className="text-white">
                <div className="inline-block bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 px-4 py-1 rounded-full text-sm font-medium mb-6">
                  Available for Projects
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  I Build{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    <Typewriter
                      words={['Shopify Stores', 'AI Automations', 'Voice Agents', 'Chatbots', 'Lead Systems']}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                  That Help Businesses Sell More and Work Less
                </p>

                <p className="text-slate-400 mb-8">
                  Shopify design • n8n automation • WhatsApp/AI chatbots • AI voice agents • VPS/Docker deployment • Lead gen systems
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Freelance Platform CTAs */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white text-base px-8 shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
                  >
                    <a href="https://www.fiverr.com/s/YR2gNml" target="_blank" rel="noopener noreferrer">
                      <Briefcase className="mr-2" size={20} />
                      Hire on Fiverr
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-cyan-400 text-white hover:bg-cyan-500/20 text-base px-8 backdrop-blur-sm"
                  >
                    <a href="https://www.upwork.com/freelancers/~0171dae6024ab99b4a" target="_blank" rel="noopener noreferrer">
                      <Briefcase className="mr-2" size={20} />
                      Hire on Upwork
                    </a>
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  <span className="text-slate-400 text-sm">Connect:</span>
                  <a 
                    href="https://web.facebook.com/profile.php?id=61574655868703" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a 
                    href="https://x.com/mikeyaruto09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-sky-400 transition-colors"
                  >
                    <Twitter size={24} />
                  </a>
                </div>

                {/* Main CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-base px-8 shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
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
                    className="border-white text-white hover:bg-white hover:text-slate-900 text-base px-8"
                  >
                    <Link to="/services">View Services</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Glowing Profile Photo */}
            <ScrollReveal delay={200}>
              <div className="relative">
                {/* Glow effect rings */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Photo container with gradient border ring */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 p-1">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="/images/michael-professional.png"
                      alt="Michael Egbeneye"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-2">
                      <CheckCircle className="text-white" size={32} />
                    </div>
                    <div>
                      <div className="font-bold text-white">Trusted Expert</div>
                      <div className="text-sm text-slate-300">5+ Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same but wrapped in ScrollReveal... */}
      {/* Tools Strip */}
      <section className="py-12 bg-white border-y border-slate-200">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-slate-600 font-medium mb-6">Tools & Platforms I Work With</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              {tools.map((tool, index) => (
                <div key={index} className="text-slate-700 font-semibold text-lg hover:text-cyan-600 transition-colors">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Services Overview with enhanced cards */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Services That Drive Results
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                From e-commerce to automation, I build systems that save time and increase revenue
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="border-2 border-transparent hover:border-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 group relative overflow-hidden">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" style={{ padding: '2px' }}>
                      <div className="bg-white rounded-lg h-full w-full"></div>
                    </div>
                    <CardContent className="p-6 relative z-10">
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="text-cyan-600 group-hover:text-blue-600 transition-colors" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300">
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-slate-300 font-medium">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-slate-300 font-medium">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={5} suffix="+" />
                </div>
                <div className="text-slate-300 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Recent Projects
              </h2>
              <p className="text-lg text-slate-600">
                Real solutions for real businesses
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <ScrollReveal key={item} delay={item * 100}>
                <Card className="border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="h-48 bg-gradient-to-br from-cyan-100 to-blue-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </div>
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
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="border-slate-300 hover:border-cyan-600 hover:text-cyan-600">
                <Link to="/portfolio">View All Projects</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
              What Clients Say
            </h2>
            <Card className="border-slate-200 shadow-xl">
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
          </ScrollReveal>
        </div>
      </section>

      {/* NeoLife CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-50 to-blue-50">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Interested in Health & Wellness?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              I'm also a NeoLife distributor. Join a community focused on quality wellness products.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/50">
              <Link to="/neolife">Learn About NeoLife</Link>
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6TTQgMzR2Mmgydi0ySDR6bTAtNHYyaDJ2LTJINHptMC00djJoMnYtMkg0em0wLTR2Mmgydi0ySDR6bTAtNHYyaDJ2LTJINHptMC00djJoMnYtMkg0em0wLTR2Mmgydi0ySDR6bTAtNHYyaDJ2LTJINHptMC00djJoMnYtMkg0em0zMiAwdjJoMnYtMmgtMnptNCAwdjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <ScrollReveal>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Let's discuss how I can help your business grow with the right technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300">
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <a href="mailto:stormmichael382@gmail.com">Email Me</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;

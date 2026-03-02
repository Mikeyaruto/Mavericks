import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Twitter, Facebook, Briefcase, AlertCircle, TrendingUp, Zap } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/egbeneye-michael-294623334?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Facebook, url: 'https://web.facebook.com/profile.php?id=61574655868703', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, url: 'https://x.com/mikeyaruto09', label: 'Twitter/X', color: 'hover:text-sky-400' },
  ];

  const fiverrUpworkLinks = [
    { name: 'Hire on Fiverr', url: 'https://www.fiverr.com/s/YR2gNml', color: 'bg-green-600 hover:bg-green-700' },
    { name: 'Upwork Profile 1', url: 'https://www.upwork.com/freelancers/~0171dae6024ab99b4a', color: 'bg-green-600 hover:bg-green-700' },
    { name: 'Upwork Profile 2', url: 'https://www.upwork.com/freelancers/~01472af65f6ce54a96', color: 'bg-green-600 hover:bg-green-700' },
  ];

  // Client Pain Points - What I Fix
  const painPoints = [
    { icon: AlertCircle, problem: 'Losing Sales?', solution: 'I build fast Shopify stores that convert visitors into customers' },
    { icon: Zap, problem: 'Wasting Time?', solution: 'My n8n automations eliminate repetitive tasks and save 15+ hours/week' },
    { icon: TrendingUp, problem: 'Missing Leads?', solution: 'AI chatbots & voice agents capture every opportunity 24/7' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Pain Points Section - Why Choose Me */}
        <div className="mb-12">
          <h3 className="text-white font-bold text-3xl mb-2 text-center">Struggling With These Problems?</h3>
          <p className="text-cyan-400 text-center mb-8 text-lg">I Fix Them. Here's How:</p>
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-500/20 rounded-lg p-2">
                      <Icon className="text-red-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{point.problem}</h4>
                      <p className="text-slate-400 text-sm">{point.solution}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Freelance Platform Links */}
        <div className="mb-12 text-center">
          <h3 className="text-white font-bold text-2xl mb-6">Hire Me On:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {fiverrUpworkLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 flex items-center space-x-2`}
              >
                <Briefcase size={20} />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center space-x-2">
              <img src="/logo-me.svg" alt="ME" className="h-8 w-8" />
              <span>Michael Egbeneye</span>
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Shopify Designer • n8n Automation Expert • AI Chatbot Developer • AI Voice Agent Builder • VPS Docker Deployment • Nigeria
            </p>
          </div>

          {/* Quick Links - Client-Focused */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  See What I Can Build For You
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Real Results I've Delivered
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-sm hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  What Clients Say About Me
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Why Work With Me
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                  Start Your Project Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - Pain Point Focused */}
          <div>
            <h4 className="text-white font-semibold mb-4">I Solve These Problems</h4>
            <ul className="space-y-2">
              <li className="text-sm text-slate-400">
                <span className="text-cyan-400">→</span> Slow, ugly Shopify stores
              </li>
              <li className="text-sm text-slate-400">
                <span className="text-cyan-400">→</span> Manual, time-wasting tasks
              </li>
              <li className="text-sm text-slate-400">
                <span className="text-cyan-400">→</span> Missed customer messages
              </li>
              <li className="text-sm text-slate-400">
                <span className="text-cyan-400">→</span> Lost sales opportunities
              </li>
              <li className="text-sm text-slate-400">
                <span className="text-cyan-400">→</span> Complex VPS deployment
              </li>
              <li className="text-sm text-slate-400">
                <span className="text-cyan-400">→</span> No automation expertise
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 text-cyan-400 flex-shrink-0" />
                <a
                  href="mailto:stormmichael382@gmail.com"
                  className="text-sm hover:text-cyan-400 transition-colors break-all"
                >
                  stormmichael382@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 text-cyan-400 flex-shrink-0" />
                <a
                  href="tel:+2349073661738"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  +234 907 366 1738
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* 100% Guarantee Section */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/30">
            <h4 className="text-white font-bold text-xl mb-3 text-center">
              💯 Why Clients Choose Me (100% Reasons)
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">Fast Delivery</div>
                <p className="text-sm text-slate-300">Projects completed on time, every time</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">Clear Communication</div>
                <p className="text-sm text-slate-300">Always available, no confusion</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">Real Results</div>
                <p className="text-sm text-slate-300">Solutions that actually work for your business</p>
              </div>
            </div>
          </div>
        </div>

        {/* NeoLife CTA */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-xl p-6 text-center backdrop-blur-sm border border-slate-700/50">
            <h4 className="text-white font-semibold text-lg mb-2">
              Interested in NeoLife Wellness Products?
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Join a community focused on health and wellness
            </p>
            <a
              href="https://shopneolife.com/MICHAELEGBENEYE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
            >
              Learn More About NeoLife
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Michael Egbeneye. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

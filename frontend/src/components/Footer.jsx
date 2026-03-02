import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Twitter, Facebook, Briefcase } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, url: 'https://web.facebook.com/profile.php?id=61574655868703', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, url: 'https://x.com/mikeyaruto09', label: 'Twitter/X', color: 'hover:text-sky-400' },
    { icon: Linkedin, url: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
  ];

  const fiverrUpworkLinks = [
    { name: 'Hire on Fiverr', url: 'https://www.fiverr.com/s/YR2gNml', color: 'bg-green-600 hover:bg-green-700' },
    { name: 'Upwork Profile 1', url: 'https://www.upwork.com/freelancers/~0171dae6024ab99b4a', color: 'bg-green-600 hover:bg-green-700' },
    { name: 'Upwork Profile 2', url: 'https://www.upwork.com/freelancers/~01472af65f6ce54a96', color: 'bg-green-600 hover:bg-green-700' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
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

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'Portfolio', 'Reviews', 'About'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-sm hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Shopify Design', 'n8n Automation', 'AI Chatbots', 'AI Voice Agents', 'VPS Deployment'].map((service) => (
                <li key={service} className="text-sm text-slate-400">{service}</li>
              ))}
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

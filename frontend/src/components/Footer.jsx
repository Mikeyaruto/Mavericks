import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Michael Egbeneye
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Shopify Designer • n8n Automation Expert • AI Chatbot Developer • AI Voice Agent Builder • VPS Docker Deployment • Nigeria
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-cyan-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-sm hover:text-cyan-400 transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-slate-400">Shopify Design</li>
              <li className="text-sm text-slate-400">n8n Automation</li>
              <li className="text-sm text-slate-400">AI Chatbots</li>
              <li className="text-sm text-slate-400">AI Voice Agents</li>
              <li className="text-sm text-slate-400">VPS Deployment</li>
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
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* NeoLife CTA */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="bg-slate-800 rounded-lg p-6 text-center">
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
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
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
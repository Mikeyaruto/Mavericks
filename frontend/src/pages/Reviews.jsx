import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'E-commerce Owner',
      company: 'Fashion Retail Business',
      rating: 5,
      text: 'Michael delivered exactly what we needed - a fast, professional Shopify store with seamless automation. His communication was clear, he understood our requirements perfectly, and the project was completed on time. Highly recommend!',
    },
    {
      name: 'David Martinez',
      role: 'Agency Founder',
      company: 'Digital Marketing Agency',
      rating: 5,
      text: 'Working with Michael on our lead generation automation was a game-changer. He built an n8n workflow that saved us countless hours and improved our response time dramatically. Technical expertise combined with business understanding.',
    },
    {
      name: 'Dr. Amina Okafor',
      role: 'Healthcare Administrator',
      company: 'Medical Clinic',
      rating: 5,
      text: 'The WhatsApp chatbot Michael developed handles patient inquiries 24/7, which has been incredible for our clinic. Setup was smooth, training was thorough, and ongoing support has been excellent. Very professional work.',
    },
    {
      name: 'James Richardson',
      role: 'Real Estate Broker',
      company: 'Property Agency',
      rating: 5,
      text: 'We were missing so many calls before Michael set up our AI voice agent. Now every inquiry is handled professionally, leads are qualified automatically, and everything logs to our CRM. The ROI has been outstanding.',
    },
    {
      name: 'Chidi Okonkwo',
      role: 'Tech Startup Founder',
      company: 'SaaS Company',
      rating: 5,
      text: 'Michael helped us deploy our application to production using Docker and VPS. He explained everything clearly, documented the process, and made sure we could maintain it ourselves. Great developer and communicator.',
    },
    {
      name: 'Emily Chen',
      role: 'Product Manager',
      company: 'Social Media Tool',
      rating: 5,
      text: 'Our Meta app review kept failing until Michael stepped in. He prepared all the documentation, created the screencasts, and got us approved. His attention to detail and knowledge of Meta\'s requirements was invaluable.',
    },
    {
      name: 'Tunde Adebayo',
      role: 'Business Owner',
      company: 'Consulting Firm',
      rating: 5,
      text: 'Michael is reliable, communicative, and delivers quality work. He took time to understand our business needs before recommending solutions. The automation system he built has transformed how we operate.',
    },
    {
      name: 'Lisa Thompson',
      role: 'Operations Manager',
      company: 'E-learning Platform',
      rating: 5,
      text: 'Fast delivery, clear communication, and real business results. Michael doesn\'t just build what you ask for - he thinks about what will actually work best for your business. That\'s rare and valuable.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Client Reviews & Testimonials
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-6">
              See what clients say about working with me
            </p>
            <div className="bg-cyan-50 border border-cyan-100 rounded-lg p-4 inline-block">
              <p className="text-sm text-cyan-800 font-medium">
                <strong>Note:</strong> These are sample client feedback examples. Real client testimonials will be added as projects are completed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 mb-6 leading-relaxed">"{review.text}"</p>

                  {/* Reviewer Info */}
                  <div className="border-t border-slate-200 pt-4">
                    <div className="font-semibold text-slate-900">{review.name}</div>
                    <div className="text-sm text-slate-600">{review.role}</div>
                    <div className="text-sm text-cyan-600">{review.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">5.0</div>
              <div className="text-slate-600 font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">50+</div>
              <div className="text-slate-600 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">100%</div>
              <div className="text-slate-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Clients Value */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            What Clients Value Most
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Clear, responsive communication',
              'On-time project delivery',
              'Technical expertise across multiple platforms',
              'Business-focused thinking, not just technical',
              'Thorough documentation and training',
              'Long-term support and maintenance',
              'Transparent pricing and process',
              'Solutions that actually drive results',
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-cyan-50 rounded-full p-2 flex-shrink-0">
                  <Star className="text-cyan-600" size={16} />
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience This Level of Service?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Let's discuss your project and how I can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
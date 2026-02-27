import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Heart, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const NeoLife = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Quality Wellness Products',
      description: 'Access to scientifically-backed nutritional supplements and wellness products',
    },
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'Join a global community focused on health, wellness, and personal growth',
    },
    {
      icon: TrendingUp,
      title: 'Business Opportunity',
      description: 'Build a business around products you believe in with proven systems and support',
    },
    {
      icon: Shield,
      title: 'Trusted Brand',
      description: 'Partner with an established company with decades of experience in wellness',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              NeoLife Wellness & Business Opportunity
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              In addition to my tech services, I'm also a NeoLife distributor. If you're interested in quality wellness products or exploring a business opportunity, I'd love to help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* What is NeoLife */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-slate-200">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                What is NeoLife?
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  NeoLife is a global wellness company that has been providing scientifically-backed nutritional supplements and wellness products for decades. Their products are designed to support overall health, nutrition, and well-being.
                </p>
                <p>
                  As a NeoLife distributor, I help people access these products and, for those interested, provide support in building their own NeoLife business.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why NeoLife?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-slate-200">
                  <CardContent className="p-8">
                    <div className="bg-cyan-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-cyan-600" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            How to Get Started
          </h2>
          <Card className="border-slate-200">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Visit the NeoLife Store
                    </h3>
                    <p className="text-slate-600">
                      Browse products and learn more about NeoLife through my distributor link.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Create an Account
                    </h3>
                    <p className="text-slate-600">
                      Sign up through my link to ensure you're connected with my team for support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Get Support
                    </h3>
                    <p className="text-slate-600">
                      Reach out to me with any questions. I'm here to help you understand the products and business opportunity.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Explore NeoLife?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Visit the NeoLife store through my distributor link to get started, or contact me if you have questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 text-white"
            >
              <a
                href="https://shopneolife.com/MICHAELEGBENEYE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit NeoLife Store
                <ExternalLink className="ml-2" size={20} />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-300"
            >
              <Link to="/contact">
                Contact Me
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Important Disclaimer</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Results vary. This is not medical advice. Product and income results depend on individual effort and consistency. NeoLife products are nutritional supplements and are not intended to diagnose, treat, cure, or prevent any disease. Please consult with a healthcare professional before starting any new supplement regimen.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default NeoLife;
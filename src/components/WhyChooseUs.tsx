import React from 'react';
import { Shield, Clock, DollarSign, Award } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Secure Transactions',
    description: 'Our secure platform ensures your license details and payment information are always protected with industry-leading encryption.',
    icon: <Shield className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 2,
    title: 'Fast Turnaround',
    description: 'Get valuations within 24 hours and receive payment in as little as 3 business days after accepting an offer.',
    icon: <Clock className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 3,
    title: 'Competitive Pricing',
    description: 'Our market analysis ensures you receive the best possible value for your software licenses.',
    icon: <DollarSign className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 4,
    title: 'Expert Support',
    description: 'Our team of licensing experts is available to guide you through every step of the selling process.',
    icon: <Award className="h-6 w-6 text-blue-600" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-4">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SoftSell</h2>
          <p className="text-lg text-gray-600">
            We make selling software licenses simple, secure, and profitable.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 hover:border-blue-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
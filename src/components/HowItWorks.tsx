import React from 'react';
import { Upload, DollarSign, CreditCard, ChevronRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Upload Your Licenses',
    description: 'Submit your software license details through our secure portal. We support major vendors including Adobe, Microsoft, Autodesk, and more.',
    icon: <Upload className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 2,
    title: 'Get a Fair Valuation',
    description: 'Our algorithm analyzes current market conditions to provide you with a competitive valuation within 24 hours.',
    icon: <DollarSign className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 3,
    title: 'Get Paid Quickly',
    description: 'Once you accept the offer, receive payment via your preferred method within 3-5 business days.',
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How SoftSell Works</h2>
          <p className="text-lg text-gray-600">
            Our streamlined process makes selling your unused software licenses quick and hassle-free.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105 duration-300 shadow-md"
          >
            Start Selling Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
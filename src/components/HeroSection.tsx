import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-20 sm:pt-28 pb-16 sm:pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="text-center md:text-left">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-4"
                >
                  Software License Marketplace
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
                >
                  Unlock the Value of Your Unused Software
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0"
                >
                  Turn dormant software licenses into cash. Our marketplace connects sellers with buyers for a streamlined, secure transaction process.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all transform hover:scale-105 duration-300 shadow-md"
                  >
                    Sell My Licenses <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm"
                  >
                    Learn How It Works
                  </a>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-20 animate-pulse"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Software licenses visualization"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <div className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Adobe Creative Cloud</span>
                        <span className="text-sm font-bold text-green-600 dark:text-green-400">$349.99</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div className="h-2 rounded-full bg-blue-600 dark:bg-blue-500 w-3/4"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-600 dark:text-gray-400">Est. market value</span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">75% of retail</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
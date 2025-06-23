'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-wood-900/95 via-wood-800/90 to-wood-700/95" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cream-400/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-wood-600/10 rounded-full blur-xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cream-400/20 backdrop-blur-sm rounded-2xl mb-6">
              <Mail className="h-8 w-8 text-cream-300" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-wood-50 mb-4">
              Stay Updated with EduNest
            </h2>
            <p className="text-xl text-wood-200 max-w-2xl mx-auto leading-relaxed">
              Get the latest course updates, exclusive offers, and learning tips 
              delivered straight to your inbox every week.
            </p>
          </motion.div>

          {/* Subscription Form */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-wood-300/30 rounded-lg text-wood-100 placeholder-wood-300 focus:bg-white/15 focus:border-cream-400 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-cream-400 hover:bg-cream-300 text-wood-800 px-8 py-4 font-semibold rounded-lg group disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-wood-800 border-t-transparent" />
                    ) : (
                      <>
                        Subscribe
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <motion.div
                className="flex items-center justify-center space-x-3 bg-green-600/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-green-500 rounded-full p-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="text-wood-100 font-semibold">
                  Successfully subscribed! Welcome to EduNest family.
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                title: 'New Course Alerts',
                description: 'Be the first to know when we launch new courses',
                icon: '🎓'
              },
              {
                title: 'Exclusive Discounts',
                description: 'Get special offers and early-bird pricing',
                icon: '💰'
              },
              {
                title: 'Learning Tips',
                description: 'Weekly tips to boost your learning effectiveness',
                icon: '💡'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-wood-100 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-wood-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Privacy Note */}
          <motion.p
            className="text-wood-400 text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We respect your privacy. Unsubscribe at any time. 
            <span className="text-cream-300 hover:text-cream-200 cursor-pointer ml-1">
              Read our Privacy Policy
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
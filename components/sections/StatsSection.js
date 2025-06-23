'use client';

import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Star } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Students',
      description: 'Learners from around the world'
    },
    {
      icon: BookOpen,
      value: '200+',
      label: 'Premium Courses',
      description: 'Expertly crafted content'
    },
    {
      icon: Award,
      value: '150+',
      label: 'Certified Instructors',
      description: 'Industry professionals'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Average Rating',
      description: 'Student satisfaction score'
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background with wood texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/172276/pexels-photo-172276.jpeg')"
        }}
      />
      <div className="absolute inset-0 bg-wood-800/90" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-wood-50 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-wood-200 max-w-2xl mx-auto">
            Join our growing community of learners and transform your career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-cream-400/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:bg-cream-400/30 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="h-8 w-8 text-cream-300" />
              </motion.div>
              
              <motion.div
                className="text-4xl md:text-5xl font-bold text-wood-50 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              >
                {stat.value}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-cream-200 mb-2">
                {stat.label}
              </h3>
              
              <p className="text-wood-300 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievement badges */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {['Best Online Platform 2024', 'Top Rated Courses', 'Excellence in Education'].map((badge, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-wood-700/50 backdrop-blur-sm rounded-full px-4 py-2"
            >
              <Award className="h-5 w-5 text-cream-300" />
              <span className="text-wood-200 text-sm font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
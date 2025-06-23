'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Fatima Rahman',
      role: 'Frontend Developer',
      company: 'Tech Solutions BD',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      rating: 5,
      comment: 'EduNest completely transformed my career. The React course was comprehensive and the instructor was amazing. I landed my dream job within 3 months of completing the course!'
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      role: 'UX Designer',
      company: 'Creative Agency',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg',
      rating: 5,
      comment: 'The UI/UX course exceeded my expectations. The practical projects and feedback from instructors helped me build an impressive portfolio. Highly recommended!'
    },
    {
      id: 3,
      name: 'Rashida Khan',
      role: 'Digital Marketing Manager',
      company: 'StartupHub',
      image: 'https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg',
      rating: 5,
      comment: 'As someone transitioning into digital marketing, EduNest provided exactly what I needed. The courses are up-to-date with current industry trends.'
    },
    {
      id: 4,
      name: 'Mohammad Ali',
      role: 'Full Stack Developer',
      company: 'Software House',
      image: 'https://images.pexels.com/photos/3760532/pexels-photo-3760532.jpeg',
      rating: 5,
      comment: 'The full-stack development course was incredible. From basics to advanced concepts, everything was explained clearly with hands-on projects.'
    },
    {
      id: 5,
      name: 'Nasreen Begum',
      role: 'Business Analyst',
      company: 'Financial Corp',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      rating: 5,
      comment: 'The Python for Business Analytics course helped me transition into a data-driven role. The instructors support was exceptional throughout my learning journey.'
    },
    {
      id: 6,
      name: 'Karim Sheikh',
      role: 'Brand Designer',
      company: 'Design Studio',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg',
      rating: 5,
      comment: 'Learning brand identity design from EduNest was the best investment I made for my career. The course content was practical and industry-relevant.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-wood-50/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-wood-800 dark:text-wood-100 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-wood-600 dark:text-wood-300 max-w-2xl mx-auto">
            Real stories from real students who transformed their careers with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-wood-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="bg-wood-600 text-white p-2 rounded-full">
                  <Quote className="h-5 w-5" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-wood-700 dark:text-wood-300 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* User Profile */}
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-wood-200 dark:border-wood-700"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-wood-900 rounded-full"></div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-wood-800 dark:text-wood-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-wood-600 dark:text-wood-400">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-wood-500 dark:text-wood-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-wood-600/5 to-cream-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-wood-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-wood-100 mb-6 text-lg">
              Join thousands of successful students and transform your career today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cream-400 text-wood-800 px-8 py-3 rounded-lg font-semibold hover:bg-cream-300 transition-colors">
                Browse Courses
              </button>
              <button className="border border-wood-300 text-wood-100 px-8 py-3 rounded-lg font-semibold hover:bg-wood-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
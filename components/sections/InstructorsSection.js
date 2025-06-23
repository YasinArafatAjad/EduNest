'use client';

import { motion } from 'framer-motion';
import { Star, Users, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function InstructorsSection() {
  const instructors = [
    {
      id: 1,
      name: 'John Doe',
      title: 'Senior React Developer',
      company: 'Google',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg',
      rating: 4.9,
      students: 12500,
      courses: 8,
      specialties: ['React.js', 'Node.js', 'JavaScript'],
      experience: '8+ years',
      description: 'Former Google engineer with extensive experience in modern web development. Passionate about teaching clean code practices.'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      title: 'Lead UX Designer',
      company: 'Adobe',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      rating: 4.8,
      students: 9800,
      courses: 6,
      specialties: ['UI Design', 'UX Research', 'Figma'],
      experience: '10+ years',
      description: 'Award-winning designer who has worked with Fortune 500 companies. Expert in user-centered design principles.'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      title: 'Digital Marketing Director',
      company: 'HubSpot',
      image: 'https://images.pexels.com/photos/3760532/pexels-photo-3760532.jpeg',
      rating: 4.7,
      students: 15200,
      courses: 12,
      specialties: ['SEO', 'Social Media', 'Analytics'],
      experience: '12+ years',
      description: 'Marketing strategist who has helped hundreds of businesses grow their online presence and revenue.'
    },
    {
      id: 4,
      name: 'Dr. Emily Chen',
      title: 'Data Science Lead',
      company: 'Microsoft',
      image: 'https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg',
      rating: 4.9,
      students: 8900,
      courses: 5,
      specialties: ['Python', 'Machine Learning', 'Statistics'],
      experience: '15+ years',
      description: 'PhD in Computer Science with expertise in AI and machine learning. Published researcher and industry consultant.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-wood-50/30">
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
            Learn from Industry Experts
          </h2>
          <p className="text-xl text-wood-600 dark:text-wood-300 max-w-2xl mx-auto">
            Our instructors are working professionals from top companies worldwide
          </p>
        </motion.div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              className="bg-white dark:bg-wood-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Instructor Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Company Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 dark:bg-wood-800/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-wood-800 dark:text-wood-100 text-xs font-medium">
                      {instructor.company}
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-wood-600/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs font-medium">
                      {instructor.experience}
                    </span>
                  </div>
                </div>
              </div>

              {/* Instructor Details */}
              <div className="p-6">
                {/* Name and Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-wood-800 dark:text-wood-100 mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-wood-600 dark:text-wood-400 text-sm">
                    {instructor.title}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-wood-800 dark:text-wood-100 font-semibold text-sm">
                        {instructor.rating}
                      </span>
                    </div>
                    <p className="text-wood-600 dark:text-wood-400 text-xs">Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-wood-600 mr-1" />
                      <span className="text-wood-800 dark:text-wood-100 font-semibold text-sm">
                        {(instructor.students / 1000).toFixed(1)}k
                      </span>
                    </div>
                    <p className="text-wood-600 dark:text-wood-400 text-xs">Students</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Award className="h-4 w-4 text-wood-600 mr-1" />
                      <span className="text-wood-800 dark:text-wood-100 font-semibold text-sm">
                        {instructor.courses}
                      </span>
                    </div>
                    <p className="text-wood-600 dark:text-wood-400 text-xs">Courses</p>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {instructor.specialties.slice(0, 3).map((specialty, i) => (
                      <span
                        key={i}
                        className="bg-wood-100 dark:bg-wood-800 text-wood-700 dark:text-wood-300 px-2 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-wood-600 dark:text-wood-400 text-sm mb-4 line-clamp-3">
                  {instructor.description}
                </p>

                {/* View Profile Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-wood-300 text-wood-700 hover:bg-wood-600 hover:text-white group/btn"
                >
                  View Profile
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
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
          <div className="bg-gradient-to-r from-wood-100 to-cream-100 dark:from-wood-800 dark:to-wood-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-wood-800 dark:text-wood-100 mb-4">
              Want to Become an Instructor?
            </h3>
            <p className="text-wood-600 dark:text-wood-300 mb-6 text-lg">
              Share your expertise with thousands of students and earn while you teach
            </p>
            <Button 
              size="lg" 
              className="bg-wood-600 hover:bg-wood-700 text-white px-8 py-3 text-lg font-semibold rounded-lg"
            >
              Apply to Teach
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
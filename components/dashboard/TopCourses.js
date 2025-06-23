'use client';

import { motion } from 'framer-motion';
import { Star, Users, TrendingUp } from 'lucide-react';

export default function TopCourses() {
  const courses = [
    {
      title: 'Complete React Development',
      students: 1247,
      rating: 4.9,
      revenue: '৳85,400',
      growth: '+12%',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
    },
    {
      title: 'UI/UX Design Masterclass',
      students: 892,
      rating: 4.8,
      revenue: '৳45,600',
      growth: '+8%',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg'
    },
    {
      title: 'Digital Marketing Pro',
      students: 1456,
      rating: 4.7,
      revenue: '৳67,200',
      growth: '+15%',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg'
    },
    {
      title: 'Python for Data Science',
      students: 743,
      rating: 4.9,
      revenue: '৳52,100',
      growth: '+5%',
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg'
    }
  ];

  return (
    <motion.div
      className="bg-white dark:bg-wood-800 rounded-xl p-6 shadow-sm border border-wood-200 dark:border-wood-700"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-wood-800 dark:text-wood-100 mb-2">
          Top Performing Courses
        </h3>
        <p className="text-wood-600 dark:text-wood-400 text-sm">
          Your best-selling courses this month
        </p>
      </div>

      <div className="space-y-4">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-wood-50 dark:hover:bg-wood-700 transition-colors"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-wood-800 dark:text-wood-100 truncate">
                {course.title}
              </h4>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center text-xs text-wood-600 dark:text-wood-400">
                  <Users className="h-3 w-3 mr-1" />
                  {course.students}
                </div>
                <div className="flex items-center text-xs text-wood-600 dark:text-wood-400">
                  <Star className="h-3 w-3 mr-1 text-yellow-500" />
                  {course.rating}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="font-semibold text-wood-800 dark:text-wood-100">
                {course.revenue}
              </div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                {course.growth}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
'use client';

import { useState } from 'react';
import { Star, Clock, Users, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Design', 'Business', 'Marketing'];

  const courses = [
    {
      id: 1,
      title: 'Complete React.js Development Masterclass',
      instructor: 'John Doe',
      category: 'Web Development',
      rating: 4.9,
      students: 2500,
      duration: '15 hours',
      price: 4999,
      originalPrice: 7999,
      level: 'Intermediate',
      description: 'Master React.js from basics to advanced concepts with hands-on projects'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Sarah Wilson',
      category: 'Design',
      rating: 4.8,
      students: 1800,
      duration: '12 hours',
      price: 3999,
      originalPrice: 5999,
      level: 'Beginner',
      description: 'Learn design principles and create stunning user interfaces'
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy',
      instructor: 'Mike Johnson',
      category: 'Marketing',
      rating: 4.7,
      students: 3200,
      duration: '18 hours',
      price: 5999,
      originalPrice: 8999,
      level: 'Advanced',
      description: 'Comprehensive digital marketing course for modern businesses'
    },
    {
      id: 4,
      title: 'Business Analytics with Python',
      instructor: 'Dr. Emily Chen',
      category: 'Business',
      rating: 4.9,
      students: 1500,
      duration: '20 hours',
      price: 6999,
      originalPrice: 9999,
      level: 'Advanced',
      description: 'Analyze business data and make data-driven decisions'
    },
    {
      id: 5,
      title: 'Full Stack Web Development',
      instructor: 'Alex Rodriguez',
      category: 'Web Development',
      rating: 4.8,
      students: 2100,
      duration: '25 hours',
      price: 7999,
      originalPrice: 11999,
      level: 'Intermediate',
      description: 'Complete full stack development with modern technologies'
    },
    {
      id: 6,
      title: 'Brand Identity Design',
      instructor: 'Lisa Thompson',
      category: 'Design',
      rating: 4.6,
      students: 980,
      duration: '10 hours',
      price: 2999,
      originalPrice: 4999,
      level: 'Beginner',
      description: 'Create compelling brand identities that resonate'
    }
  ];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-wood-50 to-wood-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wood-800 mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-wood-600 max-w-2xl mx-auto">
            Discover our most popular courses designed by industry experts
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-wood-600 hover:bg-wood-700 text-white'
                  : 'border-wood-300 text-wood-700 hover:bg-wood-100'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Course Image Placeholder */}
              <div className="relative overflow-hidden h-48 bg-wood-200 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-wood-600" />
                <div className="absolute top-4 left-4">
                  <span className="bg-wood-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 rounded-full p-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Category & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-wood-600 text-sm font-medium">
                    {course.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-wood-700 text-sm font-medium">
                      {course.rating}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-wood-800 mb-2 line-clamp-2 group-hover:text-wood-600 transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-wood-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Instructor */}
                <p className="text-wood-700 text-sm font-medium mb-4">
                  By {course.instructor}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-wood-600">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-wood-800">
                      ৳{course.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-wood-500 line-through">
                      ৳{course.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-wood-600 hover:bg-wood-700 text-white group/btn"
                  >
                    Enroll
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-wood-600 text-wood-700 hover:bg-wood-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg group"
          >
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
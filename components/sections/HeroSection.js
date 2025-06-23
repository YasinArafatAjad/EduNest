'use client';

import { useState } from 'react';
import { Play, Star, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const stats = [
    { icon: Users, value: '50K+', label: 'Students' },
    { icon: BookOpen, value: '200+', label: 'Courses' },
    { icon: Star, value: '4.9', label: 'Rating' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wood-gradient">
      {/* Optimized Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-wood-700 to-wood-900"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2 text-yellow-400" />
              #1 Online Learning Platform in Bangladesh
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Master New Skills With
              <span className="text-yellow-300 block">Expert Instructors</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of learners who are advancing their careers with our 
              premium online courses. Learn at your own pace from industry experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-300 text-wood-900 px-8 py-3 text-lg font-semibold rounded-lg group"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-yellow-300 mr-2" />
                    <span className="text-2xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Simplified Course Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:transform hover:-translate-y-2 transition-transform duration-300">
                <div className="relative mb-4">
                  <div className="w-full h-48 bg-wood-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-white/80" />
                  </div>
                  <Button
                    size="icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                  >
                    <Play className="h-6 w-6 text-white" />
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-300 text-sm font-medium">
                      Web Development
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-white text-sm">4.9</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white leading-tight">
                    Complete React.js Development Course
                  </h3>
                  
                  <p className="text-white/80 text-sm">
                    Master modern React development with hands-on projects
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold text-yellow-300">
                      ৳4,999
                    </span>
                    <Button size="sm" className="bg-wood-600 hover:bg-wood-700">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating element */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float">
                <BookOpen className="h-8 w-8 text-yellow-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
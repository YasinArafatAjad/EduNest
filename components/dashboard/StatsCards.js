'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Users, BookOpen, DollarSign, ShoppingCart } from 'lucide-react';

export default function StatsCards() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '৳2,45,000',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      title: 'Total Students',
      value: '1,247',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      title: 'Course Sales',
      value: '156',
      change: '+15.3%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'text-wood-600',
      bgColor: 'bg-wood-100 dark:bg-wood-900/20'
    },
    {
      title: 'Active Courses',
      value: '28',
      change: '-2.1%',
      trend: 'down',
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-wood-800 rounded-xl p-6 shadow-sm border border-wood-200 dark:border-wood-700 hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div className={`flex items-center text-sm font-medium ${
              stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.trend === 'up' ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1" />
              )}
              {stat.change}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-wood-800 dark:text-wood-100 mb-1">
              {stat.value}
            </h3>
            <p className="text-wood-600 dark:text-wood-400 text-sm">
              {stat.title}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
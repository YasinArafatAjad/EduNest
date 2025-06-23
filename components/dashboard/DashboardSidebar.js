'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Settings, 
  User, 
  FileText,
  CreditCard,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  Home
} from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export default function DashboardSidebar({ isOpen, onToggle }) {
  const { theme } = useTheme();
  const [expandedSections, setExpandedSections] = useState({});

  const menuItems = [
    {
      title: 'Dashboard',
      icon: Home,
      href: '/dashboard',
      active: true
    },
    {
      title: 'Courses',
      icon: BookOpen,
      children: [
        { title: 'All Courses', href: '/dashboard/courses' },
        { title: 'Add Course', href: '/dashboard/courses/add' },
        { title: 'Categories', href: '/dashboard/categories' }
      ]
    },
    {
      title: 'Students',
      icon: Users,
      href: '/dashboard/students'
    },
    {
      title: 'Orders',
      icon: ShoppingCart,
      children: [
        { title: 'All Orders', href: '/dashboard/orders' },
        { title: 'Pending', href: '/dashboard/orders/pending' },
        { title: 'Completed', href: '/dashboard/orders/completed' }
      ]
    },
    {
      title: 'Analytics',
      icon: BarChart3,
      href: '/dashboard/analytics'
    },
    {
      title: 'Reviews',
      icon: MessageSquare,
      href: '/dashboard/reviews'
    },
    {
      title: 'Payments',
      icon: CreditCard,
      href: '/dashboard/payments'
    },
    {
      title: 'Reports',
      icon: FileText,
      href: '/dashboard/reports'
    },
    {
      title: 'Profile',
      icon: User,
      href: '/dashboard/profile'
    },
    {
      title: 'Settings',
      icon: Settings,
      href: '/dashboard/settings'
    }
  ];

  const toggleSection = (title) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        className={`fixed left-0 top-0 h-full bg-white dark:bg-wood-900 border-r border-wood-200 dark:border-wood-700 z-50 transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-16'
        }`}
        initial={false}
        animate={{ width: isOpen ? 256 : 64 }}
      >
        {/* Logo */}
        <div className="flex items-center h-16 px-4 border-b border-wood-200 dark:border-wood-700">
          <BookOpen className="h-8 w-8 text-wood-600 dark:text-wood-400" />
          {isOpen && (
            <motion.span 
              className="ml-3 text-xl font-bold text-wood-800 dark:text-wood-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              EduNest
            </motion.span>
          )}
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 overflow-y-auto h-full pb-20">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleSection(item.title)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      item.active 
                        ? 'bg-wood-100 dark:bg-wood-800 text-wood-800 dark:text-wood-100' 
                        : 'text-wood-600 dark:text-wood-400 hover:bg-wood-50 dark:hover:bg-wood-800'
                    }`}
                  >
                    <div className="flex items-center">
                      <item.icon className="h-5 w-5" />
                      {isOpen && (
                        <span className="ml-3 font-medium">{item.title}</span>
                      )}
                    </div>
                    {isOpen && (
                      expandedSections[item.title] ? 
                        <ChevronDown className="h-4 w-4" /> : 
                        <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                  
                  {isOpen && expandedSections[item.title] && (
                    <motion.div
                      className="ml-6 mt-2 space-y-1"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className="block p-2 text-sm text-wood-600 dark:text-wood-400 hover:text-wood-800 dark:hover:text-wood-200 rounded-md hover:bg-wood-50 dark:hover:bg-wood-800 transition-colors"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    item.active 
                      ? 'bg-wood-100 dark:bg-wood-800 text-wood-800 dark:text-wood-100' 
                      : 'text-wood-600 dark:text-wood-400 hover:bg-wood-50 dark:hover:bg-wood-800'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {isOpen && (
                    <span className="ml-3 font-medium">{item.title}</span>
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </motion.aside>
    </>
  );
}
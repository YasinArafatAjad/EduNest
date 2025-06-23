'use client';

import { motion } from 'framer-motion';
import { Eye, Download, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RecentOrders() {
  const orders = [
    {
      id: '#ORD-001',
      student: 'Fatima Rahman',
      course: 'Complete React Development',
      amount: '৳4,999',
      status: 'completed',
      date: '2024-01-15',
      avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg'
    },
    {
      id: '#ORD-002',
      student: 'Ahmed Hassan',
      course: 'UI/UX Design Masterclass',
      amount: '৳3,999',
      status: 'pending',
      date: '2024-01-14',
      avatar: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg'
    },
    {
      id: '#ORD-003',
      student: 'Rashida Khan',
      course: 'Digital Marketing Pro',
      amount: '৳5,999',
      status: 'completed',
      date: '2024-01-14',
      avatar: 'https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg'
    },
    {
      id: '#ORD-004',
      student: 'Mohammad Ali',
      course: 'Python for Data Science',
      amount: '৳6,999',
      status: 'processing',
      date: '2024-01-13',
      avatar: 'https://images.pexels.com/photos/3760532/pexels-photo-3760532.jpeg'
    },
    {
      id: '#ORD-005',
      student: 'Nasreen Begum',
      course: 'Full Stack Development',
      amount: '৳7,999',
      status: 'completed',
      date: '2024-01-12',
      avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'processing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-wood-800 rounded-xl shadow-sm border border-wood-200 dark:border-wood-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="p-6 border-b border-wood-200 dark:border-wood-700">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-wood-800 dark:text-wood-100">
              Recent Orders
            </h3>
            <p className="text-wood-600 dark:text-wood-400 text-sm">
              Latest course purchases and enrollments
            </p>
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-wood-50 dark:bg-wood-900/50">
            <tr>
              <th className="text-left p-4 font-medium text-wood-700 dark:text-wood-300">
                Order ID
              </th>
              <th className="text-left p-4 font-medium text-wood-700 dark:text-wood-300">
                Student
              </th>
              <th className="text-left p-4 font-medium text-wood-700 dark:text-wood-300">
                Course
              </th>
              <th className="text-left p-4 font-medium text-wood-700 dark:text-wood-300">
                Amount
              </th>
              <th className="text-left p-4 font-medium text-wood-700 dark:text-wood-300">
                Status
              </th>
              <th className="text-left p-4 font-medium text-wood-700 dark:text-wood-300">
                Date
              </th>
              <th className="text-left p-4 font-medium text-wood-700 dark:text-wood-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <motion.tr
                key={order.id}
                className="border-b border-wood-200 dark:border-wood-700 hover:bg-wood-50 dark:hover:bg-wood-900/30"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <td className="p-4">
                  <span className="font-medium text-wood-800 dark:text-wood-100">
                    {order.id}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={order.avatar}
                      alt={order.student}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-medium text-wood-800 dark:text-wood-100">
                      {order.student}
                    </span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-wood-600 dark:text-wood-400">
                    {order.course}
                  </span>
                </td>
                <td className="p-4">
                  <span className="font-semibold text-wood-800 dark:text-wood-100">
                    {order.amount}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-wood-600 dark:text-wood-400">
                    {order.date}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
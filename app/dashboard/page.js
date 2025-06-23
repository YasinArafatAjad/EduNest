'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatsCards from '@/components/dashboard/StatsCards';
import SalesChart from '@/components/dashboard/SalesChart';
import RecentOrders from '@/components/dashboard/RecentOrders';
import TopCourses from '@/components/dashboard/TopCourses';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background dark:bg-wood-900">
      <DashboardSidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'}`}>
        <DashboardHeader 
          onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        
        <main className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-wood-800 dark:text-wood-100 mb-2">
                Dashboard Overview
              </h1>
              <p className="text-wood-600 dark:text-wood-400">
                Welcome back! Here's what's happening with your courses today.
              </p>
            </div>

            {/* Stats Cards */}
            <StatsCards />

            {/* Charts and Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <SalesChart />
              <TopCourses />
            </div>

            {/* Recent Orders */}
            <RecentOrders />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
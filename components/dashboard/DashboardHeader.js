'use client';

import { Bell, Search, User, Menu, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

export default function DashboardHeader({ onSidebarToggle }) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-wood-900 border-b border-wood-200 dark:border-wood-700 h-16 flex items-center justify-between px-6">
      {/* Left Side */}
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onSidebarToggle}
          className="text-wood-600 dark:text-wood-400"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wood-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search courses, students..."
            className="pl-10 pr-4 py-2 w-64 bg-wood-50 dark:bg-wood-800 border border-wood-200 dark:border-wood-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-wood-600 dark:text-wood-400"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative text-wood-600 dark:text-wood-400">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </Button>

        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-wood-600 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-wood-800 dark:text-wood-100">
              Admin User
            </p>
            <p className="text-xs text-wood-600 dark:text-wood-400">
              admin@edunest.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
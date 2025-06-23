'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function SalesChart() {
  const data = [
    { name: 'Jan', sales: 12000, revenue: 45000 },
    { name: 'Feb', sales: 19000, revenue: 52000 },
    { name: 'Mar', sales: 15000, revenue: 48000 },
    { name: 'Apr', sales: 25000, revenue: 61000 },
    { name: 'May', sales: 22000, revenue: 55000 },
    { name: 'Jun', sales: 30000, revenue: 67000 },
  ];

  return (
    <div className="bg-white dark:bg-wood-800 rounded-xl p-6 shadow-sm border border-wood-200 dark:border-wood-700">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-wood-800 dark:text-wood-100 mb-2">
          Sales Overview
        </h3>
        <p className="text-wood-600 dark:text-wood-400 text-sm">
          Monthly sales and revenue trends
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="name" 
              stroke="#6b7280"
              fontSize={12}
            />
            <YAxis 
              stroke="#6b7280"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#8B4513" 
              strokeWidth={2}
              dot={{ fill: '#8B4513', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#8B4513' }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#DEB887" 
              strokeWidth={2}
              dot={{ fill: '#DEB887', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#DEB887' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
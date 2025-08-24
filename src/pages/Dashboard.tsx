import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  GitBranch, 
  FileText, 
  AlertCircle,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react';
import StatCard from '../components/StatCard';
import RecentActivity from '../components/RecentActivity';
import ProjectProgress from '../components/ProjectProgress';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Active Projects',
      value: '12',
      change: '+2.3%',
      trend: 'up' as const,
      icon: Target,
      color: 'blue'
    },
    {
      title: 'Requirements Analyzed',
      value: '248',
      change: '+12.5%',
      trend: 'up' as const,
      icon: FileText,
      color: 'green'
    },
    {
      title: 'GitHub Commits',
      value: '1,234',
      change: '+8.2%',
      trend: 'up' as const,
      icon: GitBranch,
      color: 'purple'
    },
    {
      title: 'Team Members',
      value: '24',
      change: '+3',
      trend: 'up' as const,
      icon: Users,
      color: 'orange'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900"
        >
          Dashboard
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start AI Analysis
        </motion.button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProjectProgress />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <FileText className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">New Requirement</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <GitBranch className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">GitHub Sync</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Target className="w-8 h-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Generate PRD</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Users className="w-8 h-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Team Meeting</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;

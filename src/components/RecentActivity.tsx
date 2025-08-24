import React from 'react';
import { Clock, GitCommit, FileText, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const activities = [
  {
    id: 1,
    type: 'commit',
    title: 'New feature branch merged',
    description: 'User authentication module completed',
    time: '2 hours ago',
    icon: GitCommit,
    color: 'text-green-600'
  },
  {
    id: 2,
    type: 'requirement',
    title: 'AI analysis completed',
    description: 'Payment system requirements refined',
    time: '4 hours ago',
    icon: FileText,
    color: 'text-blue-600'
  },
  {
    id: 3,
    type: 'team',
    title: 'Team meeting scheduled',
    description: 'Sprint planning for next iteration',
    time: '6 hours ago',
    icon: Users,
    color: 'text-purple-600'
  }
];

const RecentActivity: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className={`w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center ${activity.color}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <div className="flex items-center gap-1 mt-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentActivity;

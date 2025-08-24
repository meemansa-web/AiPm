import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, CheckSquare, FolderOpen, Plus, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Productivity: React.FC = () => {
  const quickActions = [
    { title: 'Team Management', icon: Users, color: 'bg-blue-500', link: '/app/productivity' },
    { title: 'Calendar', icon: Calendar, color: 'bg-green-500', link: '/app/calendar' },
    { title: 'Issues', icon: CheckSquare, color: 'bg-orange-500', link: '/app/issues' },
    { title: 'Projects', icon: FolderOpen, color: 'bg-purple-500', link: '/app/projects' }
  ];

  const recentItems = [
    { type: 'project', name: 'E-commerce Platform', updated: '2 hours ago', status: 'In Progress' },
    { type: 'issue', name: 'Fix payment gateway bug', updated: '4 hours ago', status: 'Open' },
    { type: 'meeting', name: 'Sprint Planning', updated: '1 day ago', status: 'Completed' },
    { type: 'task', name: 'Update API documentation', updated: '2 days ago', status: 'In Review' }
  ];

  const teamMembers = [
    { name: 'John Doe', role: 'Frontend Developer', status: 'online', avatar: 'JD' },
    { name: 'Jane Smith', role: 'Backend Developer', status: 'away', avatar: 'JS' },
    { name: 'Mike Johnson', role: 'UI/UX Designer', status: 'offline', avatar: 'MJ' },
    { name: 'Sarah Wilson', role: 'Product Manager', status: 'online', avatar: 'SW' }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold text-gray-900">Productivity Hub</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4 inline mr-2" />
          New Workspace
        </button>
      </motion.div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <motion.div
            key={action.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={action.link}
              className="block bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-medium text-gray-900">{action.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              <button className="text-gray-600 hover:text-gray-900">
                <Filter className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {recentItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 border border-gray-100 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      item.type === 'project' ? 'bg-purple-100' :
                      item.type === 'issue' ? 'bg-red-100' :
                      item.type === 'meeting' ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                      {item.type === 'project' && <FolderOpen className="w-4 h-4 text-purple-600" />}
                      {item.type === 'issue' && <CheckSquare className="w-4 h-4 text-red-600" />}
                      {item.type === 'meeting' && <Calendar className="w-4 h-4 text-green-600" />}
                      {item.type === 'task' && <CheckSquare className="w-4 h-4 text-blue-600" />}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.updated}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                    item.status === 'Open' ? 'bg-orange-100 text-orange-700' :
                    item.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Members */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Members</h3>
            <div className="space-y-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="relative">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-white">{member.avatar}</span>
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                      member.status === 'online' ? 'bg-green-500' :
                      member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <button className="w-full mt-4 bg-gray-50 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              View All Team Members
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Productivity;

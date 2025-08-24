import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, GitCommit, GitPullRequest, Bug, Rocket, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GitHub: React.FC = () => {
  const commitData = [
    { date: '2024-01-01', commits: 12 },
    { date: '2024-01-02', commits: 8 },
    { date: '2024-01-03', commits: 15 },
    { date: '2024-01-04', commits: 23 },
    { date: '2024-01-05', commits: 18 },
    { date: '2024-01-06', commits: 25 },
    { date: '2024-01-07', commits: 14 }
  ];

  const stats = [
    { title: 'Total Commits', value: '1,234', icon: GitCommit, color: 'bg-green-500' },
    { title: 'Open PRs', value: '8', icon: GitPullRequest, color: 'bg-blue-500' },
    { title: 'Active Branches', value: '12', icon: GitBranch, color: 'bg-purple-500' },
    { title: 'Bugs Fixed', value: '45', icon: Bug, color: 'bg-red-500' },
    { title: 'Deployments', value: '156', icon: Rocket, color: 'bg-orange-500' }
  ];

  const recentActivity = [
    {
      type: 'commit',
      message: 'feat: Add user authentication',
      author: 'John Doe',
      time: '2 hours ago',
      hash: 'a1b2c3d'
    },
    {
      type: 'pr',
      message: 'Fix: Payment gateway integration',
      author: 'Jane Smith',
      time: '4 hours ago',
      hash: '#123'
    },
    {
      type: 'deployment',
      message: 'Production deployment v2.1.0',
      author: 'Deploy Bot',
      time: '6 hours ago',
      hash: 'v2.1.0'
    }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold text-gray-900">GitHub Integration</h1>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          <GitBranch className="w-4 h-4 inline mr-2" />
          Connect Repository
        </button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Commit Activity Chart */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Commit Activity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={commitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="commits" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-100 rounded-lg p-3"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      activity.type === 'commit' ? 'bg-green-100' :
                      activity.type === 'pr' ? 'bg-blue-100' : 'bg-orange-100'
                    }`}>
                      {activity.type === 'commit' && <GitCommit className="w-3 h-3 text-green-600" />}
                      {activity.type === 'pr' && <GitPullRequest className="w-3 h-3 text-blue-600" />}
                      {activity.type === 'deployment' && <Rocket className="w-3 h-3 text-orange-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.author} • {activity.time}</p>
                      <code className="text-xs bg-gray-100 px-1 rounded">{activity.hash}</code>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pull Requests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Open Pull Requests</h3>
        <div className="space-y-3">
          {[
            { title: 'Add user profile page', author: 'John Doe', status: 'review', checks: 3, comments: 2 },
            { title: 'Fix payment validation bug', author: 'Jane Smith', status: 'approved', checks: 5, comments: 0 },
            { title: 'Update API documentation', author: 'Mike Johnson', status: 'changes-requested', checks: 2, comments: 4 }
          ].map((pr, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">{pr.title}</h4>
                  <p className="text-sm text-gray-600">by {pr.author}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    pr.status === 'review' ? 'bg-yellow-100 text-yellow-700' :
                    pr.status === 'approved' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {pr.status.replace('-', ' ')}
                  </span>
                  <span className="text-xs text-gray-500">{pr.checks} checks</span>
                  <span className="text-xs text-gray-500">{pr.comments} comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GitHub;

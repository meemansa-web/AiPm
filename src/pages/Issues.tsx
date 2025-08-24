import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, CheckSquare, AlertCircle, Clock, User, Tag } from 'lucide-react';

const Issues: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const issues = [
    {
      id: 1,
      title: 'Fix payment gateway timeout issue',
      description: 'Users experiencing timeouts during payment processing',
      status: 'open',
      priority: 'high',
      assignee: 'John Doe',
      labels: ['bug', 'payment'],
      createdAt: '2 hours ago',
      updatedAt: '1 hour ago'
    },
    {
      id: 2,
      title: 'Add dark mode support',
      description: 'Implement dark theme across the application',
      status: 'in-progress',
      priority: 'medium',
      assignee: 'Jane Smith',
      labels: ['feature', 'ui'],
      createdAt: '1 day ago',
      updatedAt: '4 hours ago'
    },
    {
      id: 3,
      title: 'Optimize database queries',
      description: 'Improve performance of user data retrieval',
      status: 'review',
      priority: 'medium',
      assignee: 'Mike Johnson',
      labels: ['performance', 'backend'],
      createdAt: '3 days ago',
      updatedAt: '6 hours ago'
    },
    {
      id: 4,
      title: 'Update user documentation',
      description: 'Refresh the getting started guide',
      status: 'closed',
      priority: 'low',
      assignee: 'Sarah Wilson',
      labels: ['documentation'],
      createdAt: '1 week ago',
      updatedAt: '2 days ago'
    }
  ];

  const filteredIssues = issues.filter(issue => {
    const matchesFilter = selectedFilter === 'all' || issue.status === selectedFilter;
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-700';
      case 'in-progress': return 'bg-blue-100 text-blue-700';
      case 'review': return 'bg-orange-100 text-orange-700';
      case 'closed': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-orange-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold text-gray-900">Issues</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4 inline mr-2" />
          New Issue
        </button>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search issues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            {['all', 'open', 'in-progress', 'review', 'closed'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Issues List */}
      <div className="space-y-4">
        {filteredIssues.map((issue, index) => (
          <motion.div
            key={issue.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CheckSquare className="w-4 h-4 text-gray-400" />
                  <h3 className="font-semibold text-gray-900">#{issue.id} {issue.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(issue.status)}`}>
                    {issue.status.replace('-', ' ')}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{issue.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <AlertCircle className={`w-4 h-4 ${getPriorityColor(issue.priority)}`} />
                    <span className={getPriorityColor(issue.priority)}>{issue.priority} priority</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{issue.assignee}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Updated {issue.updatedAt}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 ml-4">
                {issue.labels.map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    <Tag className="w-3 h-3" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredIssues.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <CheckSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No issues found</h3>
          <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create New Issue
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Issues;

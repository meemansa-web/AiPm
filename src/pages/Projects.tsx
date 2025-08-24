import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderOpen, 
  Plus, 
  Search, 
  Calendar, 
  Users, 
  Target, 
  TrendingUp,
  Clock,
  Star,
  MoreVertical
} from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedView, setSelectedView] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'Complete redesign of the shopping experience',
      status: 'active',
      progress: 75,
      team: ['John Doe', 'Jane Smith', 'Mike Johnson'],
      dueDate: 'Dec 15, 2024',
      priority: 'high',
      favorite: true,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Cross-platform mobile application',
      status: 'active',
      progress: 45,
      team: ['Sarah Wilson', 'Tom Brown'],
      dueDate: 'Jan 20, 2025',
      priority: 'medium',
      favorite: false,
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'API Integration',
      description: 'Third-party service integrations',
      status: 'completed',
      progress: 100,
      team: ['Mike Johnson', 'Lisa Chen'],
      dueDate: 'Nov 30, 2024',
      priority: 'high',
      favorite: true,
      color: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'Documentation Update',
      description: 'Comprehensive docs overhaul',
      status: 'planning',
      progress: 15,
      team: ['Sarah Wilson'],
      dueDate: 'Feb 28, 2025',
      priority: 'low',
      favorite: false,
      color: 'bg-orange-500'
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-700';
      case 'completed': return 'bg-green-100 text-green-700';
      case 'planning': return 'bg-orange-100 text-orange-700';
      case 'paused': return 'bg-gray-100 text-gray-700';
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
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4 inline mr-2" />
          New Project
        </button>
      </motion.div>

      {/* Search and View Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
      >
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedView('grid')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedView === 'grid'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setSelectedView('list')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedView === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              List View
            </button>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid/List */}
      <div className={selectedView === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow ${
              selectedView === 'list' ? 'flex items-center gap-6' : ''
            }`}
          >
            <div className={`${selectedView === 'list' ? 'flex-1' : ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${project.color} rounded-lg flex items-center justify-center`}>
                    <FolderOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className={`p-1 rounded transition-colors ${
                      project.favorite ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
                    }`}
                  >
                    <Star className="w-4 h-4" fill={project.favorite ? 'currentColor' : 'none'} />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className={`text-sm font-medium ${getPriorityColor(project.priority)}`}>
                    {project.priority} priority
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                      className={`${project.color} h-2 rounded-full`}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{project.team.length} members</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.dueDate}</span>
                  </div>
                </div>

                {selectedView === 'grid' && (
                  <div className="flex -space-x-2">
                    {project.team.slice(0, 3).map((member, idx) => (
                      <div
                        key={idx}
                        className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center"
                      >
                        <span className="text-xs text-white font-medium">
                          {member.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    ))}
                    {project.team.length > 3 && (
                      <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-xs text-white font-medium">+{project.team.length - 3}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {selectedView === 'list' && (
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <TrendingUp className="w-5 h-5 text-green-600 mx-auto mb-1" />
                  <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                </div>
                <div className="flex -space-x-2">
                  {project.team.slice(0, 3).map((member, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-xs text-white font-medium">
                        {member.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <FolderOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-500 mb-4">Try adjusting your search criteria or create a new project</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create New Project
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;

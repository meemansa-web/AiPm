import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Users, Clock } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'E-commerce Platform',
    progress: 75,
    dueDate: 'Dec 15, 2024',
    team: 8,
    status: 'On Track',
    color: 'bg-green-500'
  },
  {
    id: 2,
    name: 'Mobile App Redesign',
    progress: 45,
    dueDate: 'Jan 20, 2025',
    team: 5,
    status: 'In Progress',
    color: 'bg-blue-500'
  },
  {
    id: 3,
    name: 'API Integration',
    progress: 90,
    dueDate: 'Nov 30, 2024',
    team: 3,
    status: 'Near Completion',
    color: 'bg-orange-500'
  }
];

const ProjectProgress: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Project Progress</h3>
        <TrendingUp className="w-5 h-5 text-green-600" />
      </div>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-100 rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-900">{project.name}</h4>
              <span className={`px-2 py-1 text-xs rounded-full ${
                project.status === 'On Track' ? 'bg-green-100 text-green-700' :
                project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                'bg-orange-100 text-orange-700'
              }`}>
                {project.status}
              </span>
            </div>
            <div className="mb-3">
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
                <Calendar className="w-4 h-4" />
                <span>{project.dueDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{project.team} members</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectProgress;

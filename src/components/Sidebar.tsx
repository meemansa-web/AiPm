import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Github, 
  FileCode, 
  Calendar,
  CheckSquare,
  FolderOpen,
  Bot,
  Users,
  Settings
} from 'lucide-react';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Dashboard', href: '/app', icon: LayoutDashboard },
  { name: 'AI Requirements', href: '/app/requirements', icon: Bot },
  { name: 'GitHub Integration', href: '/app/github', icon: Github },
  { name: 'PRD Generator', href: '/app/prd-generator', icon: FileCode },
  { name: 'Productivity', href: '/app/productivity', icon: Users },
  { name: 'Calendar', href: '/app/calendar', icon: Calendar },
  { name: 'Issues', href: '/app/issues', icon: CheckSquare },
  { name: 'Projects', href: '/app/projects', icon: FolderOpen },
];

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white w-64 shadow-lg flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">ProductAI</h1>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                end={item.href === '/app'} // Ensure only dashboard is active for the root /app path
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 w-full">
          <Settings className="w-5 h-5" />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

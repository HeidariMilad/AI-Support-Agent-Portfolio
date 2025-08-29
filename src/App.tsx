import React, { useState } from 'react';
import CustomerChatUI from './components/CustomerChatUI';
import AdminDashboard from './components/AdminDashboard';
import IntegrationDiagram from './components/IntegrationDiagram';
import BeforeAfterVisualization from './components/BeforeAfterVisualization';
import { MessageSquare, LayoutDashboard, GitBranch, Sparkles } from 'lucide-react';
import './App.css';

type ViewType = 'chat' | 'dashboard' | 'integration' | 'comparison';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('chat');

  const navigationItems = [
    { id: 'chat', label: 'Customer Chat', icon: MessageSquare },
    { id: 'dashboard', label: 'Admin Dashboard', icon: LayoutDashboard },
    { id: 'integration', label: 'Integration Flow', icon: GitBranch },
    { id: 'comparison', label: 'Before/After', icon: Sparkles }
  ];

  const renderView = () => {
    switch(currentView) {
      case 'chat':
        return <CustomerChatUI />;
      case 'dashboard':
        return <AdminDashboard />;
      case 'integration':
        return <IntegrationDiagram />;
      case 'comparison':
        return <BeforeAfterVisualization />;
      default:
        return <CustomerChatUI />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <div className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">AI Support Agent Portfolio</h1>
            </div>
            <div className="flex space-x-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id as ViewType)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      currentView === item.id
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        {renderView()}
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">AI Customer Support Agent Prototype • Portfolio Project</p>
          <p className="text-xs text-gray-400 mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}

export default App;

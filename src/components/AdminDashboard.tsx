import React, { useState } from 'react';
import { 
  BarChart3, Clock, MessageSquare, TrendingUp, Upload, 
  Users, Globe, Settings, Filter, ChevronRight, Bot,
  CheckCircle, AlertCircle, Activity
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatItem {
  id: number;
  customer: string;
  lastMessage: string;
  timestamp: string;
  status: 'resolved' | 'escalated' | 'active';
  handler: 'AI' | 'Human';
}

const AdminDashboard: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isDragging, setIsDragging] = useState(false);

  const kpiData = [
    {
      title: 'Tickets Auto-Resolved',
      value: '70%',
      change: '+5%',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Avg. Response Time',
      value: '1.2s',
      change: '-0.3s',
      icon: Clock,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Escalation Rate',
      value: '30%',
      change: '-2%',
      icon: AlertCircle,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Active Sessions',
      value: '156',
      change: '+12',
      icon: Activity,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const recentChats: ChatItem[] = [
    {
      id: 1,
      customer: 'Sarah Johnson',
      lastMessage: 'Thank you for helping with my order!',
      timestamp: '2 min ago',
      status: 'resolved',
      handler: 'AI'
    },
    {
      id: 2,
      customer: 'Mike Chen',
      lastMessage: 'I need to speak with a manager',
      timestamp: '5 min ago',
      status: 'escalated',
      handler: 'Human'
    },
    {
      id: 3,
      customer: 'Emma Wilson',
      lastMessage: 'Where can I track my shipment?',
      timestamp: '8 min ago',
      status: 'active',
      handler: 'AI'
    },
    {
      id: 4,
      customer: 'David Brown',
      lastMessage: 'Product return initiated successfully',
      timestamp: '15 min ago',
      status: 'resolved',
      handler: 'AI'
    },
    {
      id: 5,
      customer: 'Lisa Garcia',
      lastMessage: 'Discount code applied to account',
      timestamp: '20 min ago',
      status: 'resolved',
      handler: 'AI'
    }
  ];

  const languages = [
    { code: 'EN', flag: '🇺🇸', name: 'English' },
    { code: 'ES', flag: '🇪🇸', name: 'Spanish' },
    { code: 'FR', flag: '🇫🇷', name: 'French' },
    { code: 'DE', flag: '🇩🇪', name: 'German' },
    { code: 'ZH', flag: '🇨🇳', name: 'Chinese' }
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload logic here
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'escalated':
        return 'bg-red-100 text-red-800';
      case 'active':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Support Dashboard</h1>
                <p className="text-sm text-gray-500">Manage your intelligent customer service</p>
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
                <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${kpi.bgColor} rounded-lg flex items-center justify-center`}>
                      <div className={`w-6 h-6 bg-gradient-to-r ${kpi.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <span className={`text-sm font-semibold ${
                      kpi.change.startsWith('+') ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {kpi.change}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">{kpi.value}</h3>
                  <p className="text-sm text-gray-600">{kpi.title}</p>
                </div>
                <div className={`h-1 bg-gradient-to-r ${kpi.color}`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Chats */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                  Recent Conversations
                </h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {recentChats.map((chat) => (
                <motion.div
                  key={chat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full 
                                    flex items-center justify-center text-white font-semibold">
                        {chat.customer.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{chat.customer}</h3>
                        <p className="text-sm text-gray-600 truncate max-w-xs">{chat.lastMessage}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-1">{chat.timestamp}</p>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(chat.status)}`}>
                          {chat.status}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          chat.handler === 'AI' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                        }`}>
                          {chat.handler}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Knowledge Base Upload */}
          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Upload className="w-5 h-5 mr-2 text-blue-600" />
                Knowledge Base
              </h2>
            </div>
            
            <div className="p-6">
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                  isDragging 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Drag & drop files here</p>
                <p className="text-sm text-gray-500 mb-4">Support for PDF, CSV, TXT</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Browse Files
                </button>
              </div>
              
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Recent Uploads</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">FAQs_2024.pdf</span>
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">product_catalog.csv</span>
                    <span className="text-xs text-gray-500">5 days ago</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">policies.txt</span>
                    <span className="text-xs text-gray-500">1 week ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm">Customer Satisfaction: 92%</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm">Cost Reduction: 50%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">Customers Served Today: 1,247</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-sm">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

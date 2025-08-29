import React from 'react';
import { 
  Globe, Bot, Database, Users, ArrowRight, 
  Smartphone, Monitor, Zap, Languages 
} from 'lucide-react';
import { motion } from 'framer-motion';

const IntegrationDiagram: React.FC = () => {
  const integrationSteps = [
    {
      id: 1,
      title: 'Website/App',
      icon: Globe,
      description: 'Customer Entry Points',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      subItems: ['Web Portal', 'Mobile App', 'Social Media']
    },
    {
      id: 2,
      title: 'AI Agent',
      icon: Bot,
      description: 'Intelligent Processing',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      badge: 'Multi-language Support',
      subItems: ['NLP Processing', 'Intent Recognition', 'Response Generation']
    },
    {
      id: 3,
      title: 'CRM System',
      icon: Database,
      description: 'Data Management',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      subItems: ['Salesforce', 'HubSpot', 'Customer Data']
    },
    {
      id: 4,
      title: 'Human Support',
      icon: Users,
      description: 'Expert Escalation',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      subItems: ['Technical Team', 'Sales Team', 'Management']
    }
  ];

  const features = [
    { icon: Zap, label: 'Real-time Processing', value: '<100ms' },
    { icon: Languages, label: 'Languages Supported', value: '50+' },
    { icon: Monitor, label: 'Platforms', value: 'Omnichannel' },
    { icon: Database, label: 'Integrations', value: '20+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Customer Support Integration Flow
          </h1>
          <p className="text-lg text-gray-600">
            Seamless integration across all customer touchpoints
          </p>
        </div>

        {/* Main Flow Diagram */}
        <div className="bg-white rounded-2xl shadow-xl p-8 pt-16 mb-8 overflow-visible">
          <div className="flex items-center justify-between overflow-x-auto overflow-y-visible">
            {integrationSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center min-w-[200px]"
                >
                  {/* Icon Container */}
                  <div className="relative mb-2">
                    <div className={`w-24 h-24 ${step.bgColor} rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10`}></div>
                      <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-inner`}>
                        <step.icon className="w-7 h-7 text-white drop-shadow-sm" />
                      </div>
                    </div>
                    {step.badge && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-lg whitespace-nowrap animate-pulse z-10">
                        🌐 {step.badge}
                      </div>
                    )}
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>

                  {/* Sub Items */}
                  <div className="space-y-1">
                    {step.subItems.map((item, idx) => (
                      <div key={idx} className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full text-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Arrow */}
                {index < integrationSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.1 }}
                    className="mx-4 flex items-center"
                  >
                    <div className="relative">
                      <svg width="80" height="40" viewBox="0 0 80 40" className="text-gray-300">
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#e2e8f0" />
                            <stop offset="100%" stopColor="#94a3b8" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 10 20 Q 40 8 70 20"
                          stroke={`url(#gradient-${index})`}
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="8,4"
                          className="animate-pulse"
                        />
                        <polygon 
                          points="70,15 80,20 70,25" 
                          fill="#94a3b8" 
                          className="animate-pulse"
                        />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Integration Partners */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-center text-sm font-semibold text-gray-600 mb-4">
              INTEGRATION PARTNERS
            </h3>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-gray-400 font-bold text-lg">Salesforce</div>
              <div className="text-gray-400 font-bold text-lg">HubSpot</div>
              <div className="text-gray-400 font-bold text-lg">Zendesk</div>
              <div className="text-gray-400 font-bold text-lg">Slack</div>
              <div className="text-gray-400 font-bold text-lg">Microsoft Teams</div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <feature.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{feature.value}</div>
              <div className="text-sm text-gray-600">{feature.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Enterprise-Ready AI Integration</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationDiagram;

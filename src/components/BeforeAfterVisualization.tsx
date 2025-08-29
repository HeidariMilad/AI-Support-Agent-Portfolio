import React from 'react';
import { 
  Clock, AlertCircle, DollarSign, Users, TrendingDown, TrendingUp,
  CheckCircle, XCircle, Zap, HeartHandshake, Bot, UserX,
  BarChart3, Timer, Smile, Frown
} from 'lucide-react';
import { motion } from 'framer-motion';

const BeforeAfterVisualization: React.FC = () => {
  const beforeMetrics = [
    { icon: Clock, label: 'Response Time', value: '45 min', color: 'text-red-600' },
    { icon: DollarSign, label: 'Support Cost/Month', value: '$25,000', color: 'text-red-600' },
    { icon: Users, label: 'Agents Required', value: '15', color: 'text-orange-600' },
    { icon: Frown, label: 'Customer Satisfaction', value: '65%', color: 'text-orange-600' },
    { icon: Timer, label: 'Available Hours', value: '9-5 PM', color: 'text-gray-600' },
    { icon: TrendingDown, label: 'Resolution Rate', value: '40%', color: 'text-red-600' }
  ];

  const afterMetrics = [
    { icon: Zap, label: 'Response Time', value: '1.2 sec', color: 'text-green-600' },
    { icon: DollarSign, label: 'Support Cost/Month', value: '$12,500', color: 'text-green-600' },
    { icon: Bot, label: 'AI + Human Agents', value: '1 AI + 5', color: 'text-blue-600' },
    { icon: Smile, label: 'Customer Satisfaction', value: '92%', color: 'text-green-600' },
    { icon: CheckCircle, label: 'Available Hours', value: '24/7', color: 'text-green-600' },
    { icon: TrendingUp, label: 'Resolution Rate', value: '70%', color: 'text-green-600' }
  ];

  const painPoints = [
    'Long wait times frustrate customers',
    'High operational costs',
    'Inconsistent service quality',
    'Limited availability',
    'Manual repetitive tasks',
    'Language barriers'
  ];

  const benefits = [
    'Instant responses 24/7',
    '50% cost reduction',
    'Consistent, high-quality service',
    'Always available support',
    'Automated FAQ handling',
    'Multi-language support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Customer Support with AI
          </h1>
          <p className="text-lg text-gray-600">
            See the dramatic impact of implementing AI-powered support
          </p>
        </div>

        {/* Main Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl blur-xl opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Before AI</h2>
                    <p className="text-red-100">Traditional Support System</p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <UserX className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {beforeMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <metric.icon className={`w-5 h-5 ${metric.color}`} />
                      <div>
                        <p className="text-xs text-gray-600">{metric.label}</p>
                        <p className={`font-bold ${metric.color}`}>{metric.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pain Points */}
                <div className="border-t pt-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Pain Points</h3>
                  <div className="space-y-2">
                    {painPoints.map((point, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-600">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="bg-red-50 px-6 py-3">
                <p className="text-center text-sm font-medium text-red-700">
                  High costs, slow responses, inconsistent service
                </p>
              </div>
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl blur-xl opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">After AI</h2>
                    <p className="text-green-100">AI-Powered Support</p>
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {afterMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <metric.icon className={`w-5 h-5 ${metric.color}`} />
                      <div>
                        <p className="text-xs text-gray-600">{metric.label}</p>
                        <p className={`font-bold ${metric.color}`}>{metric.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="border-t pt-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Benefits</h3>
                  <div className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-600">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="bg-green-50 px-6 py-3">
                <p className="text-center text-sm font-medium text-green-700">
                  50% lower costs, 70% inquiries resolved instantly
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,250x</div>
              <div className="text-blue-100">Faster Response</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">70%</div>
              <div className="text-blue-100">Auto-Resolution</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">27%</div>
              <div className="text-blue-100">CSAT Increase</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="inline-block"
          >
            <div className="bg-white rounded-full shadow-xl px-8 py-4 flex items-center space-x-3">
              <HeartHandshake className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">
                Ready to Transform Your Customer Support?
              </span>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium">
                Get Started
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterVisualization;

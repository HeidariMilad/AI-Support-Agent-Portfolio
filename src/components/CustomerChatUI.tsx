import React, { useState, useEffect } from 'react';
import { Send, Bot, User, MoreHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'agent' | 'customer';
  timestamp: string;
}

const CustomerChatUI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI Support Agent. How can I help you today?",
      sender: 'agent',
      timestamp: '10:00 AM'
    },
    {
      id: 2,
      text: "What's your return policy?",
      sender: 'customer',
      timestamp: '10:01 AM'
    },
    {
      id: 3,
      text: "Our return policy allows returns within 30 days of purchase with free shipping. Items must be in original condition with tags attached. We'll process your refund within 3-5 business days after receiving the item.",
      sender: 'agent',
      timestamp: '10:01 AM'
    },
    {
      id: 4,
      text: "Can I track my order?",
      sender: 'customer',
      timestamp: '10:02 AM'
    },
    {
      id: 5,
      text: "Sure! I'd be happy to help you track your order. Please provide your order ID and I'll look that up for you right away.",
      sender: 'agent',
      timestamp: '10:02 AM'
    }
  ]);
  
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    { id: 1, text: 'Track Order', icon: '📦' },
    { id: 2, text: 'Escalate to Human', icon: '👤' },
    { id: 3, text: 'View FAQs', icon: '❓' },
    { id: 4, text: 'Account Help', icon: '⚙️' }
  ];

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        sender: 'customer',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputText('');
      
      // Simulate agent typing
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const agentResponse: Message = {
          id: messages.length + 2,
          text: "I understand your request. Let me help you with that right away.",
          sender: 'agent',
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, agentResponse]);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          AI Customer Support Chat
        </h1>
        
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Bot className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h2 className="font-semibold text-lg">AI Support Agent</h2>
                  <p className="text-sm opacity-90">Always online • Avg response: 1.2s</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  🌐 EN
                </span>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 bg-gray-50">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex mb-4 ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'agent' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                    message.sender === 'customer' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'customer' ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                  
                  {message.sender === 'customer' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center ml-3 flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center mb-4"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-3">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-200">
                  <div className="flex space-x-1">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      className="w-2 h-2 bg-gray-400 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      className="w-2 h-2 bg-gray-400 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      className="w-2 h-2 bg-gray-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Quick Replies */}
          <div className="px-6 py-3 bg-white border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2">Quick Replies:</p>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply.id}
                  onClick={() => setInputText(reply.text)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 
                           transition-all duration-200 hover:shadow-md transform hover:scale-105 
                           flex items-center space-x-1"
                >
                  <span>{reply.icon}</span>
                  <span>{reply.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:bg-white transition-all duration-200"
              />
              <button
                onClick={handleSend}
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full 
                         flex items-center justify-center text-white hover:shadow-lg 
                         transition-all duration-200 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-center text-gray-400 mt-3">
              Powered by AI • Multi-language support • 24/7 Availability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerChatUI;

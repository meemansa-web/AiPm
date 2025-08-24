import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, FileText, Target, AlertTriangle, MessageSquare, Send, Upload } from 'lucide-react';

const Requirements: React.FC = () => {
  const [requirement, setRequirement] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [followupQuestions, setFollowupQuestions] = useState<string[]>([]);

  const handleAnalyze = async () => {
    setLoading(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis({
        goals: [
          'Improve user authentication security',
          'Reduce login friction for returning users',
          'Implement multi-factor authentication'
        ],
        dependencies: [
          'OAuth integration with Google/GitHub',
          'SMS service for 2FA',
          'Updated user database schema'
        ],
        constraints: [
          'Must comply with GDPR regulations',
          'Maximum 3-second login time',
          'Support for legacy user accounts'
        ],
        edgeCases: [
          'User loses access to 2FA device',
          'Network connectivity issues during login',
          'Concurrent login attempts from different devices'
        ]
      });
      setFollowupQuestions([
        'What is the expected user volume for this feature?',
        'Do you have preferences for the 2FA method?',
        'What should happen to existing user sessions?'
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold text-gray-900">AI Requirements Analysis</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Upload className="w-4 h-4 inline mr-2" />
          Import from Trello/Notion
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Describe Your Feature Requirement</h3>
            <textarea
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              placeholder="Enter your feature requirement here... Be as detailed as possible about what you want to build or improve."
              className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">{requirement.length}/1000 characters</span>
              <button
                onClick={handleAnalyze}
                disabled={!requirement.trim() || loading}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Analyzing...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    Analyze with AI
                  </div>
                )}
              </button>
            </div>
          </motion.div>

          {/* Analysis Results */}
          {analysis && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-gray-900">Goals</h4>
                  </div>
                  <ul className="space-y-2">
                    {analysis.goals.map((goal: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-sm text-gray-700">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Dependencies</h4>
                  </div>
                  <ul className="space-y-2">
                    {analysis.dependencies.map((dep: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-sm text-gray-700">{dep}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    <h4 className="font-semibold text-gray-900">Constraints</h4>
                  </div>
                  <ul className="space-y-2">
                    {analysis.constraints.map((constraint: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <span className="text-sm text-gray-700">{constraint}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="w-5 h-5 text-red-600" />
                    <h4 className="font-semibold text-gray-900">Edge Cases</h4>
                  </div>
                  <ul className="space-y-2">
                    {analysis.edgeCases.map((edgeCase: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <span className="text-sm text-gray-700">{edgeCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Follow-up Questions */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow-up Questions</h3>
            {followupQuestions.length > 0 ? (
              <div className="space-y-4">
                {followupQuestions.map((question, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <p className="text-sm text-gray-700 mb-2">{question}</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Your answer..."
                        className="flex-1 px-3 py-1 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                        <Send className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Generate Final Report
                </button>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">Complete the analysis to see follow-up questions.</p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Copy, Bot, Sparkles } from 'lucide-react';

const PRDGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    objectives: '',
    userStories: '',
    requirements: '',
    acceptance: ''
  });
  const [generatedPRD, setGeneratedPRD] = useState('');
  const [generatedGherkin, setGeneratedGherkin] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setGeneratedPRD(`# Product Requirements Document: ${formData.title}

## Overview
${formData.description}

## Objectives
${formData.objectives}

## User Stories
${formData.userStories}

## Functional Requirements
${formData.requirements}

## Acceptance Criteria
${formData.acceptance}

## Technical Specifications
- Platform: Web Application
- Technology Stack: React, TypeScript, Node.js
- Database: PostgreSQL
- Authentication: OAuth 2.0

## Success Metrics
- User engagement increase by 25%
- Reduced support tickets by 40%
- Improved user satisfaction score to 4.5+

## Timeline
- Phase 1: Foundation (4 weeks)
- Phase 2: Core Features (6 weeks)
- Phase 3: Testing & Launch (2 weeks)

## Risks & Mitigation
- Technical complexity: Regular code reviews and pair programming
- Timeline delays: Buffer time included in estimates
- User adoption: Early user testing and feedback incorporation`);

      setGeneratedGherkin(`Feature: ${formData.title}
  As a user
  I want to ${formData.description.toLowerCase()}
  So that I can achieve my goals

  Background:
    Given I am logged into the application
    And I have the necessary permissions

  Scenario: Successful feature usage
    Given I navigate to the feature page
    When I interact with the main functionality
    Then I should see the expected results
    And the system should update accordingly

  Scenario: Edge case handling
    Given I am on the feature page
    When I perform an invalid action
    Then I should see an appropriate error message
    And the system should remain stable

  Scenario: User feedback collection
    Given I have used the feature
    When I complete the main workflow
    Then I should be prompted for feedback
    And my feedback should be recorded for analysis`);
      
      setLoading(false);
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold text-gray-900">PRD & Gherkin Generator</h1>
        <div className="flex gap-2">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            <Sparkles className="w-4 h-4 inline mr-2" />
            AI Templates
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Feature Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Feature Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., User Authentication System"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20 resize-none"
                  placeholder="Brief description of the feature..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Objectives</label>
                <textarea
                  value={formData.objectives}
                  onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20 resize-none"
                  placeholder="What are the main objectives?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">User Stories</label>
                <textarea
                  value={formData.userStories}
                  onChange={(e) => setFormData({ ...formData, userStories: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20 resize-none"
                  placeholder="As a user, I want to..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20 resize-none"
                  placeholder="List the functional requirements..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Acceptance Criteria</label>
                <textarea
                  value={formData.acceptance}
                  onChange={(e) => setFormData({ ...formData, acceptance: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20 resize-none"
                  placeholder="Define the acceptance criteria..."
                />
              </div>
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Generating...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Bot className="w-4 h-4" />
                    Generate PRD & Gherkin
                  </div>
                )}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Generated Output */}
        <div className="space-y-6">
          {/* PRD Output */}
          {generatedPRD && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Generated PRD</h3>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(generatedPRD)}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap">{generatedPRD}</pre>
              </div>
            </motion.div>
          )}

          {/* Gherkin Output */}
          {generatedGherkin && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Generated Gherkin</h3>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(generatedGherkin)}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap">{generatedGherkin}</pre>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PRDGenerator;

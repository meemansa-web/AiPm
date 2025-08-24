import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bot, FileText, Github, FileCode, Users, ArrowRight, CheckCircle } from 'lucide-react';

const LandingHeader: React.FC = () => (
  <header className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-xl font-bold text-gray-900">ProductAI</h1>
      </div>
      <nav className="flex items-center gap-4">
        <Link to="/app" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          Go to App
        </Link>
      </nav>
    </div>
  </header>
);

const HeroSection: React.FC = () => (
  <section className="pt-32 pb-20 text-center bg-gray-50">
    <div className="container mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
      >
        The AI-Powered Copilot for <br />
        <span className="text-blue-600">Product Managers</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 max-w-2xl mx-auto text-lg text-gray-600"
      >
        From requirement analysis to PRD generation, ProductAI streamlines your workflow, integrates with your tools, and empowers your team to build better products, faster.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8"
      >
        <Link to="/app" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105">
          Get Started for Free
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  </section>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI Requirement Analysis',
      description: 'Refine features with AI-driven goals, dependencies, constraints, and edge cases.',
    },
    {
      icon: Github,
      title: 'Real-time GitHub Sync',
      description: 'Track commits, PRs, bugs, and deployments without leaving the platform.',
    },
    {
      icon: FileCode,
      title: 'PRD & Gherkin Generator',
      description: 'Automatically generate detailed product documents and test scenarios.',
    },
    {
      icon: Users,
      title: 'Team Productivity Suite',
      description: 'Manage projects, track issues, and collaborate with a Notion-style interface.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900">Everything you need, supercharged by AI</h3>
          <p className="mt-4 text-gray-600">A unified platform to manage the entire product lifecycle.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200"
            >
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            quote: "ProductAI has become the brain of our product team. The AI analysis is scarily accurate and saves us hours of manual work.",
            name: "Alex Chen",
            role: "Senior Product Manager, Innovate Inc."
        },
        {
            quote: "The GitHub integration is a game-changer. I can finally see the full picture from feature idea to deployment in one place.",
            name: "Maria Rodriguez",
            role: "Lead Developer, Tech Solutions"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900">Loved by Modern Product Teams</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
                        >
                            <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                            <div>
                                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const LandingFooter: React.FC = () => (
  <footer className="bg-white border-t border-gray-200">
    <div className="container mx-auto px-6 py-8 text-center text-gray-600">
      <p>&copy; 2025 ProductAI. All rights reserved.</p>
    </div>
  </footer>
);

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <LandingHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;

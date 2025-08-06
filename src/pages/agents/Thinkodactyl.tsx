import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Brain, Lightbulb, Zap, BookOpen } from 'lucide-react';

const Thinkodactyl = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-accent text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to="/agents" className="flex items-center text-white hover:text-secondary/80 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to AI Agents
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Thinkodactyl
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-2xl mb-8 text-purple-200"
              >
                LLM Test Advisor
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-purple-200 mb-8"
              >
                Provides AI-driven test strategies and advice. Leverages LLMs for smarter, 
                adaptive testing with intelligent recommendations and insights.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-white text-secondary px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-secondary/10 transition-colors">
                  <Play className="h-5 w-5 mr-2" />
                  Get Advice
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">
                  View Strategies
                </button>
              </motion.div>
            </div>
            
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                <img 
                  src="/src/assets/agents/thinkodactyl.png" 
                  alt="Thinkodactyl"
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Thinkodactyl Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thinkodactyl analyzes your application and testing requirements using advanced 
              LLM technology to provide intelligent testing strategies and recommendations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Analysis</h3>
              <p className="text-gray-600">
                Analyzes your application code, requirements, and testing context to 
                understand testing needs and generate strategic recommendations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategy Generation</h3>
              <p className="text-gray-600">
                Generates comprehensive testing strategies, test case suggestions, and 
                optimization recommendations based on best practices and AI insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Adaptive Learning</h3>
              <p className="text-gray-600">
                Learns from testing results and feedback to continuously improve 
                recommendations and adapt strategies to your specific needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Use Thinkodactyl Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Use Thinkodactyl?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testing strategy development is complex and requires deep expertise. Thinkodactyl 
              brings AI-powered intelligence to guide your testing decisions and optimize outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600 mb-4">
                Access testing expertise and best practices through AI-powered analysis. 
                Get recommendations that would typically require years of experience.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Testing strategy optimization</li>
                <li>• Risk-based testing approaches</li>
                <li>• Coverage optimization</li>
                <li>• Tool and framework recommendations</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Optimization</h3>
              <p className="text-gray-600 mb-4">
                Continuously optimize your testing approach based on results, feedback, 
                and changing requirements with adaptive AI recommendations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Adaptive strategies</li>
                <li>• Performance optimization</li>
                <li>• Cost-benefit analysis</li>
                <li>• ROI improvement</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Thinkodactyl Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features that make Thinkodactyl the ultimate testing strategy 
              advisor for modern development teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Testing Strategy Development",
                description: "Creates comprehensive testing strategies tailored to your application and requirements."
              },
              {
                title: "Risk Assessment",
                description: "Analyzes application risks and recommends testing approaches to mitigate them."
              },
              {
                title: "Tool Recommendations",
                description: "Suggests optimal testing tools and frameworks based on your specific needs."
              },
              {
                title: "Coverage Optimization",
                description: "Identifies testing gaps and recommends approaches to maximize coverage efficiently."
              },
              {
                title: "Performance Testing Advice",
                description: "Provides guidance on performance testing strategies and load testing approaches."
              },
              {
                title: "Automation Strategy",
                description: "Recommends automation approaches and helps prioritize manual vs automated testing."
              }
            ].map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Get Testing Advice from Thinkodactyl?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-purple-200 mb-8"
          >
            Start optimizing your testing strategy with AI-powered intelligence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-secondary/10 transition-colors">
              <Play className="h-5 w-5 mr-2" />
              Get Testing Advice
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">
              View Strategies
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Thinkodactyl; 
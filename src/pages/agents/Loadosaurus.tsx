import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Zap, Activity, Gauge, TrendingUp, BarChart3, Target } from 'lucide-react';

const Loadosaurus = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to="/agents" className="flex items-center text-white hover:text-primary/80 transition-colors">
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
                Loadosaurus
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-2xl mb-8 text-primary/80"
              >
                JMeter Performance Tester
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-primary/80 mb-8"
              >
                Load, Stress, Spike, and Soak testing with JMeter. Measures TPS, latency, 
                error rates for AI systems with comprehensive performance analysis.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-primary/10 transition-colors">
                  <Play className="h-5 w-5 mr-2" />
                  Start Load Test
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                  View Reports
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
                  src="/src/assets/agents/loadosaurus.png" 
                  alt="Loadosaurus"
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
              How Loadosaurus Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Loadosaurus uses Apache JMeter to simulate real-world user traffic and analyze 
              application performance under various load conditions and stress scenarios.
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
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Load Simulation</h3>
              <p className="text-gray-600">
                Simulates thousands of concurrent users with realistic traffic patterns, 
                user behaviors, and request distributions using JMeter Thread Groups.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Monitoring</h3>
              <p className="text-gray-600">
                Monitors TPS (Transactions Per Second), response times, error rates, and 
                success counts with real-time metrics and visual reporting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Test Scenarios</h3>
              <p className="text-gray-600">
                Executes Load, Stress, Spike, and Soak tests with configurable user counts, 
                durations, and ramp-up times for comprehensive performance validation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Use Loadosaurus Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Use Loadosaurus?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Performance testing is critical for AI systems. Loadosaurus provides structured 
              JMeter-based testing to validate scalability and reliability under real-world conditions.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Testing</h3>
              <p className="text-gray-600 mb-4">
                Executes multiple test scenarios including Load, Stress, Spike, and Soak tests 
                with configurable parameters and realistic user simulation.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Load testing (3 users, 10 mins)</li>
                <li>• Stress testing (15 users, 10 mins)</li>
                <li>• Spike testing (3→15 users, sudden)</li>
                <li>• Soak testing (3 users, 15 mins)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Metrics</h3>
              <p className="text-gray-600 mb-4">
                Provides comprehensive performance metrics including TPS, response times, 
                error rates, and success counts with visual reporting and analysis.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• TPS monitoring</li>
                <li>• Response time analysis</li>
                <li>• Error rate tracking</li>
                <li>• Success count metrics</li>
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
              Loadosaurus Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features that make Loadosaurus the ultimate performance testing 
              companion for modern development teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "JMeter Integration",
                description: "Uses Apache JMeter for reliable and industry-standard performance testing."
              },
              {
                title: "Multiple Test Types",
                description: "Supports Load, Stress, Spike, and Soak testing scenarios with configurable parameters."
              },
              {
                title: "Real-Time Monitoring",
                description: "Provides live metrics including TPS, response times, and error rates during testing."
              },
              {
                title: "Visual Reporting",
                description: "Generates comprehensive reports using JMeter listeners (Summary, Aggregate, View Tree)."
              },
              {
                title: "JSON Validation",
                description: "Extracts and validates JSON response data to ensure API functionality under load."
              },
              {
                title: "Exportable Results",
                description: "Exports test results and reports for analysis and documentation purposes."
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
      <section className="bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Test Performance with Loadosaurus?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-primary/80 mb-8"
          >
            Start validating your AI system's performance with JMeter-powered load testing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-primary/10 transition-colors">
              <Play className="h-5 w-5 mr-2" />
              Start Performance Testing
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              View Test Reports
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Loadosaurus; 
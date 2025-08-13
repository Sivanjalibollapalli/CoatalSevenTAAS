import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import loadosaurusImage from '../../assets/agents/loadosaurus.png';

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
            <Link to="/testing-agents" className="flex items-center text-white hover:text-primary/80 transition-colors">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
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
                className="text-xl md:text-2xl mb-8 text-gray-300"
              >
                Performance Testing Expert
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-300 mb-8"
              >
                Performance and load testing agent for scalability validation. 
                Tests application performance under various load conditions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >

                <a 
                  href="https://projectludo.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-primary/10 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Test Loadosaurus
                </a>
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
                  src={loadosaurusImage} 
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
              Loadosaurus simulates various load scenarios to test application 
              performance, scalability, and stability under stress conditions.
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
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Load Simulation</h3>
              <p className="text-gray-600">
                Simulates realistic user loads and traffic patterns to test 
                application performance under various conditions.
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
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Metrics</h3>
              <p className="text-gray-600">
                Monitors and analyzes key performance indicators including response 
                times, throughput, and resource utilization.
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
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stress Testing</h3>
              <p className="text-gray-600">
                Identifies breaking points and performance bottlenecks by pushing 
                applications beyond normal operating limits.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Use Loadosaurus Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
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
              Performance issues can be catastrophic for user experience. 
              Loadosaurus ensures your application can handle real-world load demands.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalability Testing</h3>
              <p className="text-gray-600 mb-4">
                Tests application scalability by simulating increasing user loads 
                and identifying performance bottlenecks before they impact users.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Load simulation scenarios</li>
                <li>• Performance bottleneck identification</li>
                <li>• Scalability assessment</li>
                <li>• Capacity planning insights</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Provides comprehensive performance metrics and real-time monitoring 
                to ensure optimal application performance.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Response time monitoring</li>
                <li>• Throughput analysis</li>
                <li>• Resource utilization tracking</li>
                <li>• Performance trend analysis</li>
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
                title: "Load Testing",
                description: "Simulates realistic user loads to test application performance under normal conditions."
              },
              {
                title: "Stress Testing",
                description: "Pushes applications beyond normal limits to identify breaking points and bottlenecks."
              },
              {
                title: "Performance Metrics",
                description: "Monitors response times, throughput, and resource utilization in real-time."
              },
              {
                title: "Scalability Assessment",
                description: "Evaluates how well applications scale with increasing user loads and traffic."
              },
              {
                title: "Bottleneck Identification",
                description: "Identifies performance bottlenecks and provides optimization recommendations."
              },
              {
                title: "Capacity Planning",
                description: "Provides insights for infrastructure planning and resource allocation."
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
    </motion.div>
  );
};

export default Loadosaurus; 
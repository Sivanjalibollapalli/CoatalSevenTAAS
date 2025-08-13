import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import scriptodonImage from '../../assets/agents/scriptodon.png';

const Scriptodon = () => {
  const [isLaunching, setIsLaunching] = useState(false);

  const handleLaunch = () => {
    setIsLaunching(true);
    // Simulate agent launch process
    setTimeout(() => {
      setIsLaunching(false);
      // Here you would integrate with the actual agent launch functionality
      alert('Scriptodon agent launched successfully!');
    }, 2000);
  };

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
                Scriptodon
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-2xl mb-8 text-gray-300"
              >
                Automation Testing Expert
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-300 mb-8"
              >
                Automated testing agent that creates and executes test scripts. 
                Integrates with CI/CD pipelines for continuous testing automation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="http://13.232.134.97:3000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-primary/10 transition-colors"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Test Scriptodon
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
                  src={scriptodonImage} 
                  alt="Scriptodon"
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
              How Scriptodon Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scriptodon automatically generates and executes test scripts, 
              providing continuous testing automation with intelligent test case generation.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Script Generation</h3>
              <p className="text-gray-600">
                Automatically generates test scripts based on application analysis, 
                user stories, and testing requirements.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Test Execution</h3>
              <p className="text-gray-600">
                Executes automated test scripts systematically, monitoring results 
                and capturing detailed execution logs.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CI/CD Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrates with CI/CD pipelines for continuous testing 
                and automated quality assurance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Use Scriptodon Section */}
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
              Why Use Scriptodon?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manual test script creation is time-consuming and error-prone. 
              Scriptodon automates the entire testing process for faster delivery.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Script Generation</h3>
              <p className="text-gray-600 mb-4">
                Creates comprehensive test scripts automatically based on application 
                analysis and testing requirements.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Intelligent test case generation</li>
                <li>• Automated script creation</li>
                <li>• Regression testing automation</li>
                <li>• Cross-browser test scripts</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Testing</h3>
              <p className="text-gray-600 mb-4">
                Integrates with CI/CD pipelines to provide continuous testing 
                and immediate feedback on code changes.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• CI/CD pipeline integration</li>
                <li>• Continuous test execution</li>
                <li>• Real-time result monitoring</li>
                <li>• Automated quality gates</li>
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
              Scriptodon Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features that make Scriptodon the ultimate automation testing 
              companion for modern development teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Script Generation",
                description: "Automatically generates test scripts based on application analysis and requirements."
              },
              {
                title: "Test Execution",
                description: "Executes automated test scripts with comprehensive monitoring and logging."
              },
              {
                title: "CI/CD Integration",
                description: "Seamlessly integrates with CI/CD pipelines for continuous testing automation."
              },
              {
                title: "Regression Testing",
                description: "Automates regression testing to ensure new changes don't break existing functionality."
              },
              {
                title: "Cross-browser Testing",
                description: "Executes tests across multiple browsers and platforms for comprehensive coverage."
              },
              {
                title: "Result Reporting",
                description: "Generates detailed test reports with execution metrics and failure analysis."
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

export default Scriptodon; 
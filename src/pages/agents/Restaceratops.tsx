import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Globe, Zap, Shield, Activity } from 'lucide-react';

const Restaceratops = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-logo-dark to-primary text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to="/agents" className="flex items-center text-white hover:text-logo-dark/80 transition-colors">
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
                Restaceratops
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-2xl mb-8 text-indigo-200"
              >
                API Tester
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-indigo-200 mb-8"
              >
                Performs deep API testing for reliability. Validates endpoints, responses, 
                and integrations with comprehensive testing strategies.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-white text-logo-dark px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-logo-dark/10 transition-colors">
                  <Play className="h-5 w-5 mr-2" />
                  Test API
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors">
                  View Results
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
                  src="/src/assets/agents/restaceratops.png" 
                  alt="Restaceratops"
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
              How Restaceratops Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restaceratops performs comprehensive API testing with intelligent endpoint 
              discovery, response validation, and integration testing.
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
              <div className="bg-logo-dark text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Endpoint Discovery</h3>
              <p className="text-gray-600">
                Automatically discovers and maps API endpoints, parameters, and 
                authentication requirements for comprehensive testing coverage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="bg-logo-dark text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Response Validation</h3>
              <p className="text-gray-600">
                Validates API responses against schemas, checks status codes, 
                and ensures data integrity across all endpoints.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="bg-logo-dark text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Testing</h3>
              <p className="text-gray-600">
                Tests authentication, authorization, input validation, and security 
                vulnerabilities to ensure API security compliance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Use Restaceratops Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Use Restaceratops?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manual API testing is complex and time-consuming. Restaceratops brings 
              AI-powered intelligence to automate your API testing workflow.
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
                Tests all aspects of your API including functionality, performance, 
                security, and integration points automatically.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Endpoint functionality</li>
                <li>• Response validation</li>
                <li>• Security testing</li>
                <li>• Integration testing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Workflow</h3>
              <p className="text-gray-600 mb-4">
                Reduces manual testing effort by up to 85%. Focus on business logic while 
                Restaceratops handles the complex API testing scenarios.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated test execution</li>
                <li>• Continuous monitoring</li>
                <li>• Detailed reporting</li>
                <li>• CI/CD integration</li>
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
              Restaceratops Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features that make Restaceratops the ultimate API testing 
              companion for modern development teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "REST API Testing",
                description: "Comprehensive testing of REST APIs with support for all HTTP methods and status codes."
              },
              {
                title: "GraphQL Testing",
                description: "Specialized testing for GraphQL APIs including query validation and response testing."
              },
              {
                title: "Authentication Testing",
                description: "Tests various authentication methods including OAuth, JWT, API keys, and custom auth."
              },
              {
                title: "Performance Testing",
                description: "Measures API response times, throughput, and performance under load conditions."
              },
              {
                title: "Security Testing",
                description: "Identifies security vulnerabilities including injection attacks and data exposure."
              },
              {
                title: "Integration Testing",
                description: "Tests API integrations with databases, third-party services, and microservices."
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
      <section className="bg-gradient-to-br from-logo-dark to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Test APIs with Restaceratops?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-indigo-200 mb-8"
          >
            Start automating your API testing with AI-powered intelligence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-logo-dark px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-logo-dark/10 transition-colors">
              <Play className="h-5 w-5 mr-2" />
              Start API Testing
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors">
              View Results
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Restaceratops; 
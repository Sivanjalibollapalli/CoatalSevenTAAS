import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, FileText, Code, Database, Zap } from 'lucide-react';

const Swaggosaur = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-logo-teal to-accent text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to="/agents" className="flex items-center text-white hover:text-logo-teal/80 transition-colors">
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
                Swaggosaur
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-2xl mb-8 text-logo-teal"
              >
                Swagger → Test Case Agent
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-logo-teal mb-8"
              >
                Converts Swagger API specs into test cases. Bridges the gap between 
                documentation and testing with intelligent API test generation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-white text-logo-teal px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-logo-teal/10 transition-colors">
                  <Play className="h-5 w-5 mr-2" />
                  Generate Tests
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-logo-teal transition-colors">
                  View Documentation
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
                  src="/src/assets/agents/swaggosaur.png" 
                  alt="Swaggosaur"
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
              How Swaggosaur Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Swaggosaur analyzes Swagger/OpenAPI specifications and automatically generates 
              comprehensive test cases for all API endpoints.
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
              <div className="bg-logo-teal text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">API Specification Analysis</h3>
              <p className="text-gray-600">
                Parses Swagger/OpenAPI specifications to understand endpoints, parameters, 
                responses, and data models.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="bg-logo-teal text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Test Case Generation</h3>
              <p className="text-gray-600">
                Generates comprehensive test cases covering positive scenarios, edge cases, 
                and error conditions for each endpoint.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="bg-logo-teal text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Database className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Validation</h3>
              <p className="text-gray-600">
                Creates test data and validates responses against schema definitions, 
                ensuring API contract compliance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Use Swaggosaur Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Use Swaggosaur?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manual API test creation is repetitive and error-prone. Swaggosaur brings 
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Coverage</h3>
              <p className="text-gray-600 mb-4">
                Automatically generates test cases for all endpoints, parameters, and 
                response scenarios defined in your API specification.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• All endpoints covered</li>
                <li>• Parameter validation</li>
                <li>• Response validation</li>
                <li>• Error scenario testing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Time Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Reduces API test creation time by up to 90%. Focus on business logic while 
                Swaggosaur handles the repetitive test generation.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated test generation</li>
                <li>• Multiple framework support</li>
                <li>• Ready-to-run tests</li>
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
              Swaggosaur Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features that make Swaggosaur the ultimate API testing companion 
              for modern development teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Swagger/OpenAPI Support",
                description: "Supports Swagger 2.0 and OpenAPI 3.0 specifications for comprehensive API testing."
              },
              {
                title: "Multi-Framework Output",
                description: "Generates tests for Postman, REST Assured, Karate, and other popular testing frameworks."
              },
              {
                title: "Data-Driven Testing",
                description: "Creates parameterized tests with realistic test data based on API schemas."
              },
              {
                title: "Response Validation",
                description: "Validates API responses against schema definitions and expected formats."
              },
              {
                title: "Error Scenario Testing",
                description: "Generates tests for error conditions, invalid inputs, and edge cases."
              },
              {
                title: "Integration Ready",
                description: "Creates tests ready for CI/CD pipelines and automated testing workflows."
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
      <section className="bg-gradient-to-br from-logo-teal to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Generate API Tests with Swaggosaur?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-logo-teal mb-8"
          >
            Start automating your API testing with AI-powered test generation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-logo-teal px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-logo-teal/10 transition-colors">
              <Play className="h-5 w-5 mr-2" />
              Generate API Tests
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-logo-teal transition-colors">
              View Documentation
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Swaggosaur; 
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Implement = () => {
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
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to SDLC Phases
            </Link>
          </div>
          
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Implement
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              Development
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              The Implement phase transforms design specifications into working software 
              through systematic coding, testing, and quality assurance processes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What It Does Section */}
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
              What This Phase Does
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Implement phase builds the actual software system according to design 
              specifications while maintaining quality standards and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Coding Standards",
                description: "Follow established coding standards and best practices for quality code."
              },
              {
                title: "Scalable Development",
                description: "Build scalable code that can handle growth and changing requirements."
              },
              {
                title: "Version Control",
                description: "Use version control systems to manage code changes and collaboration."
              },
              {
                title: "Code Review",
                description: "Conduct thorough code reviews to ensure quality and maintainability."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
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
              Development Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building high-quality software through 
              iterative development and continuous integration.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Environment Setup",
                description: "Set up development, testing, and production environments with necessary tools and configurations."
              },
              {
                step: "2",
                title: "Module Development",
                description: "Develop individual modules and components according to design specifications."
              },
              {
                step: "3",
                title: "Unit Testing",
                description: "Write and execute unit tests to ensure individual components work correctly."
              },
              {
                step: "4",
                title: "Integration",
                description: "Integrate modules and components to create the complete system."
              },
              {
                step: "5",
                title: "Code Review",
                description: "Conduct peer reviews to ensure code quality, standards compliance, and best practices."
              },
              {
                step: "6",
                title: "Continuous Integration",
                description: "Implement CI/CD pipelines for automated building, testing, and deployment."
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-start bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0 text-xl font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Deliverables Section */}
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
              Key Deliverables
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential outputs from the development phase that enable testing 
              and deployment processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Source Code</h3>
              <p className="text-gray-600 mb-4">
                Complete, well-documented source code that implements all functional 
                and non-functional requirements.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Modular code structure</li>
                <li>• Comprehensive documentation</li>
                <li>• Coding standards compliance</li>
                <li>• Version control history</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Unit Tests</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive test suites that validate individual components 
                and ensure code quality.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Component test coverage</li>
                <li>• Automated test execution</li>
                <li>• Test documentation</li>
                <li>• Quality metrics reporting</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Build Artifacts</h3>
              <p className="text-gray-600 mb-4">
                Compiled and packaged software ready for testing and deployment 
                in various environments.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Compiled executables</li>
                <li>• Deployment packages</li>
                <li>• Configuration files</li>
                <li>• Installation scripts</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Documentation</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive documentation including API docs, user guides, 
                and technical specifications.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• API documentation</li>
                <li>• User manuals</li>
                <li>• Technical specifications</li>
                <li>• Deployment guides</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Agents in Implement Phase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent AI agents that enhance the development phase with automated 
              coding, testing, and quality assurance capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Coding Agent",
                description: "Automatically generates high-quality, production-ready code based on design specifications and requirements.",
                capabilities: [
                  "Code generation",
                  "Best practices implementation",
                  "Pattern recognition",
                  "Language optimization"
                ],
                icon: "💻"
              },
              {
                name: "Unit Test Agent",
                description: "Intelligently creates comprehensive unit tests to ensure code quality and reliability.",
                capabilities: [
                  "Test case generation",
                  "Coverage analysis",
                  "Mock creation",
                  "Test execution"
                ],
                icon: "🧪"
              },
              {
                name: "Code Scanning Agent",
                description: "Automatically scans code for security vulnerabilities, bugs, and quality issues.",
                capabilities: [
                  "Security scanning",
                  "Bug detection",
                  "Code quality analysis",
                  "Vulnerability assessment"
                ],
                icon: "🔍"
              },
              {
                name: "Code Review Agent",
                description: "Performs intelligent code reviews to ensure adherence to standards and best practices.",
                capabilities: [
                  "Code review automation",
                  "Standard compliance",
                  "Performance analysis",
                  "Documentation review"
                ],
                icon: "📝"
              }
            ].map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{agent.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">{agent.name}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{agent.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Capabilities:</h4>
                  <ul className="space-y-1">
                    {agent.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-xs">
                        <svg className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Implement;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Deploy = () => {
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
              Deploy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              Deployment & Maintenance
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              The Deploy phase ensures successful software release and ongoing maintenance 
              to keep the system running smoothly in production environments.
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
              The Deploy phase manages the release process and ensures continuous 
              system availability through proactive maintenance and monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Release Planning",
                description: "Plan and coordinate software releases with proper versioning and rollback strategies."
              },
              {
                title: "Deployment Automation",
                description: "Automate deployment processes for consistent and reliable software releases."
              },
              {
                title: "Maintenance & Monitoring",
                description: "Monitor system performance and conduct proactive maintenance activities."
              },
              {
                title: "Feedback Collection",
                description: "Gather user feedback and performance metrics for continuous improvement."
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
              Deployment Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to deploying software safely and maintaining 
              system reliability in production environments.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Release Planning",
                description: "Plan release schedule, coordinate with stakeholders, and prepare deployment documentation."
              },
              {
                step: "2",
                title: "Environment Preparation",
                description: "Set up production environments, configure infrastructure, and validate deployment readiness."
              },
              {
                step: "3",
                title: "Deployment Execution",
                description: "Execute automated deployment processes with monitoring and rollback capabilities."
              },
              {
                step: "4",
                title: "Post-Deployment Testing",
                description: "Verify system functionality, performance, and integration in production environment."
              },
              {
                step: "5",
                title: "Monitoring & Maintenance",
                description: "Monitor system performance, conduct regular maintenance, and address issues proactively."
              },
              {
                step: "6",
                title: "Feedback & Improvement",
                description: "Collect user feedback, analyze performance metrics, and plan future improvements."
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
              Essential outputs from the deployment phase that ensure successful 
              software release and ongoing maintenance.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Deployed System</h3>
              <p className="text-gray-600 mb-4">
                Fully functional software system running in production environment 
                with all features operational.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Production-ready software</li>
                <li>• Configured environments</li>
                <li>• Performance optimization</li>
                <li>• Security implementation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Deployment Documentation</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive documentation covering deployment procedures, 
                configuration, and operational guidelines.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Deployment procedures</li>
                <li>• Configuration guides</li>
                <li>• Rollback procedures</li>
                <li>• Operational runbooks</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monitoring & Alerting</h3>
              <p className="text-gray-600 mb-4">
                Monitoring systems and alerting mechanisms to track system performance 
                and detect issues proactively.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Performance monitoring</li>
                <li>• Error tracking systems</li>
                <li>• Alert mechanisms</li>
                <li>• Health check endpoints</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Maintenance Plan</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive maintenance schedule and procedures for ongoing 
                system support and updates.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Regular maintenance schedule</li>
                <li>• Update procedures</li>
                <li>• Backup strategies</li>
                <li>• Disaster recovery plans</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
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
              AI Agents in Deploy Phase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent AI agents that enhance the deployment phase with automated 
              deployment and change management capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Deployment Agent",
                description: "Automates the deployment process across different environments with intelligent rollback capabilities.",
                capabilities: [
                  "Automated deployment",
                  "Environment management",
                  "Rollback automation",
                  "Deployment monitoring"
                ],
                icon: "🚀"
              },
              {
                name: "Change Request Submission Agent",
                description: "Intelligently manages and processes change requests with automated approval workflows.",
                capabilities: [
                  "Change request processing",
                  "Approval workflow automation",
                  "Impact analysis",
                  "Change tracking"
                ],
                icon: "📋"
              }
            ].map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-500"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{agent.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{agent.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{agent.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Capabilities:</h4>
                  <ul className="space-y-2">
                    {agent.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

export default Deploy;

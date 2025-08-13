import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Analyze = () => {
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
              Analyze
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              Planning & Requirement Analysis
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              The foundation of every successful software project begins with comprehensive 
              planning and thorough requirement analysis. This phase sets the stage for 
              the entire development lifecycle.
            </motion.p>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Agents in Analyze Phase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent AI agents that enhance the analysis phase with automated 
              capabilities and intelligent insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Draft Business Requirement Agent",
                description: "Automatically analyzes and drafts comprehensive business requirements based on stakeholder inputs and project objectives.",
                capabilities: [
                  "Requirement analysis and documentation",
                  "Stakeholder input processing",
                  "Business rule extraction",
                  "Requirement validation and verification"
                ],
                icon: "📋"
              },
              {
                name: "User Story Creation Agent",
                description: "Intelligently creates user stories and acceptance criteria based on business requirements and user needs.",
                capabilities: [
                  "User story generation",
                  "Acceptance criteria definition",
                  "User persona analysis",
                  "Story point estimation"
                ],
                icon: "👥"
              }
            ].map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
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
                        <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
              The Analyze phase establishes the project foundation by defining scope, 
              objectives, and resource requirements through systematic planning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Project Planning",
                description: "Create comprehensive project plans including timelines, milestones, and deliverables."
              },
              {
                title: "Scope Definition",
                description: "Define clear project boundaries, objectives, and what will be delivered."
              },
              {
                title: "Goal Setting",
                description: "Establish measurable objectives and success criteria for the project."
              },
              {
                title: "Resource Planning",
                description: "Identify and allocate necessary resources including team, tools, and budget."
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
              Analysis Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to understanding project requirements and creating 
              a solid foundation for development.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Stakeholder Identification",
                description: "Identify all project stakeholders including clients, users, and team members who will be involved in or affected by the project."
              },
              {
                step: "2",
                title: "Requirement Gathering",
                description: "Collect and document all functional and non-functional requirements through interviews, workshops, and analysis."
              },
              {
                step: "3",
                title: "Scope Analysis",
                description: "Analyze requirements to define project scope, identify constraints, and establish boundaries."
              },
              {
                step: "4",
                title: "Resource Assessment",
                description: "Evaluate available resources including team skills, technology stack, budget, and timeline constraints."
              },
              {
                step: "5",
                title: "Risk Analysis",
                description: "Identify potential risks, assess their impact, and develop mitigation strategies."
              },
              {
                step: "6",
                title: "Project Planning",
                description: "Create comprehensive project plans including schedules, resource allocation, and success metrics."
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
              Essential documents and artifacts that provide the foundation for 
              successful project execution.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Charter</h3>
              <p className="text-gray-600 mb-4">
                A formal document that authorizes the project and provides the project 
                manager with authority to apply organizational resources.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Project objectives and goals</li>
                <li>• Stakeholder identification</li>
                <li>• High-level requirements</li>
                <li>• Project constraints and assumptions</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Requirements Document</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive documentation of all functional and non-functional 
                requirements gathered from stakeholders.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Functional requirements</li>
                <li>• Non-functional requirements</li>
                <li>• User stories and use cases</li>
                <li>• Acceptance criteria</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Plan</h3>
              <p className="text-gray-600 mb-4">
                Detailed project planning document that outlines the approach, 
                schedule, and resource allocation for project execution.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Project schedule and timeline</li>
                <li>• Resource allocation plan</li>
                <li>• Risk management strategy</li>
                <li>• Communication plan</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scope Statement</h3>
              <p className="text-gray-600 mb-4">
                Clear definition of project boundaries, deliverables, and what is 
                included or excluded from the project scope.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Project scope description</li>
                <li>• Deliverables and milestones</li>
                <li>• Scope exclusions</li>
                <li>• Scope constraints</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Agents in Analyze Phase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent AI agents that enhance the analysis phase with automated 
              capabilities and intelligent insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Draft Business Requirement Agent",
                description: "Automatically analyzes and drafts comprehensive business requirements based on stakeholder inputs and project objectives.",
                capabilities: [
                  "Requirement analysis and documentation",
                  "Stakeholder input processing",
                  "Business rule extraction",
                  "Requirement validation and verification"
                ],
                icon: "📋"
              },
              {
                name: "User Story Creation Agent",
                description: "Intelligently creates user stories and acceptance criteria based on business requirements and user needs.",
                capabilities: [
                  "User story generation",
                  "Acceptance criteria definition",
                  "User persona analysis",
                  "Story point estimation"
                ],
                icon: "👥"
              }
            ].map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
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
                        <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

export default Analyze;

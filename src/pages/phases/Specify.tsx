import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Specify = () => {
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
              Specify
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              Defining Requirements
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              The Specify phase transforms high-level project goals into detailed, 
              actionable requirements that guide the entire development process.
            </motion.p>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Agents in Specify Phase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent AI agents that enhance the specification phase with automated 
              requirement gathering and analysis capabilities.
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
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500"
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
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
              The Specify phase creates comprehensive requirement specifications that 
              serve as the blueprint for system design and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Functional Requirements",
                description: "Define what the system should do, including features, functions, and user interactions."
              },
              {
                title: "Technical Requirements",
                description: "Specify technical constraints, performance criteria, and system architecture requirements."
              },
              {
                title: "Requirement Reviews",
                description: "Validate requirements through stakeholder reviews and approval processes."
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
              Requirements Specification Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic process for gathering, analyzing, and documenting detailed 
              requirements that drive system development.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Requirements Elicitation",
                description: "Gather requirements from stakeholders through interviews, workshops, surveys, and observation techniques."
              },
              {
                step: "2",
                title: "Requirements Analysis",
                description: "Analyze gathered requirements for completeness, consistency, feasibility, and traceability."
              },
              {
                step: "3",
                title: "Requirements Documentation",
                description: "Document requirements in structured formats including use cases, user stories, and requirement specifications."
              },
              {
                step: "4",
                title: "Requirements Validation",
                description: "Validate requirements with stakeholders to ensure accuracy, completeness, and alignment with business goals."
              },
              {
                step: "5",
                title: "Requirements Approval",
                description: "Obtain formal approval from stakeholders and project sponsors before proceeding to design phase."
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
              Essential documents that provide detailed specifications for system 
              development and implementation.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Software Requirements Specification (SRS)</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive document that describes all functional and non-functional 
                requirements for the software system.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• System overview and purpose</li>
                <li>• Functional requirements</li>
                <li>• Non-functional requirements</li>
                <li>• System interfaces and constraints</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Use Case Specifications</h3>
              <p className="text-gray-600 mb-4">
                Detailed descriptions of how users will interact with the system 
                to achieve specific goals.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Actor identification</li>
                <li>• Use case scenarios</li>
                <li>• Pre and post conditions</li>
                <li>• Alternative flows</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">User Stories</h3>
              <p className="text-gray-600 mb-4">
                Simple, user-focused descriptions of features written from the 
                perspective of end users.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• User role identification</li>
                <li>• Feature descriptions</li>
                <li>• Acceptance criteria</li>
                <li>• Story point estimation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Requirements Traceability Matrix</h3>
              <p className="text-gray-600 mb-4">
                A document that links requirements to their sources and tracks 
                their implementation throughout the project.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Requirement identification</li>
                <li>• Source traceability</li>
                <li>• Implementation tracking</li>
                <li>• Verification mapping</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Agents in Specify Phase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligent AI agents that enhance the specification phase with automated 
              design and analysis capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "UI/UX Design Agent",
                description: "Automatically generates user interface designs and user experience flows based on requirements and user personas.",
                capabilities: [
                  "Wireframe generation",
                  "Prototype creation",
                  "User flow design",
                  "Design system creation"
                ],
                icon: "🎨"
              },
              {
                name: "Architecture Design Agent",
                description: "Intelligently designs system architecture and technical specifications based on functional requirements.",
                capabilities: [
                  "System architecture design",
                  "Component identification",
                  "Technology stack selection",
                  "Scalability planning"
                ],
                icon: "🏗️"
              },
              {
                name: "Impact Analysis & Software Design Agent",
                description: "Analyzes the impact of design decisions and creates detailed software design specifications.",
                capabilities: [
                  "Impact assessment",
                  "Design pattern selection",
                  "Integration planning",
                  "Performance optimization"
                ],
                icon: "🔍"
              }
            ].map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{agent.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{agent.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Capabilities:</h4>
                  <ul className="space-y-2">
                    {agent.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

export default Specify;

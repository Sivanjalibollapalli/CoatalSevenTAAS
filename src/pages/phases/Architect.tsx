import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Architect = () => {
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
              Architect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              Design
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              The Architect phase creates the blueprint for system development, 
              defining the structure, components, and interactions that will bring 
              requirements to life.
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
              The Architect phase transforms requirements into detailed design specifications 
              that guide the development and implementation process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "High-Level Design (HLD)",
                description: "Create system architecture and component-level design specifications."
              },
              {
                title: "Low-Level Design (LLD)",
                description: "Define detailed module designs, data structures, and algorithms."
              },
              {
                title: "System Architecture",
                description: "Design the overall system structure, interfaces, and technology stack."
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
              Design Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to creating comprehensive design specifications 
              that ensure successful system implementation.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "System Architecture Design",
                description: "Define the overall system structure, components, and their relationships."
              },
              {
                step: "2",
                title: "Component Design",
                description: "Design individual system components and their interfaces."
              },
              {
                step: "3",
                title: "Database Design",
                description: "Design data models, schemas, and database architecture."
              },
              {
                step: "4",
                title: "Interface Design",
                description: "Design user interfaces and system integration points."
              },
              {
                step: "5",
                title: "Design Review",
                description: "Review design specifications for completeness, feasibility, and quality."
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
              Essential design documents that provide the blueprint for system 
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">System Design Document</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive document describing the system architecture, components, 
                and design decisions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• System architecture overview</li>
                <li>• Component specifications</li>
                <li>• Interface definitions</li>
                <li>• Technology stack selection</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Database Design</h3>
              <p className="text-gray-600 mb-4">
                Detailed database schema, data models, and storage architecture 
                specifications.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Entity-relationship diagrams</li>
                <li>• Database schema design</li>
                <li>• Data flow specifications</li>
                <li>• Storage optimization strategies</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">
                User interface designs, wireframes, and user experience specifications 
                for the system.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Wireframes and mockups</li>
                <li>• User interface specifications</li>
                <li>• User experience guidelines</li>
                <li>• Responsive design patterns</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">API Design</h3>
              <p className="text-gray-600 mb-4">
                Application programming interface specifications for system integration 
                and communication.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• API endpoint specifications</li>
                <li>• Data exchange formats</li>
                <li>• Authentication mechanisms</li>
                <li>• Error handling protocols</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Architect;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Code, Zap, FileText, Cpu, Database } from 'lucide-react';

const Scriptodon = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-accent text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to="/agents" className="flex items-center text-white hover:text-secondary/80 transition-colors">
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
                Scriptodon
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-2xl mb-8 text-blue-200"
              >
                Automation Script Generator
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-blue-200 mb-8"
              >
                Generates Python scripts from Swagger, Jira, Figma inputs. Creates Playwright/Selenium 
                automation with no-code dashboard and comprehensive reporting.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-white text-secondary px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-secondary/10 transition-colors">
                  <Play className="h-5 w-5 mr-2" />
                  Generate Script
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  View Dashboard
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
                  src="/src/assets/agents/scriptodon.png" 
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
              Scriptodon analyzes multiple input sources and generates executable Python automation 
              scripts using AI-powered code generation and best practices.
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
              <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Input Analysis</h3>
              <p className="text-gray-600">
                Processes Swagger files, Jira stories, Figma designs, and custom prompts to 
                understand testing requirements and generate appropriate automation scripts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Script Generation</h3>
              <p className="text-gray-600">
                Creates executable Python scripts using Playwright or Selenium with proper 
                structure, error handling, and best practices for automation testing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Database className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Integration</h3>
              <p className="text-gray-600">
                Provides no-code dashboard for script management, execution, and reporting 
                with CSV exports and Jira integration capabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Use Scriptodon Section */}
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
              Why Use Scriptodon?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manual script creation is time-consuming and error-prone. Scriptodon brings 
              AI-powered intelligence to automate your test script generation process.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Source Input</h3>
              <p className="text-gray-600 mb-4">
                Accepts various input sources including Swagger files, Jira stories, 
                Figma designs, and custom prompts for comprehensive script generation.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Swagger/OpenAPI files</li>
                <li>• Jira story integration</li>
                <li>• Figma design parsing</li>
                <li>• Custom prompt support</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Python Automation</h3>
              <p className="text-gray-600 mb-4">
                Generates executable Python scripts using Playwright or Selenium with 
                proper structure, error handling, and CI/CD integration ready.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Playwright automation</li>
                <li>• Selenium support</li>
                <li>• Python script generation</li>
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
              Scriptodon Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features that make Scriptodon the ultimate automation script generator 
              for modern development teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Swagger Integration",
                description: "Parses Swagger/OpenAPI files to generate API test automation scripts."
              },
              {
                title: "Jira Story Processing",
                description: "Analyzes Jira stories to create test cases and automation scripts."
              },
              {
                title: "Figma Design Parsing",
                description: "Extracts UI elements from Figma designs for UI automation scripts."
              },
              {
                title: "Python Script Generation",
                description: "Creates executable Python scripts with Playwright or Selenium frameworks."
              },
              {
                title: "No-Code Dashboard",
                description: "Provides user-friendly interface for script management and execution."
              },
              {
                title: "Reporting & Export",
                description: "Generates CSV reports and integrates with Jira for test tracking."
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
      <section className="bg-gradient-to-br from-secondary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Generate Automation Scripts with Scriptodon?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-blue-200 mb-8"
          >
            Start automating your testing with AI-powered script generation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-secondary/10 transition-colors">
              <Play className="h-5 w-5 mr-2" />
              Generate Automation Scripts
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              View Dashboard
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Scriptodon; 
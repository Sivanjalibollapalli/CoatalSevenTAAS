import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Bug, FileText, AlertTriangle, BarChart3 } from 'lucide-react';

const BugzillaRex = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-logo-teal text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to="/agents" className="flex items-center text-white hover:text-accent/80 transition-colors">
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
                Bugzilla Rex
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-2xl mb-8 text-accent"
              >
                AI Ticket Assignment Agent
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-accent mb-8"
              >
                Automatically assigns tickets to teams using AI classification. Analyzes ticket content 
                and routes to the right team member across Jira, Trello, and Asana platforms.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-white text-accent px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-accent/10 transition-colors">
                  <Play className="h-5 w-5 mr-2" />
                  Assign Ticket
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-accent transition-colors">
                  View Assignments
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
                  src="/src/assets/agents/bugzilla-rex.png" 
                  alt="Bugzilla Rex"
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
              How Bugzilla Rex Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bugzilla Rex uses AI-powered keyword analysis to automatically assign tickets 
              to the most suitable team members, reducing manual triage time.
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
              <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Bug className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ticket Analysis</h3>
              <p className="text-gray-600">
                Analyzes ticket content, summary, and description using keyword detection 
                and NLP to understand the ticket requirements and context.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Matching</h3>
              <p className="text-gray-600">
                Maps tickets to appropriate teams based on keywords like 'bug', 'frontend', 
                'database', 'QA', 'Backend', ensuring optimal assignment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Member Assignment</h3>
              <p className="text-gray-600">
                Selects the best team member using round-robin, priority-based, or 
                workload-balanced assignment strategies within the matched team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Use Bugzilla Rex Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Use Bugzilla Rex?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manual ticket assignment is time-consuming and error-prone. Bugzilla Rex brings 
              AI-powered intelligence to streamline your ticket triage process.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Assignment</h3>
              <p className="text-gray-600 mb-4">
                Automatically analyzes and assigns tickets using AI classification, reducing 
                manual effort and ensuring consistent assignment quality.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Keyword-based classification</li>
                <li>• Team workload balancing</li>
                <li>• Priority-based assignment</li>
                <li>• Multi-platform support</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Integration</h3>
              <p className="text-gray-600 mb-4">
                Works seamlessly with popular project management platforms including 
                Jira, Trello, Asana, and other ticketing systems.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Jira integration</li>
                <li>• Trello support</li>
                <li>• Asana compatibility</li>
                <li>• Extensible architecture</li>
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
              Bugzilla Rex Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features that make Bugzilla Rex the ultimate bug management 
              companion for modern development teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Classification",
                description: "Uses keyword detection and NLP to understand ticket content and requirements."
              },
              {
                title: "Multi-Platform Support",
                description: "Integrates with Jira, Trello, Asana, and other project management tools."
              },
              {
                title: "Team Workload Balancing",
                description: "Distributes tickets evenly across team members based on current workload."
              },
              {
                title: "Priority-Based Assignment",
                description: "Assigns high-priority tickets to senior team members automatically."
              },
              {
                title: "Real-Time Updates",
                description: "Updates ticket assignments through platform APIs in real-time."
              },
              {
                title: "Analytics & Insights",
                description: "Provides analytics on assignment patterns and team performance metrics."
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
      <section className="bg-gradient-to-br from-accent to-logo-teal text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Automate Ticket Assignment with Bugzilla Rex?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-accent mb-8"
          >
            Start automating your ticket triage with AI-powered assignment intelligence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-accent px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-accent/10 transition-colors">
              <Play className="h-5 w-5 mr-2" />
              Start Auto Assignment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-accent transition-colors">
              View Analytics
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BugzillaRex; 
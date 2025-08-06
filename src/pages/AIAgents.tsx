import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AIAgents = () => {
  const agents = [
    {
      name: 'Testaraptor',
      subtitle: 'Manual Testing Expert',
      description: 'Prompt-based testing with AI understanding. Tests response accuracy, fallback handling, and conversational flows.',
      color: 'bg-primary/20',
      textColor: 'text-gray-900',
      borderColor: 'border-primary',
      image: '/src/assets/agents/testaraptor.png',
      path: '/agents/testaraptor'
    },
    {
      name: 'Scriptodon',
      subtitle: 'Automation Script Generator',
      description: 'Generates Python scripts from Swagger, Jira, Figma inputs. Creates Playwright/Selenium automation with no-code dashboard.',
      color: 'bg-secondary/20',
      textColor: 'text-gray-900',
      borderColor: 'border-secondary',
      image: '/src/assets/agents/scriptodon.png',
      path: '/agents/scriptodon'
    },
    {
      name: 'Bugzilla Rex',
      subtitle: 'AI Ticket Assignment Agent',
      description: 'Automatically assigns tickets to teams using AI classification. Works with Jira, Trello, Asana platforms.',
      color: 'bg-accent/20',
      textColor: 'text-gray-900',
      borderColor: 'border-accent',
      image: '/src/assets/agents/bugzilla-rex.png',
      path: '/agents/bugzilla-rex'
    },
    {
      name: 'Swaggosaur',
      subtitle: 'Swagger → Test Case Agent',
      description: 'Upload Swagger/OpenAPI files, auto-generate test cases, run against live APIs, output comprehensive reports.',
      color: 'bg-logo-teal/20',
      textColor: 'text-gray-900',
      borderColor: 'border-logo-teal',
      image: '/src/assets/agents/swaggosaur.png',
      path: '/agents/swaggosaur'
    },
    {
      name: 'Restaceratops',
      subtitle: 'AI-Powered API Tester',
      description: 'AI chat interface, authentication support, multiple report formats. Comprehensive API testing with intelligent analysis.',
      color: 'bg-logo-dark/20',
      textColor: 'text-gray-900',
      borderColor: 'border-logo-dark',
      image: '/src/assets/agents/restaceratops.png',
      path: '/agents/restaceratops'
    },
    {
      name: 'Loadosaurus',
      subtitle: 'JMeter Performance Tester',
      description: 'Load, Stress, Spike, and Soak testing with JMeter. Measures TPS, latency, error rates for AI systems.',
      color: 'bg-primary/20',
      textColor: 'text-gray-900',
      borderColor: 'border-primary',
      image: '/src/assets/agents/loadosaurus.png',
      path: '/agents/loadosaurus'
    },
    {
      name: 'Thinkodactyl',
      subtitle: 'LLM Test Advisor',
      description: 'Provides AI-driven test strategies and advice. Leverages LLMs for smarter, adaptive testing with intelligent recommendations.',
      color: 'bg-secondary/20',
      textColor: 'text-gray-900',
      borderColor: 'border-secondary',
      image: '/src/assets/agents/thinkodactyl.png',
      path: '/agents/thinkodactyl'
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-logo-teal text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Meet Our AI Testing Agents
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-white mb-8"
          >
            Seven specialized, autonomous agents built for every testing need. 
            Accelerate quality assurance with cutting-edge AI technology.
          </motion.p>
        </div>
      </section>

      {/* Diamond Layout Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Specialized AI Testing Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each agent is designed for specific testing scenarios, working together to ensure 
              comprehensive quality assurance across your entire development lifecycle.
            </p>
          </motion.div>

          {/* Diamond Grid Layout */}
          <div className="relative">
            {/* Top Row - 3 Agents */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                {agents.slice(0, 3).map((agent, index) => (
                  <motion.div
                    key={agent.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="relative"
                  >
                    <Link to={agent.path} className="block h-full">
                      <div className={`${agent.color} ${agent.borderColor} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 backdrop-blur-sm bg-white/10 h-full flex flex-col`}>
                        <div className="relative mb-6 flex-shrink-0">
                          <img 
                            src={agent.image} 
                            alt={agent.name}
                            className="w-32 h-32 mx-auto object-cover rounded-full border-4 border-white/20 shadow-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.nextSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'block';
                            }}
                          />
                          <div className="text-6xl text-center hidden">{agent.name.charAt(0)}</div>
                        </div>
                        <div className="flex-1 flex flex-col">
                          <h3 className={`text-2xl font-bold mb-2 text-center ${agent.textColor}`}>{agent.name}</h3>
                          <p className={`font-medium mb-4 text-center ${agent.textColor}`}>{agent.subtitle}</p>
                          <p className={`text-base text-center ${agent.textColor} flex-1`}>{agent.description}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Middle Row - 1 Agent (Thinkodactyl) */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                <Link to={agents[6].path} className="block">
                  <div className={`${agents[6].color} ${agents[6].borderColor} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 backdrop-blur-sm bg-white/10 w-80 h-full flex flex-col`}>
                    <div className="relative mb-6 flex-shrink-0">
                      <img 
                        src={agents[6].image} 
                        alt={agents[6].name}
                        className="w-32 h-32 mx-auto object-cover rounded-full border-4 border-white/20 shadow-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'block';
                        }}
                      />
                      <div className="text-6xl text-center hidden">{agents[6].name.charAt(0)}</div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className={`text-2xl font-bold mb-2 text-center ${agents[6].textColor}`}>{agents[6].name}</h3>
                      <p className={`font-medium mb-4 text-center ${agents[6].textColor}`}>{agents[6].subtitle}</p>
                      <p className={`text-base text-center ${agents[6].textColor} flex-1`}>{agents[6].description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Bottom Row - 3 Agents */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                {agents.slice(3, 6).map((agent, index) => (
                  <motion.div
                    key={agent.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 4) * 0.1, duration: 0.6 }}
                    className="relative"
                  >
                    <Link to={agent.path} className="block h-full">
                      <div className={`${agent.color} ${agent.borderColor} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 backdrop-blur-sm bg-white/10 h-full flex flex-col`}>
                        <div className="relative mb-6 flex-shrink-0">
                          <img 
                            src={agent.image} 
                            alt={agent.name}
                            className="w-32 h-32 mx-auto object-cover rounded-full border-4 border-white/20 shadow-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.nextSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'block';
                            }}
                          />
                          <div className="text-6xl text-center hidden">{agent.name.charAt(0)}</div>
                        </div>
                        <div className="flex-1 flex flex-col">
                          <h3 className={`text-2xl font-bold mb-2 text-center ${agent.textColor}`}>{agent.name}</h3>
                          <p className={`font-medium mb-4 text-center ${agent.textColor}`}>{agent.subtitle}</p>
                          <p className={`text-base text-center ${agent.textColor} flex-1`}>{agent.description}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AIAgents; 
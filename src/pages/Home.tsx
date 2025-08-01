import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Users, Trophy, Zap, ChevronDown, Clock, Target, Award, CheckCircle, Star, Users2, Calendar, BookOpen, Lightbulb, Rocket, TrendingUp, Globe, Shield } from 'lucide-react';
import aiMLImg from '../assets/AI_ML.png';
import quantumImg from '../assets/Quantum computing.png';
import automationImg from '../assets/Automation testing.png';
import fullStackImg from '../assets/Full stack.png';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-logo-teal overflow-hidden">
        <div className="absolute inset-0 bg-logo-teal opacity-10"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            {...fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Welcome to{' '}
            <span className="text-logo-teal">
              Coastal Seven
            </span>
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white"
          >
            Empowering the next generation of tech professionals through innovative 
            internship programs and cutting-edge project development.
          </motion.p>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/programs"
              className="bg-accent hover:bg-logo-teal text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore Programs</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/connect"
              className="border-2 border-white text-white hover:bg-logo-teal hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-logo-teal opacity-70" />
        </motion.div>
      </section>

      {/* TaaS Program Section - Compact */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/20 relative overflow-hidden"
          >
            <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Transform Your Future with Our TaaS Program
            </motion.h2>

            <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6"
            >
              Experience the future of professional development through our innovative Talent-as-a-Service program that combines cutting-edge technology training with real-world project experience.
            </motion.p>

            <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl font-bold text-gray-900 mb-4"
            >
              Accelerate Your Career with Industry Excellence
            </motion.h3>

            <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Our revolutionary Talent-as-a-Service approach transforms aspiring professionals into industry-ready experts through intensive training, hands-on projects, and performance-driven selection.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section - Compact */}
      <section className="py-16 bg-gradient-to-br from-primary via-secondary to-logo-teal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Technologies We Use
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Our internship programs immerse you in the most in-demand and futuristic technologies.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AI & ML */}
            <Link to="/technologies/ai-ml">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center justify-between min-h-[20rem] group transition-all duration-300 hover:bg-white/20 cursor-pointer"
              >
                <img src={aiMLImg} alt="AI & ML" loading="lazy" className="w-32 h-32 object-cover rounded-xl mb-4 shadow-lg border-4 border-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-0">AI & ML</h3>
              </motion.div>
            </Link>
            {/* Quantum Computing */}
            <Link to="/technologies/quantum-computing">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center justify-between min-h-[20rem] group transition-all duration-300 hover:bg-white/20 cursor-pointer"
              >
                <img src={quantumImg} alt="Quantum Computing" loading="lazy" className="w-32 h-32 object-cover rounded-xl mb-4 shadow-lg border-4 border-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-0">Quantum Computing</h3>
              </motion.div>
            </Link>
            {/* Automation Testing */}
            <Link to="/technologies/automation-testing">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center justify-between min-h-[20rem] group transition-all duration-300 hover:bg-white/20 cursor-pointer"
              >
                <img src={automationImg} alt="Automation Testing" loading="lazy" className="w-32 h-32 object-cover rounded-xl mb-4 shadow-lg border-4 border-green-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-0">Automation Testing</h3>
              </motion.div>
            </Link>
            {/* Full Stack */}
            <Link to="/technologies/full-stack-development">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center justify-between min-h-[20rem] group transition-all duration-300 hover:bg-white/20 cursor-pointer"
              >
                <img src={fullStackImg} alt="Full Stack Development" loading="lazy" className="w-32 h-32 object-cover rounded-xl mb-4 shadow-lg border-4 border-orange-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-0">Full Stack Development</h3>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Agents Section - Compact */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Future Landscape of Agentic SDLC
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-8"
          >
            All our in-house agents - Project Managers to orchestrate multiple agents and integrate into SDLC Journey with enhanced timeline and quality of work.
          </motion.p>

          {/* SDLC Process Flow - Compact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            {/* Process Flow Header */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    <span className="text-sm">📋</span>
                  </div>
                  <span className="text-base font-semibold text-gray-900">Define</span>
                </div>
                <div className="w-6 h-0.5 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    <span className="text-sm">🎨</span>
                  </div>
                  <span className="text-base font-semibold text-gray-900">Design</span>
                </div>
                <div className="w-6 h-0.5 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    <span className="text-sm">💻</span>
                  </div>
                  <span className="text-base font-semibold text-gray-900">Develop</span>
                </div>
                <div className="w-6 h-0.5 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    <span className="text-sm">🧪</span>
                  </div>
                  <span className="text-base font-semibold text-gray-900">Test</span>
                </div>
                <div className="w-6 h-0.5 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    <span className="text-sm">🚀</span>
                  </div>
                  <span className="text-base font-semibold text-gray-900">Deploy</span>
                </div>
              </div>
            </div>

            {/* SDLC Phases Grid - Compact */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
              {/* Define Phase */}
              <div className="bg-white rounded-lg shadow-md p-3 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-1">
                    <span className="text-xs">📋</span>
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 mb-1">Define</h3>
                  <p className="text-xs text-gray-600 mb-2">Requirements & Planning</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-start space-x-1 p-1 bg-blue-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Draft Business Requirement Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-blue-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">User Story Creation Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-blue-50 rounded text-xs">
                    <span className="text-xs">📝</span>
                    <span className="text-xs text-gray-700">Requirements Analysis</span>
                  </div>
                </div>
              </div>

              {/* Design Phase */}
              <div className="bg-white rounded-lg shadow-md p-3 border-l-4 border-green-500 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-3">
                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-1">
                    <span className="text-xs">🎨</span>
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 mb-1">Design</h3>
                  <p className="text-xs text-gray-600 mb-2">Architecture & UI/UX</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-start space-x-1 p-1 bg-green-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">UI/UX Design Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-green-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Architecture Design Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-green-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Impact Analysis Agent</span>
                  </div>
                </div>
              </div>

              {/* Develop Phase */}
              <div className="bg-white rounded-lg shadow-md p-3 border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-3">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-1">
                    <span className="text-xs">💻</span>
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 mb-1">Develop</h3>
                  <p className="text-xs text-gray-600 mb-2">Coding & Implementation</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-start space-x-1 p-1 bg-purple-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Coding Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-purple-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Unit Test Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-purple-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Code Review Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-purple-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Code Scanning Agent</span>
                  </div>
                </div>
              </div>

              {/* Test Phase */}
              <div className="bg-white rounded-lg shadow-md p-3 border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-3">
                  <div className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-1">
                    <span className="text-xs">🧪</span>
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 mb-1">Test</h3>
                  <p className="text-xs text-gray-600 mb-2">Quality Assurance</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-start space-x-1 p-1 bg-orange-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Test Case Creation Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-orange-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Test Script Generation Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-orange-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Test Execution Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-orange-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Test Report Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-orange-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">LLM Test Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-orange-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Swagger Test Case Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-orange-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">API Test Agent</span>
                  </div>
                </div>
              </div>

              {/* Deploy Phase */}
              <div className="bg-white rounded-lg shadow-md p-3 border-l-4 border-red-500 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-3">
                  <div className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-1">
                    <span className="text-xs">🚀</span>
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 mb-1">Deploy</h3>
                  <p className="text-xs text-gray-600 mb-2">Production & Release</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-start space-x-1 p-1 bg-red-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Deployment Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-red-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Change Request Agent</span>
                  </div>
                  <div className="flex items-start space-x-1 p-1 bg-red-50 rounded text-xs">
                    <span className="text-xs">🤖</span>
                    <span className="text-xs text-gray-700">Monitoring Agent</span>
                  </div>
                </div>
              </div>
            </div>
              </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
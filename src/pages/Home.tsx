import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Users, Trophy, Zap, ChevronDown } from 'lucide-react';
import aiMLImg from '../assets/AI&ML.png';
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

  const features = [
    {
      icon: Code,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest technologies and frameworks in real-world projects.'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from industry professionals with years of experience.'
    },
    {
      icon: Trophy,
      title: 'Portfolio Projects',
      description: 'Build impressive projects that showcase your skills to employers.'
    },
    {
      icon: Zap,
      title: 'Fast-Track Career',
      description: 'Accelerate your career growth with our proven methodology.'
    }
  ];

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

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              About Coastal Seven
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We are a forward-thinking technology company dedicated to bridging the gap between 
              academic learning and industry requirements. Our comprehensive internship programs 
              and live project experiences prepare students for successful careers in technology.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-logo-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Technologies We Use
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our internship programs immerse you in the most in-demand and futuristic technologies, preparing you for tomorrow's tech landscape.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* AI & ML */}
            <Link to="/technologies/ai-ml">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-between min-h-[24rem] group transition-all duration-300 hover:bg-white/20 cursor-pointer"
              >
                <img src={aiMLImg} alt="AI & ML" loading="lazy" className="w-40 h-40 object-cover rounded-2xl mb-6 shadow-lg border-4 border-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold text-white mb-0">AI & ML</h3>
              </motion.div>
            </Link>
            {/* Quantum Computing */}
            <Link to="/technologies/quantum-computing">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-between min-h-[24rem] group transition-all duration-300 hover:bg-white/20 cursor-pointer"
              >
                <img src={quantumImg} alt="Quantum Computing" loading="lazy" className="w-40 h-40 object-cover rounded-2xl mb-6 shadow-lg border-4 border-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold text-white mb-0">Quantum Computing</h3>
              </motion.div>
            </Link>
            {/* Automation Testing */}
            <Link to="/technologies/automation-testing">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-between min-h-[24rem] group transition-all duration-300 hover:bg-white/20 cursor-pointer"
              >
                <img src={automationImg} alt="Automation Testing" loading="lazy" className="w-40 h-40 object-cover rounded-2xl mb-6 shadow-lg border-4 border-green-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold text-white mb-0">Automation Testing</h3>
              </motion.div>
            </Link>
            {/* Full Stack */}
            <Link to="/technologies/full-stack-development">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-between min-h-[24rem] group transition-all duration-300 hover:bg-white/20 cursor-pointer"
              >
                <img src={fullStackImg} alt="Full Stack Development" loading="lazy" className="w-40 h-40 object-cover rounded-2xl mb-6 shadow-lg border-4 border-orange-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold text-white mb-0">Full Stack Development</h3>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-logo-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who have launched their tech careers with us.
            </p>
            <Link
              to="/programs"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <span>View Our Programs</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
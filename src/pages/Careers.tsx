import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Users, Award, Briefcase } from 'lucide-react';

const Careers = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-logo-teal text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Careers at Coastal Seven
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-white mb-8"
          >
            We're always looking for passionate talent. To apply, simply email your CV or resume to{' '}
            <a href="mailto:careers@coastalseven.com" className="underline text-logo-teal hover:text-accent">
              careers@coastalseven.com
            </a>{' '}
            and we'll get back to you soon.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            href="mailto:careers@coastalseven.com"
            className="inline-flex items-center bg-accent hover:bg-logo-teal text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 mb-10"
          >
            <Mail className="h-6 w-6 mr-2" />
            Send Your CV
          </motion.a>
        </div>
      </section>

      {/* Career Excellence Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-logo-teal">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Career Excellence
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join our team of experts working with cutting-edge AI technologies. 
              Discover rewarding career opportunities at Coastal Seven.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Talent Hub
              </h3>
              <p className="text-lg text-white/90 mb-8">
                Access our comprehensive professional platform to explore career opportunities 
                in AI, software development, testing, and emerging technologies.
              </p>
              <div className="flex justify-center">
                <a
                  href="http://13.204.47.60/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-transparent hover:border-white"
                >
                  <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Join Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture & Values Section */}
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
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that values innovation, collaboration, and making a real impact in the world of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 flex flex-col items-start"
            >
              <Users className="h-8 w-8 text-logo-teal mb-2" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Our Culture</h3>
              <p className="text-gray-600">We foster a collaborative, innovative, and inclusive environment where every voice is valued. At Coastal Seven, you'll work with passionate professionals dedicated to making a real impact in tech education and AI for good.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-secondary/10 to-logo-teal/10 rounded-xl p-6 flex flex-col items-start"
            >
              <Award className="h-8 w-8 text-accent mb-2" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Growth & Learning</h3>
              <p className="text-gray-600">We believe in continuous learning and provide opportunities for professional development, mentorship, and hands-on experience with cutting-edge technologies.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-br from-logo-teal/10 to-primary/10 rounded-xl p-6 flex flex-col items-start"
            >
              <Briefcase className="h-8 w-8 text-secondary mb-2" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Meaningful Work</h3>
              <p className="text-gray-600">Join us to work on projects that matter—empowering the next generation, driving innovation, and solving real-world challenges with technology and empathy.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 flex flex-col items-start"
            >
              <Users className="h-8 w-8 text-accent mb-2" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Diversity & Inclusion</h3>
              <p className="text-gray-600">We celebrate diversity and are committed to building a team that represents a variety of backgrounds, perspectives, and skills.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Careers;
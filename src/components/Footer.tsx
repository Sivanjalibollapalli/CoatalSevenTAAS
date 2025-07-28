import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Waves, Mail, Phone, MapPin, Facebook, Youtube, Linkedin, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: "Let's Connect", path: '/connect' },
  ];

  const technologies = [
    { name: 'Full-Stack Development', path: '/technologies/full-stack-development' },
    { name: 'Quantum Computing', path: '/technologies/quantum-computing' },
    { name: 'AI & ML', path: '/technologies/ai-ml' },
    { name: 'Automation Testing', path: '/technologies/automation-testing' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61574214990654', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@CoastalSevenConsulting', label: 'YouTube' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/coastal-seven-consulting', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/coastal_seven_consulting/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              {/* Apply filters so the logo displays in solid white */}
              <img
                src={logo}
                alt="Coastal Seven Logo"
                className="h-14 object-contain filter brightness-0 invert"
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Technologies</h3>
            <ul className="space-y-2">
              {technologies.map((tech) => (
                <li key={tech.name}>
                  <Link
                    to={tech.path}
                    className="font-bold text-white hover:text-teal-300 transition-colors duration-200"
                  >
                    {tech.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:bg-teal-400 transition-colors duration-200 flex items-center justify-center"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-teal-800" />
              </a>
            ))}
          </div>
          <p className="text-teal-100 text-sm mt-4 text-center w-full">
            🚀 Looking to launch your tech career? Check out our internship program and join a team that cares about your growth!
          </p>
          <p className="text-teal-200 text-sm">
            © 2025 Coastal Seven. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
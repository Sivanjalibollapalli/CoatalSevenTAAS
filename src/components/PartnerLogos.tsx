import React from 'react';
import { motion } from 'framer-motion';

const PartnerLogos: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
      {/* Capgemini Logo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="w-32 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-3 shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg"></div>
          <div className="relative z-10 text-center">
            <div className="text-white font-bold text-lg">CAPGEMINI</div>
            <div className="text-gray-300 text-xs">CONSULTING</div>
          </div>
        </div>
        <h4 className="font-semibold text-gray-900 text-base">Capgemini</h4>
      </motion.div>
      
      {/* IBM Logo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center mb-3 shadow-md border border-gray-200">
          <div className="text-center">
            <div className="text-blue-600 font-bold text-2xl tracking-wider">IBM</div>
            <div className="text-gray-500 text-xs mt-1">TECHNOLOGY</div>
          </div>
        </div>
        <h4 className="font-semibold text-gray-900 text-base">IBM</h4>
      </motion.div>
      
      {/* Infosys Logo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center mb-3 shadow-md border border-gray-200">
          <div className="text-center">
            <div className="text-blue-600 font-bold text-lg">Infosys</div>
            <div className="text-gray-500 text-xs mt-1">DIGITAL</div>
          </div>
        </div>
        <h4 className="font-semibold text-gray-900 text-base">Infosys</h4>
      </motion.div>
      
      {/* HSBC Logo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="w-32 h-20 bg-black rounded-lg flex items-center justify-center mb-3 shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-black rounded-lg"></div>
          <div className="relative z-10 text-center">
            <div className="text-white font-bold text-2xl">HSBC</div>
            <div className="text-gray-300 text-xs">BANKING</div>
          </div>
        </div>
        <h4 className="font-semibold text-gray-900 text-base">HSBC</h4>
      </motion.div>
      
      {/* Cognizant Logo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center mb-3 shadow-md border border-gray-200">
          <div className="text-center">
            <div className="text-blue-800 font-bold text-sm">cognizant</div>
            <div className="text-gray-500 text-xs mt-1">SOLUTIONS</div>
          </div>
        </div>
        <h4 className="font-semibold text-gray-900 text-base">Cognizant</h4>
      </motion.div>
    </div>
  );
};

export default PartnerLogos; 
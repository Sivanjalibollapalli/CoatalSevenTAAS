import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const alumni = [
  { name: 'Aarav Patel', role: 'Full-Stack Developer @ IBM', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Meera Sharma', role: 'QA Engineer @ Capgemini', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Rahul Verma', role: 'DevOps Associate @ HSBC', img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Sneha Rao', role: 'Automation Tester @ Infosys', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Kunal Das', role: 'Performance Engineer @ Accenture', img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Divya Singh', role: 'AI Test Advisor @ IBM', img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Vikram Iyer', role: 'Site Reliability Engineer @ Google', img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Riya Kapoor', role: 'Product Designer @ Microsoft', img: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const ImpactStories: React.FC = () => {
  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-100">
      {/* Hero */}
      <section className="text-center py-24 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Career Impact Chronicles
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
          Explore how Coastal Seven graduates are shaping the tech landscape across global enterprises.
        </p>
      </section>

      {/* Alumni Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {alumni.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="relative rounded-3xl shadow-xl overflow-hidden group"
            >
              <img src={person.img} alt={person.name} className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg font-bold">{person.name}</h3>
                <p className="text-sm opacity-90">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/programs" className="inline-flex items-center text-blue-700 hover:underline font-medium">
            <ArrowLeft className="h-5 w-5 mr-1" /> Back to Programs
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ImpactStories; 
import React from 'react';
import { Mail, Users, Award, Briefcase } from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary via-secondary to-logo-teal text-white px-4">
      <div className="max-w-2xl w-full text-center py-20">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg text-white">Careers at Coastal Seven</h1>
        <p className="text-xl mb-8 text-white">We’re always looking for passionate talent. To apply, simply email your CV or resume to <a href="mailto:careers@coastalseven.com" className="underline text-logo-teal hover:text-accent">careers@coastalseven.com</a> and we’ll get back to you soon.</p>
        <a href="mailto:careers@coastalseven.com" className="inline-flex items-center bg-accent hover:bg-logo-teal text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 mb-10">
          <Mail className="h-6 w-6 mr-2" />
          Send Your CV
        </a>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/20 rounded-xl p-6 flex flex-col items-start">
            <Users className="h-8 w-8 text-logo-teal mb-2" />
            <h3 className="text-xl font-bold mb-2 text-white">Our Culture</h3>
            <p className="text-white">We foster a collaborative, innovative, and inclusive environment where every voice is valued. At Coastal Seven, you’ll work with passionate professionals dedicated to making a real impact in tech education and AI for good.</p>
          </div>
          <div className="bg-white/20 rounded-xl p-6 flex flex-col items-start">
            <Award className="h-8 w-8 text-accent mb-2" />
            <h3 className="text-xl font-bold mb-2 text-white">Growth & Learning</h3>
            <p className="text-white">We believe in continuous learning and provide opportunities for professional development, mentorship, and hands-on experience with cutting-edge technologies.</p>
          </div>
          <div className="bg-white/20 rounded-xl p-6 flex flex-col items-start">
            <Briefcase className="h-8 w-8 text-secondary mb-2" />
            <h3 className="text-xl font-bold mb-2 text-white">Meaningful Work</h3>
            <p className="text-white">Join us to work on projects that matter—empowering the next generation, driving innovation, and solving real-world challenges with technology and empathy.</p>
          </div>
          <div className="bg-white/20 rounded-xl p-6 flex flex-col items-start">
            <Users className="h-8 w-8 text-accent mb-2" />
            <h3 className="text-xl font-bold mb-2 text-white">Diversity & Inclusion</h3>
            <p className="text-white">We celebrate diversity and are committed to building a team that represents a variety of backgrounds, perspectives, and skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
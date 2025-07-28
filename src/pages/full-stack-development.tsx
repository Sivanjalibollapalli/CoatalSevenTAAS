import React from 'react';
import fullStackImg from '../assets/Full stack.png';

const FullStackDevelopment = () => (
  <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-logo-teal py-16 px-4 flex flex-col items-center">
    <img src={fullStackImg} alt="Full Stack Development" className="w-64 h-64 object-cover rounded-2xl shadow-2xl mb-8 border-4 border-orange-200" />
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg text-center">Full Stack Development</h1>
    <div className="max-w-2xl bg-white/80 rounded-xl p-8 shadow-xl text-gray-900 text-lg">
      <h2 className="text-2xl font-semibold mb-4 text-orange-800">What is Full Stack Development?</h2>
      <p className="mb-4">Full stack development means building both the front-end (what users see) and back-end (the server, database, and logic) of web and mobile applications. Full stack developers are versatile and can work on all parts of a project.</p>
      <h2 className="text-xl font-semibold mb-2 text-orange-700">Why is it important?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Full stack skills are in high demand for startups and big companies alike</li>
        <li>Lets you build complete products from scratch</li>
        <li>Helps you understand the full software development lifecycle</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 text-orange-700">Skills & Tools for Interns</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Frontend: React, Angular, HTML, CSS, JavaScript</li>
        <li>Backend: Node.js, Express, Python, Java</li>
        <li>Databases: SQL, MongoDB, Firebase</li>
        <li>APIs, REST, GraphQL, cloud deployment</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 text-orange-700">Latest Trends (2024)</h2>
      <ul className="list-disc pl-6">
        <li>Serverless and cloud-native development</li>
        <li>JAMstack and headless CMS</li>
        <li>Real-time apps with WebSockets</li>
        <li>DevOps and CI/CD for full stack teams</li>
      </ul>
    </div>
  </div>
);

export default FullStackDevelopment; 
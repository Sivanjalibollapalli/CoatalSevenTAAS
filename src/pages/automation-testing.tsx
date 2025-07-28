import React from 'react';
import automationImg from '../assets/Automation testing.png';

const AutomationTesting = () => (
  <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-logo-teal py-16 px-4 flex flex-col items-center">
    <img src={automationImg} alt="Automation Testing" className="w-64 h-64 object-cover rounded-2xl shadow-2xl mb-8 border-4 border-green-200" />
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg text-center">Automation Testing</h1>
    <div className="max-w-2xl bg-white/80 rounded-xl p-8 shadow-xl text-gray-900 text-lg">
      <h2 className="text-2xl font-semibold mb-4 text-green-800">What is Automation Testing?</h2>
      <p className="mb-4">Automation testing uses software tools to automatically test applications, ensuring they work as expected. It speeds up development, improves quality, and helps catch bugs early.</p>
      <h2 className="text-xl font-semibold mb-2 text-green-700">Why is it important?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Enables rapid, reliable software releases (CI/CD)</li>
        <li>Reduces manual effort and human error</li>
        <li>Essential for modern DevOps and agile teams</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 text-green-700">Skills & Tools for Interns</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Automation frameworks: Selenium, Cypress, Playwright</li>
        <li>Programming: JavaScript, Python, Java</li>
        <li>CI/CD tools: Jenkins, GitHub Actions</li>
        <li>Writing and maintaining test scripts</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 text-green-700">Latest Trends (2024)</h2>
      <ul className="list-disc pl-6">
        <li>AI-powered test automation</li>
        <li>Test automation for mobile and cloud apps</li>
        <li>Shift-left testing and continuous quality</li>
        <li>Low-code/no-code automation tools</li>
      </ul>
    </div>
  </div>
);

export default AutomationTesting; 
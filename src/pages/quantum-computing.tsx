import React from 'react';
import quantumImg from '../assets/Quantum computing.png';

const QuantumComputing = () => (
  <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-logo-teal py-16 px-4 flex flex-col items-center">
    <img src={quantumImg} alt="Quantum Computing" className="w-64 h-64 object-cover rounded-2xl shadow-2xl mb-8 border-4 border-purple-200" />
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg text-center">Quantum Computing</h1>
    <div className="max-w-2xl bg-white/80 rounded-xl p-8 shadow-xl text-gray-900 text-lg">
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">What is Quantum Computing?</h2>
      <p className="mb-4">Quantum computing uses the principles of quantum mechanics to process information in fundamentally new ways. Unlike classical computers, which use bits (0 or 1), quantum computers use qubits that can be both at once, enabling massive parallelism and new algorithms.</p>
      <h2 className="text-xl font-semibold mb-2 text-purple-700">Why is it important?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Quantum computers can solve problems that are impossible for classical computers, like simulating molecules for drug discovery or optimizing complex systems.</li>
        <li>They are at the frontier of cybersecurity, cryptography, and advanced AI.</li>
        <li>Major tech companies (IBM, Google, Microsoft) are investing heavily in quantum research.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 text-purple-700">Skills & Tools for Interns</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Quantum programming: Qiskit (Python), Q# (Microsoft), Cirq (Google)</li>
        <li>Understanding quantum gates, qubits, and superposition</li>
        <li>Basic linear algebra and probability</li>
        <li>Hands-on with quantum simulators and cloud quantum computers</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 text-purple-700">Latest Trends (2024)</h2>
      <ul className="list-disc pl-6">
        <li>Quantum advantage in chemistry and logistics</li>
        <li>Hybrid quantum-classical algorithms</li>
        <li>Quantum machine learning</li>
        <li>Open-source quantum development platforms</li>
      </ul>
    </div>
  </div>
);

export default QuantumComputing; 
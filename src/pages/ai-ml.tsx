import React from 'react';
import aiMLImg from '../assets/AI&ML.png';

const AIML = () => (
  <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-logo-teal py-16 px-4 flex flex-col items-center">
    <img src={aiMLImg} alt="AI & ML" className="w-64 h-64 object-cover rounded-2xl shadow-2xl mb-8 border-4 border-blue-200" />
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg text-center">AI & Machine Learning</h1>
    <div className="max-w-2xl bg-white/80 rounded-xl p-8 shadow-xl text-gray-900 text-lg">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">What is AI & ML?</h2>
      <p className="mb-4">Artificial Intelligence (AI) and Machine Learning (ML) are transforming every industry, from healthcare to finance to entertainment. AI enables computers to mimic human intelligence, while ML is a subset of AI that allows systems to learn from data and improve over time without being explicitly programmed.</p>
      <h2 className="text-xl font-semibold mb-2 text-blue-700">Why is it important?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>AI & ML power technologies like chatbots, recommendation engines, self-driving cars, and more.</li>
        <li>They help businesses make smarter decisions using data.</li>
        <li>AI is at the heart of the latest tech trends: generative AI, computer vision, natural language processing, and robotics.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 text-blue-700">Skills & Tools for Interns</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Programming: Python, R, TensorFlow, PyTorch</li>
        <li>Data Science: Pandas, NumPy, Scikit-learn</li>
        <li>Deep Learning: Neural networks, CNNs, LSTMs</li>
        <li>Real-world projects: AI-powered apps, data analysis, automation</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2 text-blue-700">Latest Trends (2024)</h2>
      <ul className="list-disc pl-6">
        <li>Generative AI (like ChatGPT, DALL-E, Gemini)</li>
        <li>AI for edge devices (AI on smartphones, IoT)</li>
        <li>Responsible & ethical AI development</li>
        <li>AI in healthcare, finance, and creative industries</li>
      </ul>
    </div>
  </div>
);

export default AIML; 
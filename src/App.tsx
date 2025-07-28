import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Programs from './pages/Programs';
import About from './pages/About';
import Careers from './pages/Careers';
import Connect from './pages/Connect';
const AIML = lazy(() => import('./pages/ai-ml'));
const QuantumComputing = lazy(() => import('./pages/quantum-computing'));
const AutomationTesting = lazy(() => import('./pages/automation-testing'));
const FullStackDevelopment = lazy(() => import('./pages/full-stack-development'));
const ImpactStories = lazy(() => import('./pages/ImpactStories'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/stories" element={<Suspense fallback={<div>Loading...</div>}><ImpactStories /></Suspense>} />
            <Route path="/technologies/ai-ml" element={<Suspense fallback={<div>Loading...</div>}><AIML /></Suspense>} />
            <Route path="/technologies/quantum-computing" element={<Suspense fallback={<div>Loading...</div>}><QuantumComputing /></Suspense>} />
            <Route path="/technologies/automation-testing" element={<Suspense fallback={<div>Loading...</div>}><AutomationTesting /></Suspense>} />
            <Route path="/technologies/full-stack-development" element={<Suspense fallback={<div>Loading...</div>}><FullStackDevelopment /></Suspense>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
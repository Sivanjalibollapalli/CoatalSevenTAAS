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
import AIAgents from './pages/AIAgents';
const Testaraptor = lazy(() => import('./pages/agents/Testaraptor'));
const Scriptodon = lazy(() => import('./pages/agents/Scriptodon'));
const BugzillaRex = lazy(() => import('./pages/agents/BugzillaRex'));
const Swaggosaur = lazy(() => import('./pages/agents/Swaggosaur'));
const Restaceratops = lazy(() => import('./pages/agents/Restaceratops'));
const Loadosaurus = lazy(() => import('./pages/agents/Loadosaurus'));
const Thinkodactyl = lazy(() => import('./pages/agents/Thinkodactyl'));
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
            <Route path="/agents" element={<AIAgents />} />
            <Route path="/agents/testaraptor" element={<Suspense fallback={<div>Loading...</div>}><Testaraptor /></Suspense>} />
            <Route path="/agents/scriptodon" element={<Suspense fallback={<div>Loading...</div>}><Scriptodon /></Suspense>} />
            <Route path="/agents/bugzilla-rex" element={<Suspense fallback={<div>Loading...</div>}><BugzillaRex /></Suspense>} />
            <Route path="/agents/swaggosaur" element={<Suspense fallback={<div>Loading...</div>}><Swaggosaur /></Suspense>} />
            <Route path="/agents/restaceratops" element={<Suspense fallback={<div>Loading...</div>}><Restaceratops /></Suspense>} />
            <Route path="/agents/loadosaurus" element={<Suspense fallback={<div>Loading...</div>}><Loadosaurus /></Suspense>} />
            <Route path="/agents/thinkodactyl" element={<Suspense fallback={<div>Loading...</div>}><Thinkodactyl /></Suspense>} />
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
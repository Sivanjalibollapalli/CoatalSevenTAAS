import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Users, Trophy, Zap, ChevronDown, Clock, Target, Award, CheckCircle, Star, Users2, Calendar, BookOpen, Lightbulb, Rocket, TrendingUp, Globe, Shield, BarChart3, PieChart } from 'lucide-react';
import Img1 from '../../1.png';
import Img2 from '../../2.png';
import Img3 from '../../3.png';

// Import partner logos
import HSBClogo from '../assets/partner-logos/hsbc-logo.png';
import Infosyslogo from '../assets/partner-logos/infosys-logo.png';
import IBMlogo from '../assets/partner-logos/ibm-logo.png';
import CapgeminiLogo from '../assets/partner-logos/capgemini-logo.png';
import AccentureLogo from '../assets/partner-logos/accenture-logo.png';

const stats = [
  {
    title: '75% of companies',
    description: 'struggle to find qualified tech talent (World Economic Forum).',
  },
  {
    title: '64% of IT projects',
    description: 'are hindered by talent gaps (Gartner).',
  },
  {
    title: '1 in 4 engineering grads',
    description: 'in India are employable in software roles (Aspiring Minds, 2023).',
  },
];

// Insight cards data (image + text shown on hover)
const insights = [
  {
    img: Img1,
    kicker: 'Strategic Partnership',
    title: 'Coastal Seven & SotaTek Unite',
    description:
      'A global alliance accelerating the deployment of Agentic AI solutions worldwide by combining deep domain expertise with cutting-edge technology delivery.',
  },
  {
    img: Img2,
    kicker: 'AI Agents Are Breaking Out',
    title: 'Disrupting Enterprise Operations',
    description:
      'Autonomous AI agents are redefining how businesses operate—streamlining workflows, elevating decision-making, and unlocking new sources of value.',
  },
  {
    img: Img3,
    kicker: 'Fashion Meets Function',
    title: 'Rise of AI-Powered Wearables',
    description:
      'From smart jewellery to personalised health companions, AI-enabled wearables are set to transform style, wellness, and human-tech interaction.',
  },
];

const leaderExpectations = [
  'Hire for expertise that complements team\'s existing skillset.',
  'Hire with consideration for both diversity and cultural fit.',
  'Provide support to accelerate cultural assimilation.',
  'Set team member up for success.',
  'Lay the groundwork for team member engagement and retention.'
];

const teamMemberExperience = [
  'Motivated, welcomed and supported.',
  'Heard and understood, opinions and potential valued.',
  'Part of the team and assimilated into the culture quickly.',
  'Cared for as a person.',
  'Trusted and autonomous.'
];

const internshipJourney = [
  '6-Week Immersive Internship Experience',
  'Work on Real Full-Stack Projects',
  'Be Part of Real Teams',
  'Continuous Evaluation & Mentoring'
];

const whatTheyLearn = [
  'Frontend Development (React, Angular, etc.)',
  'Backend Development (Python, Node.js, Java)',
  'DevOps & CI/CD',
  'API Design & Integration',
  'Database Design',
  'Technical Skills',
  'Teamwork & Communication',
  'Ownership & Accountability',
  'Learning & Growth',
  'Business Thinking'
];

const evaluation = [
  'Real-world Hackathon to simulate product release pressure.',
  'Offers to top performers based on overall performance.',
  'Evaluation on technical, teamwork, growth, business, and ownership.'
];

const programOutcome = [
  {
    title: 'Tech-Stack Mastery',
    description: 'Hands-on proficiency across modern frontend, backend, DevOps and cloud tooling.'
  },
  {
    title: 'Agent Enablement',
    description: 'Capability to configure and run all seven AI testing agents in real projects.'
  },
  {
    title: 'Real-Product Exposure',
    description: 'Experience shipping features and fixes to production within Agile squads.'
  },
  {
    title: 'Career Acceleration',
    description: 'Clear two-year growth roadmap with vendor placements and role rotations.'
  },
  {
    title: 'Rewards & Bonuses',
    description: 'Performance-linked hikes, certification sponsorships and quarterly bonuses.'
  },
  {
    title: 'Career Placement',
    description: 'Direct placement opportunities with leading tech companies through strategic partnerships.'
  },
];

const Section: React.FC<{ title: string; children: React.ReactNode; bg?: string; center?: boolean }> = ({ title, children, bg = 'bg-white', center = false }) => (
  <section className={`${bg} py-16 w-full`}>
    <div className={`max-w-5xl mx-auto px-4 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">{title}</h2>
      {children}
    </div>
  </section>
);

interface CardListProps {
  items: (string | { title: string; description: string })[];
  icon?: React.ReactNode;
  columns?: number;
}

const CardList: React.FC<CardListProps> = ({ items, icon, columns = 2 }) => (
  <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
    {items.map((item, idx) => (
      <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }} className="bg-blue-50 rounded-xl p-6 shadow text-left">
        {typeof item === 'string' ? (
          <div className="text-lg text-gray-700">{item}</div>
        ) : (
          <>
            <div className="text-xl font-semibold text-blue-700 mb-2">{item.title}</div>
            <div className="text-gray-700 text-lg">{item.description}</div>
          </>
        )}
      </motion.div>
    ))}
  </div>
);

const Programs = () => {
  return (
    <motion.div initial="initial" animate="animate" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-logo-teal text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Explore Our Internship Program
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-xl md:text-2xl text-white mb-8">
            Kickstart your tech career with hands-on experience, real projects, and mentorship. We help you grow into the tech professional you want to be!
          </motion.p>
        </div>
      </section>

      {/* Why Choose Our Program Section */}
      <Section title="Why Choose Our Internship?" bg="bg-white" center>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }} className="bg-blue-50 rounded-xl p-8 shadow text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">{stat.title}</div>
              <div className="text-gray-700 text-lg">{stat.description}</div>
              </motion.div>
            ))}
        </div>

        {/* 6-Week Program Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">6-Week Intensive Program</h3>
          <p className="text-lg text-gray-700 text-center mb-6">
            Our revolutionary approach transforms aspiring professionals into industry-ready experts through intensive training, 
            hands-on projects, and performance-driven selection. We provide you with the skills, experience, and direct 
            placement opportunities needed to succeed in today's competitive tech landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900">Master Technologies</h4>
              <p className="text-sm text-gray-600">Learn AI/ML, Quantum Computing, Full-Stack Development</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900">Real Projects</h4>
              <p className="text-sm text-gray-600">Work on actual client projects with real teams</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900">Hackathons</h4>
              <p className="text-sm text-gray-600">Compete in intensive coding competitions</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900">Direct Placement</h4>
              <p className="text-sm text-gray-600">Secure opportunities with leading companies</p>
            </div>
          </div>

          {/* Performance-Based Progression */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Weeks 1-2 */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <span className="text-sm font-bold">1-2</span>
                </div>
                <h5 className="font-semibold text-gray-900">Foundation Phase</h5>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Assigned Tasks Based on Performance:</strong>
              </p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Initial skill assessment and evaluation</li>
                <li>• Core technology fundamentals training</li>
                <li>• Performance-based task assignments</li>
                <li>• Introduction to AI agents</li>
              </ul>
            </div>

            {/* Weeks 3-4 */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <span className="text-sm font-bold">3-4</span>
                </div>
                <h5 className="font-semibold text-gray-900">Development Phase</h5>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Live Projects Based on Performance:</strong>
              </p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Live project assignments</li>
                <li>• Team collaboration experience</li>
                <li>• Advanced AI agent training</li>
                <li>• Performance-driven project selection</li>
              </ul>
            </div>

            {/* Weeks 5-6 */}
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <span className="text-sm font-bold">5-6</span>
                </div>
                <h5 className="font-semibold text-gray-900">Excellence Phase</h5>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Advanced Challenges Based on Performance:</strong>
              </p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Competitive hackathons</li>
                <li>• Comprehensive viva assessments</li>
                <li>• Direct placement opportunities</li>
                <li>• Performance-based final evaluation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Partnership Section */}
      <Section title="Partnership" bg="bg-gradient-to-r from-gray-50 to-gray-100" center>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 max-w-3xl mx-auto mb-8"
        >
          Strategic partnerships with leading companies to provide direct placement opportunities.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* HSBC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center"
          >
            <div className="w-48 h-32 mx-auto flex items-center justify-center">
              <img src={HSBClogo} alt="HSBC" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          {/* Infosys */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <div className="w-48 h-32 mx-auto flex items-center justify-center">
              <img src={Infosyslogo} alt="Infosys" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          {/* IBM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center"
          >
            <div className="w-48 h-32 mx-auto flex items-center justify-center">
              <img src={IBMlogo} alt="IBM" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          {/* Capgemini */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <div className="w-48 h-32 mx-auto flex items-center justify-center">
              <img src={CapgeminiLogo} alt="Capgemini" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          {/* Accenture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            <div className="w-48 h-32 mx-auto flex items-center justify-center">
              <img src={AccentureLogo} alt="Accenture" className="w-full h-full object-contain" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Team Member Experience, Career Placements, Internship Journey, Leadership Expectations */}
      <Section title="Program Experience" bg="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Team Member Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-logo-teal/10 to-logo-teal/20 rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-logo-teal mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Team Member Experience</h3>
            </div>
            <div className="space-y-4">
              {teamMemberExperience.map((experience, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-logo-teal mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{experience}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Career Placements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-logo-teal/10 to-logo-teal/20 rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-logo-teal mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Career Placements</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Direct Placement Rate</span>
                <span className="text-2xl font-bold text-logo-teal"></span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Top Companies</span>
                <span className="text-2xl font-bold text-logo-teal"></span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Salary Growth</span>
                <span className="text-2xl font-bold text-logo-teal"></span>
              </div>
            </div>
          </motion.div>

          {/* Internship Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-logo-teal/10 to-logo-teal/20 rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <Calendar className="h-8 w-8 text-logo-teal mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Internship Journey</h3>
            </div>
            <div className="space-y-4">
              {internshipJourney.map((journey, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-8 h-8 bg-logo-teal text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                    {idx + 1}
                  </div>
                  <span className="text-gray-700">{journey}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Expectations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-logo-teal/10 to-logo-teal/20 rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-logo-teal mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Leadership Expectations</h3>
            </div>
            <div className="space-y-4">
              {leaderExpectations.map((expectation, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-logo-teal mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{expectation}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Program Outcomes Section */}
      <Section title="Program Outcomes" bg="bg-gradient-to-r from-sky-50 via-emerald-50 to-lime-50" center>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Graduates leave the internship not just job-ready but future-ready—armed with deep technical expertise, autonomous testing agents, and a proven delivery mindset.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tech-Stack Mastery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-2">Tech-Stack Mastery</h4>
              <p className="text-sm text-gray-600">Hands-on proficiency across modern frontend, backend, DevOps and cloud tooling.</p>
            </div>
          </motion.div>

          {/* Agent Enablement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🤖</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-2">Agent Enablement</h4>
              <p className="text-sm text-gray-600">Capability to configure and run all seven AI testing agents in real projects.</p>
            </div>
          </motion.div>

          {/* Real-Product Exposure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-2">Real-Product Exposure</h4>
              <p className="text-sm text-gray-600">Experience shipping features and fixes to production within Agile squads.</p>
            </div>
          </motion.div>

          {/* Career Acceleration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-2">Career Acceleration</h4>
              <p className="text-sm text-gray-600">Clear two-year growth roadmap with vendor placements and role rotations.</p>
            </div>
          </motion.div>

          {/* Rewards & Bonuses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-2">Rewards & Bonuses</h4>
              <p className="text-sm text-gray-600">Performance-linked hikes, certification sponsorships and quarterly bonuses.</p>
            </div>
          </motion.div>

          {/* Career Placements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="text-center">
              <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-2">Career Placements</h4>
              <p className="text-sm text-gray-600">Direct placement opportunities with leading tech companies through strategic partnerships.</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Latest Insights Section */}
      <Section title="Latest Insights & Trends" bg="bg-logo-teal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={insight.img}
                alt={insight.title}
                className="w-full h-[32rem] md:h-[36rem] object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-sm font-semibold text-white mb-2">
                  {insight.kicker}
                </div>
                <div className="text-xl font-bold text-white mb-2">
                  {insight.title}
                </div>
                <p className="text-white text-sm leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* What They Learn */}
      <Section title="What Interns Learn" bg="bg-gray-50">
        <CardList items={whatTheyLearn} columns={2} />
      </Section>

      {/* Evaluation & Finale */}
      <Section title="Evaluation & Finale" bg="bg-white">
        <CardList items={evaluation} columns={1} />
      </Section>

    </motion.div>
  );
};

export default Programs;
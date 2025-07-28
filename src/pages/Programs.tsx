import React from 'react';
import { motion } from 'framer-motion';
import Img1 from '../../1.png';
import Img2 from '../../2.png';
import Img3 from '../../3.png';

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
  'Hire for expertise that complements team’s existing skillset.',
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
    title: 'Portfolio & Network',
    description: 'Impressive GitHub repos, case studies, and an expanding professional network.'
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

      {/* Why TAAS Section */}
      <Section title="Why Choose Our Internship?" bg="bg-white" center>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }} className="bg-blue-50 rounded-xl p-8 shadow text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">{stat.title}</div>
              <div className="text-gray-700 text-lg">{stat.description}</div>
              </motion.div>
            ))}
        </div>
        {/* Descriptive paragraph removed as per request */}
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

      {/* Leader & Team Member Experience */}
      <Section title="Leader Expectations" bg="bg-white">
        <CardList items={leaderExpectations} columns={1} />
      </Section>
      <Section title="Team Member Experience" bg="bg-gray-50">
        <CardList items={teamMemberExperience} columns={1} />
      </Section>

      {/* Internship Journey */}
      <Section title="Internship Journey" bg="bg-white">
        <CardList items={internshipJourney} columns={1} />
      </Section>

      {/* What They Learn */}
      <Section title="What Interns Learn" bg="bg-gray-50">
        <CardList items={whatTheyLearn} columns={2} />
      </Section>

      {/* Evaluation & Finale */}
      <Section title="Evaluation & Finale" bg="bg-white">
        <CardList items={evaluation} columns={1} />
      </Section>

      {/* Program Outcomes */}
      <Section title="Program Outcomes" bg="bg-gradient-to-r from-sky-50 via-emerald-50 to-lime-50" center>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-12">
          Graduates leave the internship not just job-ready but future-ready—armed with deep technical expertise, autonomous testing agents, and a proven delivery mindset.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programOutcome.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed flex-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>


    </motion.div>
  );
};

export default Programs;
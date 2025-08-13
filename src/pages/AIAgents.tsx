import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AIAgents = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const sdlcPhases = [
    {
      id: 'analyze',
      name: 'Planning & Requirement Analysis',
      description: 'Define project scope, set objectives, and plan resources',
      color: 'bg-white',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-400',
      stage: 'Analyze',
      activities: [
        'ProjectScope Agent - Project Planning',
        'ObjectiveSet Agent - Goal Definition',
        'ResourcePlan Agent - Resource Allocation',
        'TimelineAgent - Schedule Management'
      ]
    },
    {
      id: 'specify',
      name: 'Defining Requirements',
      description: 'Gather and document functional and technical requirements',
      color: 'bg-white',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-400',
      stage: 'Specify',
      activities: [
        'RequirementGatherer Agent - Functional Requirements',
        'TechSpec Agent - Technical Requirements',
        'StakeholderAgent - Requirement Validation',
        'DocumentAgent - Requirement Documentation'
      ]
    },
    {
      id: 'architect',
      name: 'Design',
      description: 'Create high-level and low-level design specifications',
      color: 'bg-white',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-400',
      stage: 'Architect',
      activities: [
        'HLDDesigner Agent - High-Level Design',
        'LLDArchitect Agent - Low-Level Design',
        'SystemArchitect Agent - System Architecture',
        'UIFlowAgent - UI/UX Design'
      ]
    },
    {
      id: 'implement',
      name: 'Development',
      description: 'Build scalable code following coding standards and version control',
      color: 'bg-white',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-400',
      stage: 'Implement',
      activities: [
        'CodeGenerator Agent - Code Development',
        'CodeReviewer Agent - Code Review',
        'VersionControl Agent - Git Management',
        'QualityChecker Agent - Code Quality'
      ]
    },
    {
      id: 'testing',
      name: 'Testing',
      description: 'Comprehensive testing with 7 specialized AI-powered agents',
      color: 'bg-white',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-400',
      stage: 'Validate',
      activities: [
        'Testaraptor - Manual',
        'Restaceratops - API',
        'Scriptodon - Automation',
        'Loadosaurus - Performance',
        'Swaggosaur - Documentation',
        'Thinkodactyl - LLM',
        'Bugzilla'
      ]
    },
    {
      id: 'deploy',
      name: 'Deployment & Maintenance',
      description: 'Release planning, deployment automation, and ongoing maintenance',
      color: 'bg-white',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-400',
      stage: 'Deploy',
      activities: [
        'DeployMaster Agent - Deployment Automation',
        'ReleaseManager Agent - Release Planning',
        'MonitorAgent - System Monitoring',
        'MaintenanceAgent - Ongoing Maintenance'
      ]
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-logo-teal text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
          <motion.h1
                initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
                Agentic Software<br />
                Development Life Cycle
          </motion.h1>
          <motion.p
                initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-white mb-8"
          >
            Revolutionizing software development with AI-powered agents across every phase of the SDLC
          </motion.p>
            </motion.div>

            {/* Right Side - req.png Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-96 h-96 mb-6">
                <img 
                  src="/src/assets/req.png" 
                  alt="Agentic SDLC Process"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/30"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              
              {/* File Upload Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <label 
                  htmlFor="requirement-upload" 
                  className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg px-6 py-3 cursor-pointer hover:bg-white/30 transition-all duration-300 group flex items-center space-x-2"
                >
                  <svg 
                    className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                    />
                  </svg>
                  <span className="text-white font-medium">Upload Requirements</span>
                </label>
                <input 
                  id="requirement-upload" 
                  type="file" 
                  accept=".pdf,.doc,.docx,.txt,.md,.json,.xml,.yaml,.yml"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      console.log('File uploaded:', file.name);
                      // Here you can add logic to handle the uploaded file
                      alert(`File "${file.name}" uploaded successfully!`);
                    }
                  }}
                />

              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

             {/* AI-Enhanced Development Phases Section */}
       <section className="py-20 relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
             className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI-Enhanced Development Phases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each phase is enhanced with intelligent AI agents, creating a more efficient, 
              automated, and intelligent development process.
            </p>
          </motion.div>

                                 {/* SDLC Phases - Beautiful Circular Layout */}
           <div className="flex justify-center items-center py-16">
             <div className="relative w-[800px] h-[800px]">
               {/* Central Highlight */}
               <div className="absolute inset-0 flex items-center justify-center z-10">
                 <div className="bg-gradient-to-br from-primary via-secondary to-logo-teal text-white rounded-full w-40 h-40 flex items-center justify-center shadow-2xl border-8 border-white/30 backdrop-blur-sm relative overflow-hidden">
                   {/* Animated background effect */}
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                   <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                   <div className="text-center relative z-10">
                     <div className="text-2xl font-bold mb-1 drop-shadow-lg">Agentic</div>
                     <div className="text-xl font-bold drop-shadow-lg">SDLC</div>
                     <div className="text-sm opacity-90 mt-1 drop-shadow-lg">Process</div>
                   </div>
                 </div>
               </div>

               {/* Curved Arrows SVG - Above the circles */}
               <svg className="absolute inset-0 w-full h-full z-20" viewBox="0 0 800 800" style={{ pointerEvents: 'none' }}>
                 {/* Curved arrows connecting each phase (excluding the loop from Deploy to Analyze) */}
                 {[0, 1, 2, 3, 4].map((index) => {
                   const startAngle = (index * 60 - 90) * Math.PI / 180;
                   const endAngle = ((index + 1) * 60 - 90) * Math.PI / 180;
                   const radius = 280;
                   
                   // Calculate start and end points on the outer circumference
                   const arrowRadius = radius + 30; // Arrows follow the outer arc
                   
                   const x1 = 400 + arrowRadius * Math.cos(startAngle);
                   const y1 = 400 + arrowRadius * Math.sin(startAngle);
                   const x2 = 400 + arrowRadius * Math.cos(endAngle);
                   const y2 = 400 + arrowRadius * Math.sin(endAngle);
                   
                   // Create arc path that follows the circle's circumference
                   const largeArcFlag = Math.abs(endAngle - startAngle) > Math.PI ? 1 : 0;
                   const sweepFlag = 1; // Clockwise
                   
                   // Arrow colors matching each phase theme
                   const arrowColors = [
                     '#3B82F6', // Blue for Analyze
                     '#10B981', // Green for Specify
                     '#8B5CF6', // Purple for Architect
                     '#F97316', // Orange for Implement
                     '#EF4444', // Red for Validate
                     '#14B8A6'  // Teal for Deploy
                   ];
                   
                   // Calculate arrowhead position and direction
                   const arrowAngle = endAngle - Math.PI / 12; // Slightly before the end point
                   const arrowX = 400 + arrowRadius * Math.cos(arrowAngle);
                   const arrowY = 400 + arrowRadius * Math.sin(arrowAngle);
                   
                   // Calculate arrowhead direction (tangent to the curve)
                   const tangentAngle = arrowAngle + Math.PI / 2;
                   const arrowheadLength = 15;
                   const arrowheadWidth = 8;
                   
                   // Arrowhead points
                   const arrowheadX1 = arrowX - arrowheadLength * Math.cos(tangentAngle - Math.PI / 6);
                   const arrowheadY1 = arrowY - arrowheadLength * Math.sin(tangentAngle - Math.PI / 6);
                   const arrowheadX2 = arrowX - arrowheadLength * Math.cos(tangentAngle + Math.PI / 6);
                   const arrowheadY2 = arrowY - arrowheadLength * Math.sin(tangentAngle + Math.PI / 6);
                   
                   return (
                     <g key={index}>
                       {/* Main curved arrow path */}
                       <path
                         d={`M ${x1} ${y1} A ${arrowRadius} ${arrowRadius} 0 ${largeArcFlag} ${sweepFlag} ${arrowX} ${arrowY}`}
                         fill="none"
                         stroke={arrowColors[index]}
                         strokeWidth="3"
                         strokeLinecap="round"
                         style={{ pointerEvents: 'none' }}
                       />
                       
                       {/* Arrowhead */}
                       <path
                         d={`M ${arrowX} ${arrowY} L ${arrowheadX1} ${arrowheadY1} M ${arrowX} ${arrowY} L ${arrowheadX2} ${arrowheadY2}`}
                         fill="none"
                         stroke={arrowColors[index]}
                         strokeWidth="4"
                         strokeLinecap="round"
                         style={{ pointerEvents: 'none' }}
                       />
                       
                       {/* Arrowhead fill for better visibility */}
                       <path
                         d={`M ${arrowX} ${arrowY} L ${arrowheadX1} ${arrowheadY1} L ${arrowheadX2} ${arrowheadY2} Z`}
                         fill={arrowColors[index]}
                         style={{ pointerEvents: 'none' }}
                       />
                       
                       {/* Glow effect for better visibility */}
                       <path
                         d={`M ${x1} ${y1} A ${arrowRadius} ${arrowRadius} 0 ${largeArcFlag} ${sweepFlag} ${arrowX} ${arrowY}`}
                         fill="none"
                         stroke={arrowColors[index]}
                         strokeWidth="6"
                         strokeOpacity="0.3"
                         strokeLinecap="round"
                         style={{ pointerEvents: 'none' }}
                       />
                     </g>
                   );
                 })}
                 
                 {/* Delivery Arrow from Deploy to Client */}
                 <g>
                   {/* Calculate Deploy phase position (index 5, angle 210 degrees) */}
                   {(() => {
                     const deployAngle = (5 * 60 - 90) * Math.PI / 180; // 210 degrees
                     const radius = 280;
                     const arrowRadius = radius + 30;
                     
                     // Start point (on the Deploy circle)
                     const startX = 400 + arrowRadius * Math.cos(deployAngle);
                     const startY = 400 + arrowRadius * Math.sin(deployAngle);
                     
                     // End point (outward direction)
                     const endX = 400 + (arrowRadius + 80) * Math.cos(deployAngle);
                     const endY = 400 + (arrowRadius + 80) * Math.sin(deployAngle);
                     
                     // Arrowhead calculations
                     const arrowAngle = deployAngle;
                     const arrowheadLength = 20;
                     const arrowheadAngle1 = arrowAngle - Math.PI / 6;
                     const arrowheadAngle2 = arrowAngle + Math.PI / 6;
                     
                     const arrowheadX1 = endX - arrowheadLength * Math.cos(arrowheadAngle1);
                     const arrowheadY1 = endY - arrowheadLength * Math.sin(arrowheadAngle1);
                     const arrowheadX2 = endX - arrowheadLength * Math.cos(arrowheadAngle2);
                     const arrowheadY2 = endY - arrowheadLength * Math.sin(arrowheadAngle2);
                     
                     return (
                       <>
                         {/* Main delivery arrow */}
                         <path
                           d={`M ${startX} ${startY} L ${endX} ${endY}`}
                           fill="none"
                           stroke="#14B8A6"
                           strokeWidth="4"
                           strokeLinecap="round"
                           style={{ pointerEvents: 'none' }}
                         />
                         
                         {/* Arrowhead */}
                         <path
                           d={`M ${endX} ${endY} L ${arrowheadX1} ${arrowheadY1} M ${endX} ${endY} L ${arrowheadX2} ${arrowheadY2}`}
                           fill="none"
                           stroke="#14B8A6"
                           strokeWidth="6"
                           strokeLinecap="round"
                           style={{ pointerEvents: 'none' }}
                         />
                         
                         {/* Arrowhead fill */}
                         <path
                           d={`M ${endX} ${endY} L ${arrowheadX1} ${arrowheadY1} L ${arrowheadX2} ${arrowheadY2} Z`}
                           fill="#14B8A6"
                           style={{ pointerEvents: 'none' }}
                         />
                         
                         {/* Glow effect */}
                         <path
                           d={`M ${startX} ${startY} L ${endX} ${endY}`}
                           fill="none"
                           stroke="#14B8A6"
                           strokeWidth="8"
                           strokeOpacity="0.3"
                           strokeLinecap="round"
                           style={{ pointerEvents: 'none' }}
                         />
                         
                         {/* "Delivered to Client" text */}
                         <text
                           x={endX + 20}
                           y={endY - 10}
                           fill="#14B8A6"
                           fontSize="14"
                           fontWeight="bold"
                           textAnchor="start"
                           style={{ pointerEvents: 'none' }}
                         >
                           Delivered to Client
                         </text>
                       </>
                     );
                   })()}
                 </g>
               </svg>

               {/* Phase Circles */}
               {sdlcPhases.map((phase, index) => {
                 const angle = (index * 60) - 90; // Start from top, 60 degrees apart
                 const radius = 280;
                 const x = 400 + radius * Math.cos(angle * Math.PI / 180);
                 const y = 400 + radius * Math.sin(angle * Math.PI / 180);
                 
                 // Beautiful gradient colors for each phase
                 const gradients = [
                   'from-blue-500 to-blue-600',
                   'from-green-500 to-green-600', 
                   'from-purple-500 to-purple-600',
                   'from-orange-500 to-orange-600',
                   'from-red-500 to-red-600',
                   'from-teal-500 to-teal-600'
                 ];
                 
                 return (
                   <motion.div
                     key={phase.id}
                     initial={{ opacity: 0, scale: 0 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.2, duration: 0.8 }}
                     className="absolute z-30"
                     style={{
                       left: `${x - 80}px`,
                       top: `${y - 80}px`,
                       transform: 'translate(-50%, -50%)'
                     }}
                   >
                     <Link 
                       to={phase.id === 'testing' ? '/testing-agents' : `/phase/${phase.id}`} 
                       onClick={(e) => { 
                         e.preventDefault();
                         console.log('Phase clicked:', phase.id, 'Stage:', phase.stage, 'Navigating to:', phase.id === 'testing' ? '/testing-agents' : `/phase/${phase.id}`);
                         console.log('Full phase object:', phase);
                         // Force navigation
                         window.location.href = phase.id === 'testing' ? '/testing-agents' : `/phase/${phase.id}`;
                       }}
                       className="block"
                     >
                       <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${gradients[index]} text-white flex flex-col items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 cursor-pointer border-4 border-white/40 backdrop-blur-sm group relative overflow-hidden`}>
                         {/* Shimmer effect */}
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                         
                         {/* Inner glow effect */}
                         <div className="absolute inset-2 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-full"></div>
                         
                         <div className="text-center px-2 z-10 relative">
                           <div className="text-3xl font-bold mb-1 drop-shadow-lg">{index + 1}</div>
                           <div className="text-lg font-bold leading-tight mb-1 drop-shadow-lg">{phase.stage}</div>
                           <div className="text-xs opacity-90 leading-tight drop-shadow-lg">{phase.name.split(' ')[0]}</div>
                         </div>
                         
                         {/* Hover effect - show more details */}
                         <div className="absolute inset-0 bg-black/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                           <div className="text-center px-3">
                             <div className="text-sm font-bold mb-1">{phase.stage}</div>
                             <div className="text-xs leading-tight">{phase.description}</div>
                           </div>
                         </div>
                         
                         {/* Outer ring glow on hover */}
                         <div className="absolute inset-0 rounded-full border-2 border-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
                       </div>
                     </Link>
                   </motion.div>
                 );
               })}
             </div>
           </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Agentic SDLC Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI agents work seamlessly across the development lifecycle, 
              providing intelligent automation and decision-making at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Intelligent Automation</h3>
              <p className="text-gray-600">
                AI agents automate repetitive tasks and provide intelligent insights 
                throughout the development process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-secondary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-gray-600">
                Agents learn from each interaction and improve their performance 
                over time with self-learning capabilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-logo-teal/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-logo-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Comprehensive testing and validation at every stage ensures 
                high-quality deliverables and reduced defects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


    </motion.div>
  );
};

export default AIAgents; 
import React from 'react';
import { Link } from 'react-router-dom';
import testaraptorImage from '../assets/agents/testaraptor.png';
import restaceratopsImage from '../assets/agents/restaceratops.png';
import scriptodonImage from '../assets/agents/scriptodon.png';
import loadosaurusImage from '../assets/agents/loadosaurus.png';
import swaggosaurImage from '../assets/agents/swaggosaur.png';
import thinkodactylImage from '../assets/agents/thinkodactyl.png';
import bugzillaRexImage from '../assets/agents/bugzilla-rex.png';

const TestingAgents = () => {
  console.log('TestingAgents component is loading...');
  
  const agents = [
    {
      id: 'testaraptor',
      name: 'Testaraptor',
      description: 'AI-powered manual testing agent that simulates human testing behavior',
      image: testaraptorImage,
      color: '#3B82F6',
      features: [
        'Human-like testing scenarios',
        'Intelligent test case generation',
        'Visual testing capabilities',
        'Cross-browser compatibility testing'
      ]
    },
    {
      id: 'restaceratops',
      name: 'Restaceratops',
      description: 'Specialized API testing agent for comprehensive REST API validation',
      image: restaceratopsImage,
      color: '#10B981',
      features: [
        'REST API endpoint testing',
        'Request/Response validation',
        'Authentication testing',
        'Performance benchmarking'
      ]
    },
    {
      id: 'scriptodon',
      name: 'Scriptodon',
      description: 'Automated testing agent that creates and executes test scripts',
      image: scriptodonImage,
      color: '#8B5CF6',
      features: [
        'Automated test script generation',
        'CI/CD integration',
        'Regression testing',
        'Test execution monitoring'
      ]
    },
    {
      id: 'loadosaurus',
      name: 'Loadosaurus',
      description: 'Performance and load testing agent for scalability validation',
      image: loadosaurusImage,
      color: '#F59E0B',
      features: [
        'Load testing scenarios',
        'Stress testing capabilities',
        'Performance metrics analysis',
        'Scalability assessment'
      ]
    },
    {
      id: 'swaggosaur',
      name: 'Swaggosaur',
      description: 'API documentation testing agent for comprehensive documentation validation',
      image: swaggosaurImage,
      color: '#14B8A6',
      features: [
        'API documentation validation',
        'Swagger/OpenAPI testing',
        'Documentation completeness check',
        'API specification verification'
      ]
    },
    {
      id: 'thinkodactyl',
      name: 'Thinkodactyl',
      description: 'LLM-powered testing agent for intelligent test analysis and generation',
      image: thinkodactylImage,
      color: '#6366F1',
      features: [
        'LLM-based test generation',
        'Intelligent test analysis',
        'Natural language test cases',
        'AI-driven test optimization'
      ]
    },
    {
      id: 'bugzilla-rex',
      name: 'Bugzilla Rex',
      description: 'Bug tracking and management agent for comprehensive defect handling',
      image: bugzillaRexImage,
      color: '#EF4444',
      features: [
        'Automated bug detection',
        'Bug tracking and management',
        'Defect lifecycle automation',
        'Bug reporting and analysis'
      ]
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      paddingTop: '80px', 
      backgroundColor: '#00313A', // primary logo color
      position: 'relative',
      zIndex: 1
    }}>
      {/* Debug Banner */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'green',
        color: 'white',
        padding: '16px',
        zIndex: 9999,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '18px'
      }}>
        ✅ TestingAgents Page Loaded Successfully! 7 Agents Ready to Display!
      </div>

      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #00313A 0%, #009CA6 100%)', // darker teal to lighter teal gradient
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Back Button */}
          <div style={{ marginBottom: '40px', textAlign: 'left' }}>
            <Link to="/agents" style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              <span style={{ marginRight: '8px' }}>←</span>
              Back to Agentic SDLC
            </Link>
          </div>
          
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            marginBottom: '24px',
            color: 'white'
          }}>
            Meet Our AI Testing Agents
          </h1>
          <p style={{ 
            fontSize: '20px', 
            marginBottom: '40px',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6'
          }}>
            Seven specialized, autonomous agents built for every testing need. Accelerate quality assurance with cutting-edge AI technology.
          </p>
        </div>
      </div>

      {/* Agents Grid Section */}
      <div style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: '#374151', marginBottom: '24px' }}>
              Our Specialized AI Testing Team
            </h2>
            <p style={{ fontSize: '20px', color: '#6b7280', maxWidth: '800px', margin: '0 auto' }}>
              Each agent is designed for specific testing scenarios, working together to ensure comprehensive quality assurance across your entire development lifecycle.
            </p>
          </div>
          {/* Agents Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '1200px', margin: '0 auto' }}>
            {agents.map((agent, index) => (
              <div key={agent.id} style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '24px', // decreased from 32px to 24px
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '6px solid white', // increased from 3px to 6px for more prominent white highlight
                textDecoration: 'none',
                color: 'inherit',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Shiny white border effect */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  borderRadius: '16px',
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)',
                  pointerEvents: 'none',
                  zIndex: 1
                }}></div>
                <Link to={`/agent/${agent.id}`} style={{ textDecoration: 'none', color: 'inherit', position: 'relative', zIndex: 2 }}>
                  {/* Agent Image */}
                  <div style={{
                    width: '160px', // decreased from 200px to 160px
                    height: '160px', // decreased from 200px to 160px
                    borderRadius: '50%',
                    margin: '0 auto 20px', // decreased from 24px to 20px
                    overflow: 'hidden',
                    border: '4px solid white', // changed to white border
                    boxShadow: `0 8px 25px rgba(0,0,0,0.2)`
                  }}>
                    <img 
                      src={agent.image} 
                      alt={agent.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        console.log(`Image failed to load for ${agent.name}`);
                      }}
                    />
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '24px', // decreased from 28px to 24px
                    fontWeight: 'bold', 
                    color: '#374151', // dark gray for better contrast
                    marginBottom: '10px' // decreased from 12px to 10px
                  }}>
                    {agent.name}
                  </h3>
                  
                  <p style={{ 
                    fontSize: '14px', // decreased from 16px to 14px
                    color: '#6b7280', // gray text for better contrast
                    marginBottom: '20px', // decreased from 24px to 20px
                    lineHeight: '1.5'
                  }}>
                    {agent.description}
                  </p>

                  {/* Features List */}
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{ 
                      fontWeight: 'bold', 
                      color: '#374151', // dark gray for better contrast
                      marginBottom: '12px', // decreased from 16px to 12px
                      textAlign: 'center'
                    }}>
                      Key Features
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {agent.features.map((feature, idx) => (
                        <li key={idx} style={{ 
                          fontSize: '13px', // decreased from 14px to 13px
                          color: '#6b7280', // gray text for better contrast
                          marginBottom: '6px', // decreased from 8px to 6px
                          display: 'flex',
                          alignItems: 'flex-start'
                        }}>
                          <span style={{ 
                            width: '6px',
                            height: '6px',
                            backgroundColor: agent.color, // keep colored dots for features
                            borderRadius: '50%',
                            marginRight: '12px',
                            marginTop: '6px',
                            flexShrink: 0
                          }}></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingAgents;

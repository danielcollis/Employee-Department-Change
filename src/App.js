import React from 'react';
import './App.css';
import EmployeeJourneyCarousel from './cardCarousel';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Your Career Journey Starts Here</h1>
          <p>Real employee progression paths showing how you can grow within our company</p>
        </div>
        
        <div className="legend">
          <div className="legend-item">
            <div className="legend-dot entry"></div>
            <span>Entry Level</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot technical"></div>
            <span>Technical Specialist</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot leadership"></div>
            <span>Team Leadership</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot management"></div>
            <span>Management</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot executive"></div>
            <span>Executive</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot dept-switch"></div>
            <span>Department Switch</span>
          </div>
        </div>
        
        <div className="flowchart">
          <div className="level">
            <div className="level-label">ENTRY</div>
            <div className="roles">
              <div className="role-card" style={{borderColor: '#3498db'}}>
                <div className="role-title">Production</div>
                <div className="employee-count">Most Common Entry Point</div>
                <div className="examples">35 employees started here</div>
                <div className="arrow"></div>
              </div>
              <div className="role-card" style={{borderColor: '#3498db'}}>
                <div className="role-title">Design Specialist</div>
                <div className="employee-count">Technical Entry</div>
                <div className="examples">38 employees started here</div>
                <div className="arrow"></div>
              </div>
              <div className="role-card" style={{borderColor: '#3498db'}}>
                <div className="role-title">Other Entry Roles</div>
                <div className="employee-count">Various Paths</div>
                <div className="examples">Junior PM, Sales Assistant, Field Ops, Customer Service</div>
                <div className="arrow"></div>
              </div>
            </div>
          </div>
          
          <div className="level">
            <div className="level-label">LEVEL 2</div>
            <div className="roles">
              <div className="role-card" style={{borderColor: '#e74c3c'}}>
                <div className="role-title">Technical Specialist</div>
                <div className="employee-count">Skill Development</div>
                <div className="examples">CNC Programmer, CPS Supervisor, Metal Shop</div>
                <div className="arrow"></div>
              </div>
              <div className="role-card" style={{borderColor: '#f39c12'}}>
                <div className="role-title">Coordinator Positions</div>
                <div className="employee-count">Team Leadership</div>
                <div className="examples">Project Coordinator, Field Operations Coordinator</div>
                <div className="arrow"></div>
              </div>
              <div className="role-card" style={{borderColor: '#34495e'}}>
                <div className="role-title">Cross-Department</div>
                <div className="employee-count">Department Switch</div>
                <div className="examples">Junior PM, Assistant PM, Field Measuring</div>
                <div className="arrow"></div>
              </div>
            </div>
          </div>
          
          <div className="level">
            <div className="level-label">LEVEL 3</div>
            <div className="roles">
              <div className="role-card" style={{borderColor: '#27ae60'}}>
                <div className="role-title">Supervisor/Foreman</div>
                <div className="employee-count">Department Leadership</div>
                <div className="examples">Shop Foreman, Field Operations Foreman, Production Supervisor</div>
                <div className="arrow"></div>
              </div>
              <div className="role-card" style={{borderColor: '#e74c3c'}}>
                <div className="role-title">Senior Specialist</div>
                <div className="employee-count">Expert Level</div>
                <div className="examples">Senior Design Specialist, Engineering Manager, Software Developer</div>
                <div className="arrow"></div>
              </div>
              <div className="role-card" style={{borderColor: '#27ae60'}}>
                <div className="role-title">Project Manager</div>
                <div className="employee-count">Client Management</div>
                <div className="examples">Project Manager, Assistant Project Manager</div>
                <div className="arrow"></div>
              </div>
            </div>
          </div>
          
          <div className="level">
            <div className="level-label">LEVEL 4</div>
            <div className="roles">
              <div className="role-card" style={{borderColor: '#27ae60'}}>
                <div className="role-title">Manager</div>
                <div className="employee-count">Department Management</div>
                <div className="examples">Production Manager, Purchasing Manager, Engineering Manager</div>
                <div className="arrow"></div>
              </div>
              <div className="role-card" style={{borderColor: '#27ae60'}}>
                <div className="role-title">Senior PM</div>
                <div className="employee-count">Advanced Project Leadership</div>
                <div className="examples">Senior Project Manager, Project Director</div>
                <div className="arrow"></div>
              </div>
            </div>
          </div>
          
          <div className="level">
            <div className="level-label">SENIOR</div>
            <div className="roles">
              <div className="role-card" style={{borderColor: '#9b59b6'}}>
                <div className="role-title">Director</div>
                <div className="employee-count">Strategic Leadership</div>
                <div className="examples">Director of Manufacturing, Director of Project Management, Director of Engineering</div>
              </div>
            </div>
          </div>
          
          
        </div>
        
        <EmployeeJourneyCarousel />
        
        <div style={{textAlign: 'center', marginTop: '40px', padding: '20px', background: '#f8f9fa', borderRadius: '10px'}}>
          <h3 style={{color: '#2c3e50', marginBottom: '10px'}}>Your Journey Starts Today</h3>
          <p style={{color: '#7f8c8d', margin: 0}}>Every position is a stepping stone. Talk to your supervisor about your career goals and development opportunities.</p>
        </div>
      </div>
    </div>
  );
}

export default App; 
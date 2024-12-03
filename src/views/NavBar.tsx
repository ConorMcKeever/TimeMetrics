import React from 'react';
import '../styles/NavBar.css';

interface NavbarProps {
  onTabChange: (tab: string) => void;
  activeTab: string;
}

const NavBar: React.FC<NavbarProps> = ({ onTabChange, activeTab }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">ConnexAI Task</h1>
      <div className="navbar-links">
        <button
          className={`navbar-link ${activeTab === 'time' ? 'active' : ''}`}
          onClick={() => onTabChange('time')}
        >
          Time Metrics

        </button>
        <button
          className={`navbar-link ${activeTab === 'cv' ? 'active' : ''}`}
          onClick={() => onTabChange('cv')}
        >
          CV Display
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
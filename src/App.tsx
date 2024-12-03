import React, { useState } from 'react';
import Navbar from './views/NavBar';
import './styles/App.css';
import TimeMetrics from './views/TimeMetrics';
import CvDisplay from './views/CvDisplay';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('time');

  const renderContent = () => {
    switch (activeTab) {
    case 'time':
      return <TimeMetrics />;
    case 'cv':
      return <CvDisplay />;
    default:
      return <TimeMetrics />;
    }
  };

  return (
    <div>
      <Navbar onTabChange={setActiveTab} activeTab={activeTab} />
      <div >
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
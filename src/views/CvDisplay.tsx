import React from 'react';
import '../styles/CvDisplay.css';

const CvDisplay: React.FC = () => {
  return (

    <div className="pdf-view-container">
      <h2>Conor McKeever CV</h2>
      <iframe
        className="pdf-iframe"
        src={`${process.env.PUBLIC_URL}/Conor-McKeever-CV.pdf`}
        title="CV Display"
        width="100%"
        height="800px"
      ></iframe>
    </div>
  
  );
};

export default CvDisplay;
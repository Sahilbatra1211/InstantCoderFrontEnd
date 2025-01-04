import React, { useState } from 'react';
import './style.css';

const Section = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);  // Set default to true (collapsed)

  return (
    <div className={`section ${isCollapsed ? 'section-collapsed' : ''}`}>
      <div className="section-header" onClick={() => setIsCollapsed(!isCollapsed)}>
        <span className="section-title">{title}</span>
        <span className="collapse-icon">{isCollapsed ? '+' : '|'}</span>
      </div>
      {!isCollapsed && <div className="section-content">{children}</div>}
    </div>
  );
};

export default Section;

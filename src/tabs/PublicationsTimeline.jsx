// PublicationsTimeline.js

import React from 'react';
import './PublicationsTimeline.css'; // Import your CSS file for styling
import { Chrono } from "react-chrono";

const PublicationsTimeline = ({ publications }) => {
  return (
    <div className="timeline">
      <Chrono items={publications} mode="VERTICAL_ALTERNATING" />
    </div>
  );
};

export default PublicationsTimeline;

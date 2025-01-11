import React from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import LeftNavbar from '../components/Jobs/LeftNavbar';
import RightPane from '../components/Jobs/RightPane';

const Jobs = () => {
  const navigate = useNavigate();
  const { company } = useParams(); // Get company from the route parameter

  // Function to handle search and redirect
  const handleSearch = (companyName) => {
    navigate(`/jobs/${companyName}`);
  };

  return (
    <div className="flex h-screen">
      {/* Pass a unique key to LeftNavbar to force a re-render on route change */}
      <LeftNavbar key={company} />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<RightPane onSearch={handleSearch} />} />
          <Route path="/:company" element={<RightPane onSearch={handleSearch} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Jobs;

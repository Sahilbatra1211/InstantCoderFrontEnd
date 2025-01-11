import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LeftNavbar = () => {
  const [companies, setCompanies] = useState([]);
  const location = useLocation(); // Get the current location (URL)
  const navigate = useNavigate();

  useEffect(() => {
    // Mock API data for companies
    const fetchCompanies = async () => {
      const mockCompanies = [
        { id: '1', name: 'Google' },
        { id: '2', name: 'Microsoft' },
        { id: '3', name: 'Amazon' },
      ];
      setCompanies(mockCompanies);
    };
    fetchCompanies();
  }, []);

  // Function to determine if a tab should be active based on current location
  const isActive = (target) => {
    if (target === 'Recent Job Openings' && location.pathname === '/jobs') {
      return true;
    }
    if (location.pathname === `/jobs/${target}`) {
      return true;
    }
    return false;
  };

  return (
    <div className="w-1/4 h-full bg-gray-100 border-r overflow-y-auto">
      <div className="p-4 text-xl font-bold">Companies</div>
      <ul>
        {/* Recent Job Openings Tab */}
        <li
          className={`p-3 cursor-pointer ${
            isActive('Recent Job Openings') ? 'bg-blue-100 text-blue-700' : ''
          }`}
          onClick={() => navigate('/jobs')}
        >
          Recent Job Openings
        </li>
        {/* Company Tabs */}
        {companies.map((comp) => (
          <li
            key={comp.id}
            className={`p-3 cursor-pointer ${
              isActive(comp.name) ? 'bg-blue-100 text-blue-700' : ''
            }`}
            onClick={() => navigate(`/jobs/${comp.name}`)}
          >
            {comp.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftNavbar;

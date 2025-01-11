import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const LeftNavbar = () => {
  const [companies, setCompanies] = useState([]);
  const { company, role } = useParams();  // Get company and role from the route
  const navigate = useNavigate();
  const location = useLocation(); // Get the current URL

  useEffect(() => {
    // Mock data for companies
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

  const isActive = (target) => {
    // Check if the current path matches the target
    if (target === 'Recent Job Openings') {
      return location.pathname === '/jobs';
    }

    // Check if the target matches the company name in the URL
    return location.pathname.includes(target);
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

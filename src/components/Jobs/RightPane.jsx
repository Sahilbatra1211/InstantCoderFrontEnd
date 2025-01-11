import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RightPane = ({ onSearch }) => {
  const { company } = useParams();
  const [companies, setCompanies] = useState([]);
  const [roles, setRoles] = useState([]);
  const [searchQuery, setSearchQuery] = useState({ company: '', role: '' });

  useEffect(() => {
    // Mock API fetching companies and roles
    const fetchData = async () => {
      const mockCompanies = [
        { name: 'Google', roles: ['SDE1', 'SDE2', 'Product Manager'] },
        { name: 'Microsoft', roles: ['SDE1', 'SDE2', 'DevOps Engineer'] },
        { name: 'Amazon', roles: ['SDE1', 'Data Scientist'] },
      ];
      setCompanies(mockCompanies.map((c) => c.name));
      setRoles(
        company
          ? mockCompanies.find((c) => c.name === company)?.roles || []
          : mockCompanies.flatMap((c) => c.roles)
      );
    };
    fetchData();
  }, [company]);

  const handleSearch = () => {
    onSearch(searchQuery.company);
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <select
          className="p-2 border rounded w-1/3"
          value={searchQuery.company}
          onChange={(e) =>
            setSearchQuery((prev) => ({ ...prev, company: e.target.value }))
          }
        >
          <option value="">Select Company</option>
          {companies.map((comp, index) => (
            <option key={index} value={comp}>
              {comp}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded w-1/3"
          value={searchQuery.role}
          onChange={(e) =>
            setSearchQuery((prev) => ({ ...prev, role: e.target.value }))
          }
        >
          <option value="">Select Role</option>
          {roles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4">
        {company ? `${company} Job Openings` : 'Recent Job Openings'}
      </h2>
      <div>
        {roles.length > 0 ? (
          roles.map((role, index) => (
            <div
              key={index}
              className="p-4 mb-4 border rounded shadow-sm bg-white"
            >
              <p>
                <strong>Role:</strong> {role}
              </p>
            </div>
          ))
        ) : (
          <p>No jobs available for this selection.</p>
        )}
      </div>
    </div>
  );
};

export default RightPane;

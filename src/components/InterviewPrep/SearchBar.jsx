import React, { useState, useEffect } from 'react';
import mockApi from '../../mock/api';

const SearchBar = ({ onSearch }) => {
  const [companies, setCompanies] = useState([]);
  const [levels, setLevels] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  useEffect(() => {
    // Mock API to fetch companies and levels
    const fetchFilters = async () => {
      const companies = await mockApi.getCompanies();
      const levels = await mockApi.getLevels();
      setCompanies(companies);
      setLevels(levels);
    };
    fetchFilters();
  }, []);

  const handleSearch = () => {
    if (selectedCompany && selectedLevel) {
      onSearch(selectedCompany, selectedLevel);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mb-6">
      <div className="flex gap-4">
        <select
          className="border border-gray-300 rounded-md px-4 py-2"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          <option value="" disabled>Select Company</option>
          {companies.map((company) => (
            <option key={company} value={company}>{company}</option>
          ))}
        </select>
        <select
          className="border border-gray-300 rounded-md px-4 py-2"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="" disabled>Select Level</option>
          {levels.map((level) => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-6 py-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

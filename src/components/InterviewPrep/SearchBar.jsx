import React, { useState, useEffect } from 'react';
import mockApi from '../../mock/api';
import './style.css';

const SearchBar = ({ onSearch }) => {
  const [companies, setCompanies] = useState([]);
  const [levels, setLevels] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  useEffect(() => {
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
    <div className="search-bar">
      <div className="flex gap-4">
        <select
          className="search-select"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          <option value="" disabled>Select Company</option>
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
        <select
          className="search-select"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="" disabled>Select Level</option>
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;

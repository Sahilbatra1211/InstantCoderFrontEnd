import React, { useState } from 'react';
import SearchBar from '../components/InterviewPrep/SearchBar';
import CompanyDetails from '../components/InterviewPrep/CompanyDetails';
import mockApi from '../mock/api';

const InterviewPrep = () => {
  const [companyData, setCompanyData] = useState(null);

  const handleSearch = async (company, level) => {
    const data = await mockApi.getCompanyData(company, level);
    setCompanyData(data);
  };

  return (
    <div className="container mx-auto px-4">
      <SearchBar onSearch={handleSearch} />
      {companyData && <CompanyDetails companyData={companyData} />}
    </div>
  );
};

export default InterviewPrep;

import React from 'react';
import DifficultyLevel from './DifficultyLevel';
import Mentors from './Mentors';
import Rounds from './Rounds';
import Experiences from './Experiences';
import CommentsSection from './CommentsSection';

const CompanyDetails = ({ companyData }) => {
  return (
    <div className="mt-6">
      <DifficultyLevel difficulty={companyData.difficulty} />
      <Mentors mentors={companyData.mentors} />
      <Rounds rounds={companyData.rounds} />
      <Experiences experiences={companyData.experiences} />
      <CommentsSection />
    </div>
  );
};

export default CompanyDetails;

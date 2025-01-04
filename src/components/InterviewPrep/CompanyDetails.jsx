import React from 'react';
import DifficultyLevel from './DifficultyLevel';
import Mentors from './Mentors';
import Section from './Section';
import Experiences from './Experiences';
import FAQ from './FAQ';

const CompanyDetails = ({ companyData }) => (
  <div>
    <Section title="Maximum Compensation">
        75LPA
    </Section>
    <Section title="Difficulty Level">
      <DifficultyLevel difficulty={companyData.difficulty} />
    </Section>
    <Section title={`Recently Interviewed at ${companyData.name}`}>
      <Mentors companyName={companyData.name} /> {/* Pass company name as prop */}
    </Section>
    <Section title="Rounds">
      {companyData.rounds.map((round, index) => (
        <div key={index}>
          <h3>{round.title}</h3>
          <p>{round.questions}</p>
        </div>
      ))}
    </Section>
    <Section title="All Recent Interview Experiences">
      <Experiences experiences={companyData.experiences} /> {/* Pass experiences correctly */}
    </Section>
    <Section title="Frequently Asked Questions">
      <FAQ/>
    </Section>
  </div>
);

export default CompanyDetails;

import React from 'react';
import DifficultyLevel from './DifficultyLevel';
import Section from './Section';

const CompanyDetails = ({ companyData }) => (
  <div>
    <Section title="Difficulty Level">
    <DifficultyLevel difficulty={companyData.difficulty} />
    </Section>
    <Section title="Mentors">
      <ul>
        {companyData.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} - {mentor.role}
          </li>
        ))}
      </ul>
    </Section>
    <Section title="Rounds">
      {companyData.rounds.map((round, index) => (
        <div key={index}>
          <h3>{round.title}</h3>
          <p>{round.questions}</p>
        </div>
      ))}
    </Section>
    <Section title="Interview Experiences">
      <ul>
        {companyData.experiences.map((exp, index) => (
          <li key={index}>{exp}</li>
        ))}
      </ul>
    </Section>
  </div>
);

export default CompanyDetails;

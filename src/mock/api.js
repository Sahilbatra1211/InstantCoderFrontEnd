const mockApi = {
    getCompanies: async () => ['Google', 'Rubrik', 'Microsoft'],
    getLevels: async () => ['SDE1', 'SDE2', 'SDE3'],
    getCompanyData: async (company, level) => ({
      difficulty: 'Hard',
      mentors: [
        { name: 'John Doe', role: 'SDE2' },
        { name: 'Jane Smith', role: 'Senior Engineer' },
      ],
      rounds: [
        { title: 'Round 1: DSA', questions: 'Common DSA problems like arrays, trees' },
        { title: 'Round 2: System Design', questions: 'Basic LLD questions' },
      ],
      experiences: [
        'Great experience with detailed feedback',
        'Focused on problem-solving skills',
      ],
    }),
  };
  
  export default mockApi;
  
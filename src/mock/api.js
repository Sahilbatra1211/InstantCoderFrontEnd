const mockApi = {
    getCompanies: async () => ['Google', 'Rubrik', 'Microsoft'],
    getLevels: async () => ['SDE1', 'SDE2', 'SDE3'],
    getCompanyData: async (company, level) => ({
      difficulty: 'Hard',
      name: 'Microsoft',
      experienceLinks: [
        "https://leetcode.com/discuss/interview-experience/5110856/Rubrik-or-G5-or-Selected/",
        "https://leetcode.com/discuss/interview-experience/5860833/Rubrik-or-Software-engineer-(CPD)-or-Pune-or-September-2024-Reject/",
        "https://www.glassdoor.co.in/Interview/Rubrik-Interview-RVW93850329.htm"
      ],
      mentors: [
        { name: 'John Doe', role: 'SDE2' },
        { name: 'Jane Smith', role: 'Senior Engineer' },
      ],
      rounds: [
        { title: 'Round 1: DSA', questions: 'Common DSA problems like arrays, trees' },
        { title: 'Round 2: System Design', questions: 'Basic LLD questions' },
      ],
      experiences: [
        "https://leetcode.com/discuss/interview-experience/5110856/Rubrik-or-G5-or-Selected/",
        "https://leetcode.com/discuss/interview-experience/5860833/Rubrik-or-Software-engineer-(CPD)-or-Pune-or-September-2024-Reject/",
        "https://www.glassdoor.co.in/Interview/Rubrik-Interview-RVW93850329.htm"
      ], // Fixed to URLs
    }),
  };
  
  export default mockApi;
  
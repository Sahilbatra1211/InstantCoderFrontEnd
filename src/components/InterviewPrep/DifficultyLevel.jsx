const DifficultyLevel = ({ difficulty }) => {
    let difficultyClass = '';
    
    // Check the passed difficulty value
    console.log('Difficulty:', difficulty);
    
    // Set class based on difficulty value
    if (difficulty === 'Hard') {
      difficultyClass = 'bg-red-500 text-white';
    } else if (difficulty === 'Easy') {
      difficultyClass = 'bg-green-500 text-white';
    } else if (difficulty === 'Medium') {
      difficultyClass = 'bg-yellow-500 text-black';
    }
  
    return (
      <div className="mb-6">
        <p className="text-gray-700">
        <span className={`inline-block py-0.5 px-3 text-sm rounded-full ${difficultyClass}`}>
            {difficulty}
          </span>
        </p>
      </div>
    );
  };
  
  export default DifficultyLevel;
  
const Experiences = ({ experiences }) => (
    <div className="mb-6">
      <ul className="list-disc pl-5">
        {experiences.map((exp, index) => (
          <li key={index} className="text-gray-700">
            <a href={exp} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {exp}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default Experiences;
  
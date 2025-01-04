const Experiences = ({ experiences }) => (
    <div className="mb-6">
      <h2 className="text-xl font-bold">Interview Experiences</h2>
      <ul className="list-disc pl-5">
        {experiences.map((exp, index) => (
          <li key={index} className="text-gray-700">
            {exp}
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default Experiences;
  
const Mentors = ({ mentors }) => (
    <div className="mb-6">
      <h2 className="text-xl font-bold">Mentors</h2>
      <ul className="list-disc pl-5">
        {mentors.map((mentor, index) => (
          <li key={index} className="text-gray-700">
            {mentor.name} - {mentor.role}
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default Mentors;
  
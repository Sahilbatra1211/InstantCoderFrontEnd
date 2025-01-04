const Rounds = ({ rounds }) => (
    <div className="mb-6">
      <h2 className="text-xl font-bold">Rounds</h2>
      {rounds.map((round, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-semibold">{round.title}</h3>
          <p className="text-gray-700">{round.questions}</p>
        </div>
      ))}
    </div>
  );
  
  export default Rounds;
  
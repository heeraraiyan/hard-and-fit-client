import useTrainer from "../../hooks/useTrainer";


const AllTrainer = () => {
    const [trainer] = useTrainer();

  
    return (
        <div>
      <h2 className="text-2xl font-bold mb-4">All Trainers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Experience</th>
              <th className="border p-2">Joined Date</th>
              {/* <th className="border p-2">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {trainer.map((train) => (
              <tr key={train.id}>
                <td className="border p-2">{train.name}</td>
                <td className="border p-2">{train.experience} years</td>
                <td className="border p-2">{train.joinedDate}</td>
                {/* <td className="border p-2">
                  {train.paymentStatus === "pending" && (
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                      onClick={() => handlePayClick(trainer.id)}
                    >
                      Pay Salary
                    </button>
                  )}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
  

export default AllTrainer;
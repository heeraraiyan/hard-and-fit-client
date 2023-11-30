import { useEffect, useState } from "react";


const ApliedTrainer = () => {

    const [trainers, setTrainer] = useState([]);

    useEffect(() => {
      fetch('https://hard-and-fit-server.vercel.app/betrainers')
        .then(res => res.json())
        .then(data => setTrainer(data))
        .catch(error => console.error('Error fetching users:', error));
    }, []);
    return (
        <div>
        <h2 className="text-2xl font-bold mb-4">All Trainers</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Age</th>
                <th className="border p-2">time per week</th>
                <th className="border p-2">time per day</th>
                
                {/* <th className="border p-2">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {trainers.map((train) => (
                <tr key={train.id}>
                  <td className="border p-2">{train.fullname}</td>
                  <td className="border p-2">{train.age} years</td>
                  <td className="border p-2">{train.availableTimePerWeek}</td>
                  <td className="border p-2">{train.availableTimePerDay}</td>
                  
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
    

export default ApliedTrainer;
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useTrainer from "../../hooks/useTrainer";
import { Link } from "react-router-dom";





const Classes = () => {
    const [trainer] = useTrainer();
    const [selectedClass, setSelectedClass] = useState(null);
  const [weeklyCalendar, setWeeklyCalendar] = useState([]);

  useEffect(() => {
    generateWeeklyCalendar();
  }, [trainer]);

  const generateWeeklyCalendar = () => {
    const uniqueTimeSlots = [...new Set(trainer.flatMap((cls) => cls.availableTimeSlots))];
   

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const calendar = daysOfWeek.map((day) => ({
      day,
      timeSlots: uniqueTimeSlots
        .filter((slot) => slot.includes(day))
        .sort((a, b) => a.localeCompare(b)),
    }));

    setWeeklyCalendar(calendar);
  };

  const handleClassClick = (classId) => {
    const selectedClass = trainer.find((cls) => cls.id === classId);
    setSelectedClass(selectedClass);
  };

    
  
    return (
      <div className="pt-28 max-w-6xl mx-auto bg-slate-900 mb-20 ">
        <Helmet>
          <title>HARD & TIME | Classes</title>
        </Helmet>
        <h2 className="text-3xl font-bold mb-4 text-slate-100 pl-10 pt-6">Weekly Schedule</h2>
        <div className="grid grid-cols-7 gap-4 mb-8 px-10">
        {weeklyCalendar.map((daySlot) => (
          <div key={daySlot.day}>
            <p className="text-white">{daySlot.day}</p>
            {daySlot.timeSlots.map((timeSlot) => (
              <p key={timeSlot} className="text-white">
                {timeSlot}
              </p>
            ))}
          </div>
        ))}
      </div>
  
        <h2 className="text-3xl font-bold mb-4 text-slate-100 py-8 pl-10">All Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-8">
          {trainer.map((cls) => (
            <div key={cls.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">{cls.name}</h3>
              <p className="text-gray-500 mb-2">
                <span className="font-bold">Day:</span> {cls.day}
              </p>
              <p className="text-gray-500 mb-2">
                <span className="font-bold">Time:</span> {cls.availableTimeSlots}
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full"
                onClick={() => handleClassClick(cls.id)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
  
        {selectedClass && (
          <div className="mt-8 px-10 py-8">
            <h2 className="text-3xl font-bold mb-4 text-slate-50 ">Class Details</h2>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">{selectedClass.name}</h3>
              <p className="text-gray-500 mb-2">
                <span className="font-bold">Day:</span> {selectedClass.day}
              </p>
              <p className="text-gray-500 mb-2">
                <span className="font-bold">Time:</span> {selectedClass.availableTimeSlots}
              </p>
              <p className="text-gray-500 mb-2">
                <span className="font-bold">Trainer:</span> {selectedClass.trainer}
              </p>
              <p className="mb-2">{selectedClass.description}</p>
              <Link to='/trainer'><button
                className="bg-blue-500 text-white px-4 py-2 rounded-full"
                
              >
                Join Now
              </button></Link>
            </div>
          </div>
        )}
      </div>
    );
  };

export default Classes;
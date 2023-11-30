import { useState } from "react";

import useAxiosScure from "../../hooks/useAxiosScure";
import Swal from "sweetalert2";


const BeTrainer = () => {
    const axiosSecure = useAxiosScure();

    const [formData, setFormData] = useState({
      
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Send a POST request to your server to save data in the database
        const response = await axiosSecure.post('/betrainers', formData);
  
        if (response.data.success) {
          console.log('Data submitted successfully');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "apllied succesfully",
            showConfirmButton: false,
            timer: 1500
          });
          // Optionally, you can reset the form here
          setFormData({
            // Reset your form data properties
          });
        }
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    };
  
    return (  <div className="pt-28 max-w-6xl mx-auto mb-20 pb-10 text-slate-900 bg-slate-900 pl-10 ">
        <h2 className="text-3xl text-amber-400 text-center mb-8 pt-8">Apply to Become a Fitness Trainer</h2>
        <form onSubmit={handleSubmit}>
          <div className=" mb-4">
            <label className="text-xl text-slate-100 font-bold" htmlFor="fullName">Full Name:</label>
            <input className="w-3/4 border-4 px-4 py-1 bg-slate-100"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-xl text-slate-100 font-bold" htmlFor="email">Email:</label>
            <input className="w-3/4 border-4 px-4 py-1 bg-slate-100"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              readOnly
              // Assuming email is read-only for the user
            />
          </div>
          <div className="mb-4">
            <label className="text-xl text-slate-100 font-bold" htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
         
          <div className="mb-4">
            <label className="text-xl text-slate-100 font-bold" htmlFor="profileImage">Profile Image URL:</label>
            <input className="w-3/4 border-4 px-4 py-1 bg-slate-100"
              type="text"
              id="profileImage"
              name="profileImage"
              value={formData.profileImage}
              onChange={handleChange}
              required
            />
          </div>
        
          <div className="mb-4">
            <label className="text-xl text-slate-100 font-bold" htmlFor="availableTimePerWeek">Available Time per Week:</label>
            <input className="w-3/4 border-4 px-4 py-1 bg-slate-100"
              type="text"
              id="availableTimePerWeek"
              name="availableTimePerWeek"
              value={formData.availableTimePerWeek}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-xl text-slate-100 font-bold" htmlFor="availableTimePerDay">Available Time per Day:</label>
            <input className="w-3/4 border-4 px-4 py-1 bg-slate-100"
              type="text"
              id="availableTimePerDay"
              name="availableTimePerDay"
              value={formData.availableTimePerDay}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-10">
            <label className="text-xl text-slate-100 font-bold" htmlFor="otherInfo">Other Info:</label>
            <textarea className="w-3/4 border-4 px-4 py-1 bg-slate-100"
              id="otherInfo"
              name="otherInfo"
              value={formData.otherInfo}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center">
          <button className="text-green-800 border-4 border-yellow-500 px-4 py-1" type="submit">Apply Now</button>
          </div>
        </form>
      </div>
    );
  };

export default BeTrainer;
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const TrainerCard = ({ train }) => {
  const { name, image, experience,  availableTimeSlots } = train;
  return (
    <div className="pb-20">

      <div className=" bg-gradient-to-r from-gray-300 to-gray-800   shadow-xl flex">
        <img className="h-[550px] w-[350px]" src={image} alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title text-slate-100">Trainer: {name}</h2>
          <p className="text-yellow-500"> Experience: {experience} years</p>

          <div className="social-icons flex gap-3">
          <FaFacebook className="text-3xl text-blue-700"></FaFacebook>
          <FaTwitter className="text-3xl text-blue-500"></FaTwitter>
          <FaInstagramSquare className="text-3xl text-orange-700"></FaInstagramSquare>
          
        </div>

        <div className="time-slots">
          <p className="text-green-600">Available Time Slots:</p>
          <ul>
            {availableTimeSlots.map((slot, index) => (
              <li className="text-sm text-slate-400" key={index}>{slot}</li>
            ))}
          </ul>
        </div>



          <div className="card-actions justify-end">
            <button className="btn btn-success">Know More</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TrainerCard;
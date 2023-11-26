import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className=" mb-20 pt-28">
            {/* <img className="h-[550px] mx-auto" src="https://i.ibb.co/8dsSXRr/Gym-Fitness.png" alt="" /> */}
            <div className="hero h-[650px] w-4/5 mx-auto " style={{ backgroundImage: 'url(https://i.ibb.co/Fmq46Nh/pexels-binyamin-mellish-116077.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
               
               <div className="lg:flex lg:gap-x-96"> <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="md:mb-8 text-5xl font-bold text-amber-500 italic">HARD </h1>
                        <p className="md:mb-5 text-2xl font-bold">Gym Fitness</p>
                        <p className="mb-2">-Lets Get Stronger-</p>
                        <p>We seek to empower our members by providing them with the best tools, expert guidance, and a supportive environment for achieving their fitness goals.</p>
                       <div className="flex items-center justify-center"> <p className="text-2xl mt-2">Start <span className="text-lime-500">Training</span> <span className="text-yellow-400">Today</span></p></div>
                       <div className="flex items-center justify-center text-3xl"><FaArrowRight /></div>
                        
                        {/* <button className="btn btn-primary">Get Started</button> */}
                        
                    </div>
                </div>

                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="md:mb-8 text-5xl font-bold text-amber-500 italic">&FIT</h1>
                        <p className="md:mb-5 text-3xl font-bold">Shape<br></br><span className="italic text-green-700">Your</span><span className="text-yellow-200">Body</span></p>
                        <p>To care for my body through mindful living, nutritious foods and challenging movements that support my body composition goals, a full social life, a long healthspan, and active lifestyle.</p>
                        {/* <p className=" text-yellow-500">Join us</p> */}
                        <Link to='/classes'><button className="btn btn-outline btn-warning mt-2"> Join US</button></Link>
                    </div>
                </div></div>
                
               
                
            </div>
        </div>
    );
};

export default Banner;
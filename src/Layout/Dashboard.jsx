
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min h-screen bg-slate-700 pt-10">

                <ul>
                    <li className="text-2xl text-slate-800  bg-slate-100 mx-4 rounded-md py-1 mb-4 text-center"><NavLink to='subscribers'>All Subscribes</NavLink></li>
                    <li className="text-2xl text-slate-800  bg-slate-100 mx-4 rounded-md py-1 mb-4 text-center"><NavLink to='/dashboard/allTrainer'>All trainers</NavLink></li>

                    <progress className="progress progress-success w-56 pl-4 mb-4" value="100" max="100"></progress>

                    <li className="text-2xl text-slate-800  bg-slate-100 mx-4 rounded-md py-1 mb-4 text-center"><NavLink to='/'>Home</NavLink></li>


                    
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Home/shared/Navbar";
import Footer from "../pages/Home/Footer/Footer";


const Main = () => {
    return (
   <div >

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;
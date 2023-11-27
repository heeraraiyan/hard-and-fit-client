import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Home/Home/shared/Navbar";
import Footer from "../pages/Home/Footer/Footer";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register')
    return (
   <div >

           {noHeaderFooter ||  <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
            
        </div>
    );
};

export default Main;
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Features from "../Features/Features";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";
import About from "./About/About";
import Subscribers from "./Subscribes/Subscribes";



const Home = () => {
    return (
        <div>
            <Helmet>
            <title>HARD & TIME | Home</title>
            </Helmet>
            <Banner></Banner>

            <Features></Features>
            
            <About></About>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Team></Team>
            <Subscribers></Subscribers>

            
            {/* <h2>this is home</h2> */}
            
        </div>
    );
};

export default Home;
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Testimonial from "../Testimonial/Testimonial";
import About from "./About/About";



const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Features></Features>
            <Testimonial></Testimonial>
            <About></About>
            
            {/* <h2>this is home</h2> */}
            
        </div>
    );
};

export default Home;
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Features from "../Features/Features";
import Testimonial from "../Testimonial/Testimonial";
import About from "./About/About";



const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Features></Features>
            
            <About></About>
            <Testimonial></Testimonial>
            <Blog></Blog>

            
            {/* <h2>this is home</h2> */}
            
        </div>
    );
};

export default Home;
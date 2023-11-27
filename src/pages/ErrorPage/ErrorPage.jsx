import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center bg-slate-300">
          <div className="hero min-h-screen w-2/3" style={{backgroundImage: 'url(https://i.ibb.co/TtgWPbZ/29673547-cartoon-businessman-slipping-on-a-banana-peel-isolated.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-10 mt-10 text-7xl font-bold text-red-700">wrong place</h1>
      <Link to='/'><button className="btn btn-warning text-xl text-green-600">Go To HOME</button></Link>
      
      
    </div>
  </div>
</div>
<div>
   

</div>
            
            
        </div>
    );
};

export default ErrorPage;
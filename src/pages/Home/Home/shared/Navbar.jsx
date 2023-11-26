import { Link } from "react-router-dom";


const Navbar = () => {

    const navOptions = <>
    <li className=""> <Link to="/">Home</Link></li>
    <li> <Link to="/gallery">Gallery</Link></li>
    <li> <Link to="/trainer">Trainer</Link></li>
    <li> <Link to="/classes">Classes</Link></li>
    
    {/* <li> <Link to="/order/salad">Order Food</Link></li> */}
       </>
    return (
        <div>
        <div className="navbar 
         bg-gray-50 text-amber-700  text-xl px-8 font-bold">
<div className="navbar-start">
<div className="dropdown">
  <label tabIndex={0} className="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    {navOptions}
  </ul>
</div>
{/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
<img className="h-24 w-24" src="https://i.ibb.co/vkGmMjS/Orange-and-Black-Modern-Fitness-Center-Logo.png" alt="" />

</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1">
 {navOptions}
</ul>
</div>
<div className="navbar-end">
<a className="btn">Button</a>
</div>
</div>
        
    </div>
    );
};

export default Navbar;
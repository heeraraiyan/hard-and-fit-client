import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProviders";
// import useAdmin from "../../../../hooks/useAdmin";


const Navbar = () => {

  // const [isAdmin] = useAdmin();

  const { user, logOut } = useContext(AuthContext);
  console.log(user)

  const handleLogOut = () => {
    logOut()
      .then(() => console.log(user))
      .catch(error => console.error(error))
  }

  const navOptions = <>
    <li className=""> <Link to="/">Home</Link></li>
    <li> <Link to="/gallery">Gallery</Link></li>
    <li> <Link to="/trainer">Trainer</Link></li>
    <li> <Link to="/classes">Classes</Link></li>
    <li> <Link to="/community">Community</Link></li>


    {/* {
      user && isAdmin && <li><Link t0='/dashboard/adminhome'>Dashboard</Link></li>
    }

    {
      user && isAdmin && <li><Link t0='/dashboard/userhome'></Link></li>
    } */}
    <li> <Link to="/dashboard/subscribers">Dashboard</Link></li>

    {/* {
      user && <Link to="/profile">Profile</Link>
    } */}


    {/* <li> <Link to="/login">Login</Link></li> */}

    {/* <li> <Link to="/order/salad">Order Food</Link></li> */}
  </>
  return (
    <div>
      <div className="navbar fixed z-10
         bg-gray-50 text-amber-600  text-xl px-8 font-bold ">
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
          <img className="h-24 w-28" src="https://i.ibb.co/vkGmMjS/Orange-and-Black-Modern-Fitness-Center-Logo.png" alt="" />

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>

              <Link to="/profile">Profile</Link>
              <div className="flex justify-between gap-10">
                <div className="flex justify-between gap-3">
                  <img className="w-10 h-10 rounded-full" alt="" src={user.photoURL} />
                  <span className="text-xl font-normal">{user.email}</span>
                </div>

                <a onClick={handleLogOut} className="btn btn-error rounded-full">sign out</a>
              </div>



            </>
              : <Link to='/login'>
                <button className="btn border-2 px-4 py-2 rounded-md text-amber-600 text-xl border-yellow-600">Login</button>
              </Link>
          }
        </div>
      </div>

    </div>
  );
};

export default Navbar;
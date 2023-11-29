import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const { signIn , signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    

    const [loginError, setLoginError] = useState('');
    // console.log(user)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email,password)
        setLoginError('');
        
        signIn(email, password)
        .then(result=>{
          console.log(result.user);
          e.target.reset();
          navigate(location?.state ? location .state : '/');
        })
          .catch(error => {
          console.error(error);
          setLoginError("Email and password do not match. Please try again.");
        })
    }

    const handleGoogle = () => {
      signInWithGoogle()
      .then(result => {
        console.log(result.user)
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName
        }

        axiosPublic.post('/users', userInfo)
        .then(res =>{
          console.log(res.data);
          navigate('/');
        })
      })
      .catch(error =>{
        console.error(error)
      })
    }
    return (
        <div className="bg-gradient-to-r from-gray-300 to-gray-800">
          <Helmet>
            <title>HARD & TIME | LOgin</title>
            </Helmet>
       

        <h1 className="text-5xl font-bold text-amber-700 italic text-center pt-8">Login now!</h1>
          <div className="md:flex items-center justify-center">
            <div className="ml-20">
               
                <img src="https://i.ibb.co/jyZsS6M/image-login.png" alt="" />
                {/* <img src="https://i.ibb.co/NWptxcr/1000-F-214518364-n3j-F5l-Ksxp-Hrp9-Kp-ORK5dv-ADKz0-UZdk-D.jpg" alt="" /> */}
            </div>
          <div className="hero min-h-screen  ">
<div className="hero-content flex-col ">
<div className="text-center">
 
 
</div>
<div className=" flex-shrink-0 w-full max-w-md shadow-2xl  bg-slate-900 px-10 py-10">
  <form onSubmit={handleLogin} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text text-zinc-100 font-bold ">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-zinc-100 font-bold">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover text-amber-700">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-success">Login</button>
    </div>
</form>

{loginError && (
          <p className="text-red-700 text-center mt-4">{loginError}</p>
        )}
     <p className="text-zinc-50">Dont have an account? please <Link className="text-green-600  bg-zinc-100 px-2 py-1 text-3xl rounded-lg" to="/register">Register</Link></p> .
     <p className="text-zinc-50">Log in with  <button onClick={handleGoogle} className="btn border-2 text-blue-700 px-2 py-1">Google</button></p>          
</div>
</div>
</div>
          </div>
    </div>
 
        

);
};

export default Login;
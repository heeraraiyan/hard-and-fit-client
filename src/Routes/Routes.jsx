import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Gallery from "../pages/Gallery/Gallery";
import Trainer from "../pages/Trainer/Trainer";
import Classes from "../pages/Classes/Classes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Subscribers from "../pages/Dashboard/Subscribers";
import AllTrainer from "../pages/Dashboard/AllTrainer";
import Community from "../pages/Community/Community";
import BeTrainer from "../pages/Trainer/BeTrainer";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllUser from "../pages/Dashboard/AllUser";
import Payment from "../pages/Dashboard/Payment";
import AdminHome from "../pages/Dashboard/AdminHome";
import UserHome from "../pages/Dashboard/UserHome";
import Balance from "../pages/Dashboard/Balance";
import Profile from "../pages/Profile/Profile";
// import ApliedTrainer from "../pages/Dashboard/ApliedTrainer";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/gallery',
            element: <Gallery></Gallery>
        },{
            path: '/trainer',
            element:<Trainer></Trainer>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
          path: '/community',
          element: <Community></Community>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/betrainer',
          element: <PrivateRoute><BeTrainer></BeTrainer></PrivateRoute>
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        }
        
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'subscribers',  // Corrected path
          element: <Subscribers></Subscribers>
        },
        {
          path: 'allTrainer',
          element:<AdminRoute> <AllTrainer></AllTrainer></AdminRoute>
        },
        {
          path: 'alluser',
          element: <AllUser></AllUser>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'adminhome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'userhome',
          element: <UserHome></UserHome>
        },
        {
          path: 'balance',
          element:<AdminRoute> <Balance></Balance></AdminRoute>
        },
        // {
        //   path:'/appliedtrainer',
        //   element:<AdminRoute><ApliedTrainer></ApliedTrainer></AdminRoute>
        // }
      ]
    }
    
  ]);
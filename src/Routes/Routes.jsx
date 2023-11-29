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
        }
        
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'subscribers',  // Corrected path
          element: <Subscribers></Subscribers>,
        },
        {
          path: 'allTrainer',
          element: <AllTrainer></AllTrainer>
        }
      ]
    }
    
  ]);
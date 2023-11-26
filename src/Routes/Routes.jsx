import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Gallery from "../pages/Gallery/Gallery";
import Trainer from "../pages/Trainer/Trainer";
import Classes from "../pages/Classes/Classes";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        }
        
      ]
    },
  ]);
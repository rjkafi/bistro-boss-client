import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
          path:'menu',
          element:<PrivateRoute>
            <Menu></Menu>
          </PrivateRoute>
        },{
          path:"order/:category",
          element: <Order></Order>
        },{
          path:'login',
          element:<Login></Login>
        },{
          path:'signUp',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

export default router;
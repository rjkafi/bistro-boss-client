import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";





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
          element: <Menu></Menu>
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
    },{
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },
        // Admin route
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },{
          path:'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },{
          path:'manageItems',
          element:<ManageItems></ManageItems>
        },{
          path:'updateItem/:id',
          element:<UpdateItem></UpdateItem>,
          loader:({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
  ]);

export default router;
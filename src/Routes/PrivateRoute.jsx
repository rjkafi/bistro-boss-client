import { Navigate, useLocation } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();

    if(loading){
        return <div>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{form:location}} replace></Navigate>
    
};


export default PrivateRoute;
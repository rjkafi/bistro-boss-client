import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { Navigate } from "react-router-dom";


const AdminRoute = () => {
    const {user, loading}=useContext(AuthContext);
    const [isAdmin, isAdminLoading]=useAdmin();
    
    if(loading || isAdminLoading){
        return <div>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{form:location}} replace></Navigate>
};


export default AdminRoute;
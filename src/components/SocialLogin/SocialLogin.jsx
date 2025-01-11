import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const {signInWithGoogle}=useContext(AuthContext);
    const axiosPublic=useAxiosPublic();
    const navigate=useNavigate();

    const handleSignIn= ()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })
        })
    }
    return (
        <div className="my-4">
            <button onClick={handleSignIn} className="btn w-full">
                <FaGoogle></FaGoogle>Login with Google
            </button>
            
        </div>
    );
};

export default SocialLogin;
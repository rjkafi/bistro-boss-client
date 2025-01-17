import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";



const SignUp = () => {
    const axiosPublic=useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const {createUser,updateUserProfile}=useContext(AuthContext);
    const navigate=useNavigate();

  const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('user profile info updated')
                        // create use info to save database
                        const userInfo={
                            name:data.name,
                            email:data.email
                        }
                        axiosPublic.post('/users', userInfo)
                        .then(res =>{
                            if(res.data.insertedId){
                                console.log('user Added to the database')
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');  
                            }
                        })
                    })
                    .catch(error => console.log(error))
            })
    };
    return (
        <>
        <Helmet>
            <title>Bistro Boss || SignUp</title>
        </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" defaultValue="test" {...register("name", { required: true })} name="name" placeholder="Enter your name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" defaultValue="test" {...register("photoURL", { required: true })}  placeholder="Enter PhotoURL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-500">PhotoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue="test" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" defaultValue="test" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 14,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password  is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must be 6 characters</p>
                                )}
                                {errors.password?.type === "MaxLength" && (
                                    <p className="text-red-600">Password must be less 14 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must be one Uppercase,
                                        one lowercase, one number</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <div className="divider">OR</div>
                            <SocialLogin></SocialLogin>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import toast from 'react-hot-toast';
import Loading from '../Loding/Loading';
import useHooks from '../../hooks/useHooks';



const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [currentUser, currentLoading, currentError] = useAuthState(auth);
  const [signInWithGoogle, geUser,gLoading, gError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm();
      const onSubmit = async({email,password}) => {
       if(email && password) {
       await signInWithEmailAndPassword(email, password);
       }
         
      };
      const {token} = useHooks( geUser || user)
      
      
      if(currentUser){
        navigate(from, { replace: true });
      }
      
      if(user || geUser){
        if(token) {
          navigate('home')
        }
        return toast.success("Login Successfully", { id: 1 });
      }
      if(loading || gLoading){
        return <Loading/>
      }
    return (
        <div className="flex justify-center pt-[10vh]">
      <div className="card w-42 md:w-[420px] bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="text-center font-bold text-xl">LOGIN</h3>
          <form onSubmit={handleSubmit(onSubmit)} >

         
          <div className="form-control w-full  ">
            <label className="label">
              <span className="label-text">E-Mail</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="E-mail"
              className="input  w-full input-bordered  "
            />
           {errors?.email &&  <small className="text-red-600 p-1"><span className="  font-bold text-black">x</span>
<span className="px-2">email empty </span></small> }
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                   required: true,
               })}
              type="password"
              placeholder="password"
              className="input  w-full input-bordered  "
            />
           {errors?.password &&  <small className="text-red-600 p-1"><span className="  font-bold text-black">x</span>
<span className="px-2">password empty</span></small> }
          </div>
         
  <label className="cursor-pointer flex items-center pt-4">
    <input  {...register("checkbox")}
     type="checkbox"   className="checkbox" />
    <span className="label-text px-4">Remember me</span> 
  </label>


          <input
            className="btn btn-primary w-full mt-6"
            type="submit"
            value="LOGIN"
          />
          <p className="text-sm pt-1 text-blue-700">
            Create new Account{" "}
            <Link className="underline font-bold" to="/sign-up">
              SIGN UP
            </Link>{" "}
          </p>

          </form>
          
          <div className="divider">OR</div>
          <div onClick={()=>signInWithGoogle()} className="flex items-center justify-center px-2 border py-2 rounded-xl">
            <span className="pr-4">
              <FcGoogle size={30} />
            </span>
            <button className="md:text-xl uppercase font-semibold ">
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;
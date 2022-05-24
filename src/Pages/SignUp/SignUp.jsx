import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate} from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import toast from "react-hot-toast";
import Loading from "../Loding/Loading";

const SignUp = () => {
  const navigate = useNavigate()
 
  
  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
  const [signInWithGoogle, geUser,gLoading, gError] = useSignInWithGoogle(auth);
  
  const [createUserWithEmailAndPassword, user, loading, error] =
  useCreateUserWithEmailAndPassword(auth);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ name, email, password, checkbox }) => {
    if (name && email && password) {
      if (checkbox) {
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
      } else {
        toast.error("trems and conditons Unchecked", { id: 1 });
      }
    }
  };
  if (user || geUser) {
    navigate('/')
    return toast.success("Sign Up Successfully", { id: 1 });
    
  }
  if (error || gError) {
    return toast.error("Something went wrong", { id: 1 });
  }
 
  if(loading || gLoading){
   return <Loading/>
  }
  return (
    <div className="flex justify-center pt-[10vh]">
      <div className="card w-42 md:w-[450px] bg-base-100 shadow-xl">
        <div  className="card-body">

          <h3 className="text-center font-bold text-xl">SIGN UP</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full  ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: true, maxLength: 20 })}
              type="text"
              placeholder="Your Name"
              className="input  w-full input-bordered  "
            />
            {errors?.name && (
              <small className="text-red-600 p-1">
                <span className="  font-bold text-black">x</span>
                <span className="px-2">max length 20 characters </span>
              </small>
            )}
          </div>
          <div className="form-control w-full  ">
            <label className="label">
              <span className="label-text">E-Mail</span>
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              type="email"
              placeholder="E-mail"
              className="input  w-full input-bordered  "
            />
            {errors?.email && (
              <small className="text-red-600 p-1">
                <span className="  font-bold text-black">x</span>
                <span className="px-2">invalid email</span>
              </small>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              type="password"
              placeholder="password"
              className="input  w-full input-bordered  "
            />
            {errors?.password && (
              <small className="text-red-600 p-1">
                <span className="  font-bold text-black">x</span>
                <span className="px-2">should be 6 characters </span>
              </small>
            )}
          </div>
          <label className="cursor-pointer flex items-center pt-4">
            <input {...register("checkbox")} type="checkbox" className="checkbox" />
            <span className="label-text px-4">
              I agree <span className="underline text-blue-800">terms </span>and{" "}
              <span className="underline text-blue-800"> conditions </span>
            </span>
          </label>
           <input
            className="btn btn-primary w-full mt-6"
            type="submit"
            value="SIGN UP"
          />
          <p className="text-sm pt-1 text-blue-700">
            Already have an Account?{" "}
            <Link className="underline font-bold" to="/login">
              LOGIN
            </Link>{" "}
          </p>
          </form>
          <div className="divider">OR</div>
          <div onClick={()=>signInWithGoogle()} className="flex items-center justify-center px-2 border py-2 rounded-xl">
            <span className="pr-4">
              <FcGoogle size={30} />
            </span>
            <button  className="md:text-xl uppercase font-semibold ">
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

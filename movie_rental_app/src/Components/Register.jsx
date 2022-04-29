import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  username: yup.string().min(5).max(25).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(10).required(),
  confirmPass: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  isAdmin: yup.boolean(),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-10">
      <div className="register-container flex justify-center m-2">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md ">
          <span className="header-font p-8 mb-8">
            Register Yourself Here !!
          </span>
          <form className="m-8" onSubmit={handleSubmit(onSubmitHandler)}>
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                // id="exampleInput126"
                placeholder="User name"
              />
              <p className="text-red-900">{errors.username?.message}</p>
            </div>
            <div class="form-group mb-6">
              <input
                type="email"
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                // id="exampleInput125"
                placeholder="Email address"
                {...register("email")}
              />
              <p className="text-red-900">{errors.email?.message}</p>
            </div>
            <div className="form-group mb-6">
              <input
                type="password"
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                // id="exampleInput126"
                placeholder="Password"
                {...register("password")}
              />
              <p className="text-red-900">{errors.password?.message}</p>
            </div>
            <div className="form-group mb-6">
              <input
                type="password"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                // id="exampleInput126"
                placeholder="Confirm Password"
                {...register("confirmPass")}
              />
              <p className="text-red-900">{errors.confirmPass?.message}</p>
            </div>
            <div className="form-group form-check  mb-6">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="exampleCheck25"
                {...register("isAdmin")}
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="exampleCheck25"
              >
                is Admin
              </label>
              <p className="text-red-900">{errors.isAdmin?.message}</p>
            </div>
            <button
              className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Sign up
            </button>
            <div className="mt-7">
              <div className="flex justify-center items-center">
                <label className="mr-2">Existing User ?</label>
                <a
                  href="#"
                  className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  <Link to="/app/login">Sign in</Link>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const Login = () => {
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
      <div className="flex flex-col items-center justify-center">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <h2>Lets Sign you In !</h2>
          <br />

          <input
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
            {...register("email")}
            placeholder="Email"
            type="email"
            required
          />
          <p>{errors.email?.message}</p>
          <br />

          <input
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
            {...register("password")}
            placeholder="Password"
            type="password"
            required
          />
          <p>{errors.email?.message}</p>
          <br />

          <button
            type="submit"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

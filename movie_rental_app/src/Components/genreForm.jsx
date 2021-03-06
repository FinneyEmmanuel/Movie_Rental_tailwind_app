import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
//import { getGenre } from "../Service/genre";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addGenre, updateGenre } from "../resources/genre/genreSlice";
//import { useSelector } from "react-redux";

const schema = yup.object().shape({
  name: yup.string().min(3).max(20).required(),
});

function Genreform() {
  const params = useParams();
  const genres = useSelector((state) => state.genreReducer.genres);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const genreId = params.genreId;
    if (!genreId) return;
    const genre = genres.find((g) => g._id === params.genreId);
    if (!genre) return;
    setValue("name", genre.name);
    setValue("_id", genre._id);
  });

  // useSelector(() => {
  //   const genreId = params.genreId;
  // });

  const dispatch = useDispatch();
  const onSubmitHandler = (data) => {
    console.log({ data });
    if (!data._id) {
      dispatch(
        addGenre({
          _id: nanoid(),
          name: data.name,
        })
      );
      navigate("/Genres");
    } else {
      dispatch(updateGenre(data));
      navigate("/Genres");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-10">
      <div className="flex  items-center   justify-center bg-gery-300 mt-20">
        <div className="px-8 py-3  mt-1000   text-left bg-green-200 shadow-lg">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <h2 className="text-2xl"> Add Genre </h2>
            <br />
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
              {...register("name")}
              placeholder="Enter name"
              type="text"
              required
            ></input>
            <br />
            <p> {errors.name?.message}</p>
            <button
              className="px-6 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-900"
              type="submit"
            >
              Add Genre
            </button>

            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Genreform;

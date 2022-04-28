import React, { useEffect } from "react";
import { getGenres } from "../Service/genre";
import { getMovie } from "../Service/movie";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useParams } from "react-router-dom";
// import { data } from "autoprefixer";

const schema = yup.object().shape({
  title: yup.string().min(3).max(20).required(),
  genre: yup.string().min(3).max(20).required(),
  numberInStock: yup.string().min(3).max(20).required(),
  dailyRentalRate: yup.string().min(3).max(20).required(),
});

function MovieForm() {
  const params = useParams();

  const genres = getGenres();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const movieId = params.movieId;
    if (!movieId) return;
    const movie = getMovie(movieId);
    if (!movie) return;
    setValue("title", movie.title);
    setValue("_id", movie._id);
    setValue("genre", movie.genre);
    setValue("dailyRentalRate", movie.dailyRentalRate);
    setValue("numberInStock", movie.numberInStock);
    setValue("liked", movie.liked);
    // setValue("dailyRentalRate", movie.dailyRentalRate);
    // setValue("");
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-10">
      <div className="flex  items-center   justify-center bg-gery-300 mt-20">
        <div className="px-8 py-3  mt-1000   text-left bg-green-200 shadow-lg">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <h2 className="text-2xl"> Add Movie </h2>
            <br />
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
              {...register("title")}
              placeholder="Enter Movie Title"
              type="text"
              required
            ></input>
            <br />
            <p> {errors.title?.message}</p>
            <div className="w-full px-4 py-2 mt-2 border rounded-md">
              <label for="genre">Genre : </label>

              <select name="genre" id="genre">
                {genres.map((g) => (
                  <option value={g.name}>{g.name}</option>
                ))}
              </select>
            </div>
            {/* <input
              className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
              {...register("genre")}
              placeholder="Genre"
              type="text"
              required
            ></input>
            <br />
            <p> {errors.genre?.message}</p> */}
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
              {...register("name")}
              placeholder="Number In Stock"
              type="text"
              required
            ></input>
            <br />
            <p> {errors.numberInStock?.message}</p>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
              {...register("name")}
              placeholder="Daily Rental Rate"
              type="text"
              required
            ></input>
            <br />
            <p> {errors.dailyRentalRate?.message}</p>
            <button
              className="px-6 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-900 mt-2"
              type="submit"
            >
              Add Movie
            </button>

            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
export default MovieForm;

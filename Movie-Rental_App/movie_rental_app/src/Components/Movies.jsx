import React, { useState } from "react";
import { getMovies } from "../Service/movie";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());
  function handleDelete(id) {
    const movie = movies.filter((movies) => movies._id !== id);
    setMovies(movie);
  }
  return (
    <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-10 px-10">
      <div className="ml-20 mr-20 mt-10 ">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Movie Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Genre
                </th>
                <th scope="col" className="px-6 py-3">
                  Daily Rental Rate
                </th>
                <th scope="col" className="px-6 py-3">
                  Number In Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Likes
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {movies.map((m) => (
                <tr
                  className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700"
                  key={m.title}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    <Link to={`/movies/${m._id}`}>{m.title}</Link>
                  </th>

                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {m.genre.name}
                  </th>
                  <td className="px-6 py-4">{m.dailyRentalRate}</td>
                  <td className="px-6 py-4">{m.numberInStock}</td>
                  <td className="px-6 py-4">
                    {m.liked === true ? (
                      <ion-icon
                        className="text-red-600"
                        name="heart"
                      ></ion-icon>
                    ) : (
                      <ion-icon name="heart-empty"></ion-icon>
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="text-white  bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      onClick={() => handleDelete(m._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <button>
              <Link to="/movies/new">Add Movie</Link>
            </button>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Movies;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteGenre } from "../resources/genre/genreSlice";
import { Link } from "react-router-dom";

const Genres = () => {
  const genres = useSelector((state) => state.genreReducer.genres);
  const dispatch = useDispatch();
  // function handleDelete(id) {
  //   const genre = genres.filter((genres) => genres._id !== id);
  //   setGenres(genre);
  // }

  return (
    <div className="h-screen bg-gradient-to-tl from-green-900 to-red-900 w-full py-16 px-10">
      <div className="ml-96 mr-96 mt-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-blue-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {/* <th scope="col" className="px-6 py-3">
                  Genre Id
                </th> */}

                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 ml-4">
                  Delete
                </th>
              </tr>
            </thead>

            <tbody>
              {genres.map((g) => (
                <tr
                  key={g._id}
                  className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700 "
                >
                  {/* <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {g._id}
                  </th> */}
                  {/* <td className="px-6 py-4">{g.name}</td> */}
                  <td className="ml-2">
                    <Link to={`/Genres/${g._id}`}>{g.name}</Link>
                  </td>

                  <td className="px-6 py-4">
                    <button
                      type="button"
                      onClick={() => dispatch(deleteGenre(g._id))}
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/Genres/new">
            {" "}
            <button
              className=" text-white bg-gradient-to-r from-red-400 
                via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5
                 py-2.5 text-center mr-2 mb-2 flex justify-content-center"
            >
              Add Genre
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Genres;

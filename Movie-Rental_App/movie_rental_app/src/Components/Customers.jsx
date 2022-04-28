import React, { useState } from "react";
import { getCustomers } from "../Service/customer";
import { Link } from "react-router-dom";

const Customers = () => {
  const [customers, setCustomers] = useState(getCustomers());
  function handleDelete(id) {
    const customer = customers.filter((customers) => customers._id !== id);
    setCustomers(customer);
  }
  return (
    <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-10">
      <div className="ml-20 mr-20 mt-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  IsGold
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr
                  key={c.name}
                  className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  {/* <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {c.name}
                  </th> */}
                  <td className="px-6 py-4">
                    <Link to={`/customers/${c._id}`}>{c.name}</Link>
                  </td>

                  <td className="px-6 py-4">{c.phone}</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {c.isGold}
                  </td>

                  <td className="px-6 py-4">
                    <button
                      type="button"
                      onClick={() => handleDelete(c._id)}
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <Link to="/customers/new">
              {" "}
              <button
                className=" text-white bg-gradient-to-r from-red-400 
                via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5
                 py-2.5 text-center mr-2 mb-2"
              >
                Add Customer
              </button>{" "}
            </Link>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;

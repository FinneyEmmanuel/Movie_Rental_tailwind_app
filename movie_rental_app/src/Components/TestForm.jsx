import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { getCustomer } from "../Service/customer";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../resources/customer/customerSlice";
import { updateCustomer } from "../resources/customer/customerSlice";

const schema = yup.object().shape({
  name: yup.string().min(3).max(20).required(),
  phone: yup.string().min(7).max(10).required(),
  isGold: yup.string().min(3).max(20).required(),
});

function TestForm() {
  const params = useParams();
  const navigate = useNavigate();
  const customers = useSelector((state) => state.customerReducer.customers);

  //   const customers = getCustomer();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const customerId = params.customerId;
    if (!customerId) return;
    const customer = customers.find((c) => c._id === params.customerId);
    if (!customer) return;
    setValue("name", customer.name);
    setValue("_id", customer._id);
    setValue("phone", customer.phone);
    setValue("isGold", customer.isGold);
  });
  const dispatch = useDispatch();
  const onSubmitHandler = (data) => {
    console.log({ data });
    if (!data._id) {
      dispatch(
        addCustomer({
          _id: nanoid,
          name: data.name,
          phone: data.phone,
          isGold: data.isGold,
        })
      );
      navigate("/Customers");
    } else {
      dispatch(updateCustomer(data));
      navigate("/Customers");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-10">
      <div className="flex  items-center   justify-center bg-gery-300 mt-20">
        <div className="px-8 py-3  mt-1000   text-left bg-green-200 shadow-lg">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <h2 className="text-2xl"> Add Customer </h2>
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
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
              {...register("phone")}
              placeholder="Enter Phone Number"
              type="text"
              required
            ></input>
            <br />
            <p> {errors.phone?.message}</p>
            <br />
            <input
              type="checkbox"
              //   className="w-full px-4 py-2 mt-2 border rounded-md
              //    focus:outline-none focus:ring-1 focus:ring-blue-600"
              {...register("isGold")}
            />{" "}
            Gold <br />
            <p> {errors.isGold?.message}</p>
            {/* <input type="checkbox" id="isGold" name="isGold" value="isGold">
              <label for="isGold"> IsGold </label>

              {customers.map((c) => (
                <option value={c.isGold}>{c.isGold}</option>
              ))}
            </input> */}
            <button
              className="px-6 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-900"
              type="submit"
            >
              Submit
            </button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
export default TestForm;

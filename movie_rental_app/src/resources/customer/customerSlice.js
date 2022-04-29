import { createSlice } from "@reduxjs/toolkit";
import { getCustomers } from "../../Service/customer";

const initialState = {
  customers: getCustomers(),
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    deleteCustomer: (state, action) => {
      const index = state.customers.findIndex((c) => c._id === action.payload);
      state.customers.splice(index, 1);
    },
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    updateCustomer: (state, action) => {
      const index = state.customers.findIndex(
        (c) => c._id === action.payload._id
      );
      state.customers.splice(index, 1, action.payload);
    },
  },
});

export const { deleteCustomer, addCustomer, updateCustomer } =
  customerSlice.actions;
export default customerSlice.reducer;

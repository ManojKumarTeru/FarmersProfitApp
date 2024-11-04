import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./redux/Cartreducer";

export default configureStore({
  reducer: {
    cart: CartSlice,
  },
});
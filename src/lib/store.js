import { configureStore } from "@reduxjs/toolkit";
import { interfaceReducer } from "./features/reducer/interfaceReducer";
import { counterReducer } from "./features/reducer/counterReducer";
import { productsReducer } from "./features/reducer/productsReducer";

const store = configureStore({
  reducer: {
    interface: interfaceReducer,
    counter: counterReducer,
    products: productsReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { interfaceReducer } from "./features/reducer/interfaceReducer";

const store = configureStore({
  reducer: {
    interface: interfaceReducer,
  },
});

export default store;

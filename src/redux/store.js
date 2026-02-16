import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./sliceBook";

// Redux store
export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
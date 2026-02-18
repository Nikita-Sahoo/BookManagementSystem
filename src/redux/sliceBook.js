import { createSlice } from "@reduxjs/toolkit";
import { bookDatas } from "../utils/bookDatas";

const initialState = {
  books: bookDatas,
};

const sliceBook = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    },
  },
});

// export const { addBook } = sliceBook.actions;
export default sliceBook.reducer;
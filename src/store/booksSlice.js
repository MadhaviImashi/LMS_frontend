import { createSlice } from "@reduxjs/toolkit";

//below is a slice of a Redux state
export const bookSlice = createSlice({
  name: "books",
  initialState: {
    value: [],
  },
  reducers: {
    setBooks: (state, action) => {
      state.value = action.payload;
      console.log("action: ", action);
      console.log("payload: ", action.payload[1]);
      console.log("state.value: ", state.value);
    },
    //updateBook() should be called to update the book details in real time, when handleReturn() or handleLend() is confirmed
    updateBook: (state, action) => {
      const id = action.payload.id; //action.payload contains the info of updated book
      const updatedBooks = [...state.value]; //spread values of current state.value array to a new array
      //find the index of the book belongs to this id from the updatedBooks array
      const index = updatedBooks.findIndex((element) => element.id === id);
      //now update the book belongs to that index of the array
      updatedBooks.splice(index, 1, action.payload); //this action.payload contains the new updated data of that book
      state.value = updatedBooks;
    },
  },
});

//Action creators are generated for each case reducer function
export const { setBooks, updateBook } = bookSlice.actions;

export default bookSlice.reducer;

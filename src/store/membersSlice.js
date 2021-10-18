import { createSlice } from "@reduxjs/toolkit";

//below is a slice of a Redux state
export const memberSlice = createSlice({
  name: "members",
  initialState: {
    value: [],
  },
  reducers: {
      setMembers: (state, action) => {
          state.value = action.payload;
          console.log(" member action: ", action);
          console.log("member payload: ", action.payload[1]);
          console.log("member state.value: ", state.value);
      },
      //updateBook() should be called to update the book details in real time, when handleReturn() or handleLend() is confirmed
      updateMember: (state, action) => {
          const id = action.payload.id; //action.payload contains the info of updated book
          const updatedMembers = [...state.value]; //spread values of current state.value array to a new array
          //find the index of the book belongs to this id from the updatedBooks array
          const index = updatedMembers.findIndex((element) => element.id === id);
          //now update the book belongs to that index of the array
          updatedMembers.splice(index, 1, action.payload); //this action.payload contains the new updated data of that book
          state.value = updatedMembers;
      },

      addMember: (state, action) => {
          const updatedMembers = [...state.value];
          const newMember = action.payload;
          updatedMembers.push(newMember);
          state.value = updatedMembers;
      },

      deleteMember: (state, action) => {
          const id = action.payload.id;
          const updatedMembers = [...state.value];
          const index = updatedMembers.findIndex((element) => element.id === id);
          updatedMembers.splice(index, 1);
          state.value = updatedMembers;
      },
  },
});

//Action creators are generated for each case reducer function
export const { setMembers, updateMember, addMember, deleteMember } = memberSlice.actions;

export default memberSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: "test",
    initialState: {
      name: "",
      surname: ""
    },
    reducers: {
        addName: (state, action) => {
            state.name = action.payload
        },
        addSurname: (state, action) => {
            state.surname = action.payload
        }
    },
  });
  export const testActions = testSlice.actions  
  export const testREducer = testSlice.reducer
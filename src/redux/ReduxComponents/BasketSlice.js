import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
      data: JSON.parse(localStorage.getItem("root")) || [],
    },
    reducers: {
      addToBasket: (state, action) => {
          console.log(state);
          state.data.push(action.payload)
      },
      RemoveToBasket: (state, action) => {
        state.data = state.data.filter((todo) => todo.id !== action.payload.id)
      }
    },
  });
  
  export const basketActions = basketSlice.actions
  export const BasketREducer = basketSlice.reducer
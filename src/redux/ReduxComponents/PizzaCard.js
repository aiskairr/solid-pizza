import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../api/api";

export const getallPizzas = createAsyncThunk(
  "pizzas/GET_ALL_PIZZAS",
  async () => {
    const res = await Api.getPizza()
    return res.data
  }
)

const pizzasSlice = createSlice({
    name: "pizzas",
    initialState: {
      data: [],
      isLoading: true
    },
    reducers: {
      addPizzas: (state, action) => {
        state.data = action.payload
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getallPizzas.fulfilled, ( state , action) => {
        state.isLoading = false
        state.data = action.payload
      })
    }
  });
  export const PizzaActions = pizzasSlice.actions  
  export const PizzaREducer = pizzasSlice.reducer
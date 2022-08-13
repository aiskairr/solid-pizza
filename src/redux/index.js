import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: {
    data: [],
  },
  reducers: {
    addPizzas: (state) => {
      console.log(state);
    },
  },
});

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    data: [],
  },
  reducers: {
    addToBasket: (state) => {
        console.log(state);
        state.data.push(1)
    }
  },
});

export const basketActions = basketSlice.actions

const reducers = combineReducers({
    pizzas: pizzasSlice.reducer,
    basket: basketSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});

window.store = store;

console.log(store);
console.log(store.getState());

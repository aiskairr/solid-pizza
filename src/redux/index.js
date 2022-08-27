import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BasketREducer } from "./ReduxComponents/BasketSlice";
import { PizzaREducer } from "./ReduxComponents/PizzaCard";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { testREducer } from "./ReduxComponents/TestSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  pizzas: PizzaREducer,
  basket: BasketREducer,
  test: testREducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

window.store = store;

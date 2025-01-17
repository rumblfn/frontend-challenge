import { configureStore } from "@reduxjs/toolkit";
import { catsReducer } from "./cats/catsReducer";
import { favCatsReducer } from "./cats/favCatsReducer";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['favCats']
};

const reducers = combineReducers({ 
  cats: catsReducer,
  favCats: favCatsReducer
});
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

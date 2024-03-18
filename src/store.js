import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./redux/userReducer";
import { postReducer } from "./redux/postReducer";

export const store = configureStore({ reducer: { userReducer, postReducer } });

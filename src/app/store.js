import { configureStore } from "@reduxjs/toolkit";
import posts from "./posts";
// import loadingSlicer from "./loading";

export const store = configureStore({
  reducer: {
    posts,
    // loading: loadingSlicer,
  },
});

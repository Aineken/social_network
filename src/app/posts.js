import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPosts,
} from "../actions/posts";

const initialState = {
  posts: [],
  loading: true,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.pending, (state, action) => {
        state.loading = true;
        state.posts = action.payload;
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const { createPost, deletePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;

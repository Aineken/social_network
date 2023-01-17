import axios from "axios";

const url = "https://my-json-server.typicode.com/aineken/json-data/data";

export const getPosts = () => axios.get(url);

// export const getOnePost = (id) => axios.get(`${url}/${id}`);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const updatePost = (postToUpdate) =>
//   axios.patch(`${url}/${postToUpdate.id}`, postToUpdate);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);

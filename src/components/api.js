import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts"; // Sample API

// Get all posts
export const fetchPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new post
export const addPost = async (post) => {
  const response = await axios.post(API_URL, post);
  return response.data;
};

// Update a post
export const updatePost = async (id, updatedPost) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedPost);
  return response.data;
};

// Delete a post
export const deletePost = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

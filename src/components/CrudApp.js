import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const CrudApp = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [editingPost, setEditingPost] = useState(null);

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(API_URL);
      setPosts(response.data.slice(0, 5)); // Limit to 5 for simplicity
    };
    fetchPosts();
  }, []);

  // Add a new post
  const handleAddPost = async () => {
    if (!newPost.title || !newPost.body) return;
    const response = await axios.post(API_URL, newPost);
    setPosts([...posts, response.data]);
    setNewPost({ title: "", body: "" });
  };

  // Update a post
  const handleUpdatePost = async () => {
    if (!editingPost.title || !editingPost.body) return;
    const response = await axios.put(`${API_URL}/${editingPost.id}`, editingPost);
    setPosts(posts.map((post) => (post.id === editingPost.id ? response.data : post)));
    setEditingPost(null);
  };

  // Delete a post
  const handleDeletePost = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">CRUD App</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Body</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="py-2 px-4 border-b">{post.id}</td>
              <td className="py-2 px-4 border-b">{post.title}</td>
              <td className="py-2 px-4 border-b">{post.body}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => setEditingPost(post)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Post Form */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">{editingPost ? "Edit Post" : "Add New Post"}</h2>
        <input
          type="text"
          placeholder="Title"
          value={editingPost ? editingPost.title : newPost.title}
          onChange={(e) =>
            editingPost
              ? setEditingPost({ ...editingPost, title: e.target.value })
              : setNewPost({ ...newPost, title: e.target.value })
          }
          className="border p-2 rounded w-full mb-3"
        />
        <textarea
          placeholder="Body"
          value={editingPost ? editingPost.body : newPost.body}
          onChange={(e) =>
            editingPost
              ? setEditingPost({ ...editingPost, body: e.target.value })
              : setNewPost({ ...newPost, body: e.target.value })
          }
          className="border p-2 rounded w-full mb-3"
        ></textarea>
        {editingPost ? (
          <button onClick={handleUpdatePost} className="bg-blue-500 text-white py-2 px-4 rounded">
            Update Post
          </button>
        ) : (
          <button onClick={handleAddPost} className="bg-green-500 text-white py-2 px-4 rounded">
            Add Post
          </button>
        )}
      </div>
    </div>
  );
};

export default CrudApp;

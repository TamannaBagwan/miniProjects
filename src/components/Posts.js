import React, { useEffect, useState } from "react";
import { fetchPosts, addPost, updatePost, deletePost } from "./api";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [editingPost, setEditingPost] = useState(null);

  // Fetch posts
  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  // Handle form submit (Create & Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingPost) {
      const updated = await updatePost(editingPost.id, newPost);
      setPosts(posts.map((p) => (p.id === editingPost.id ? updated : p)));
      setEditingPost(null);
    } else {
      const added = await addPost(newPost);
      setPosts([...posts, added]);
    }
    setNewPost({ title: "", body: "" });
  };

  // Handle delete
  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter((p) => p.id !== id));
  };

  // Handle edit
  const handleEdit = (post) => {
    setEditingPost(post);
    setNewPost({ title: post.title, body: post.body });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-start lg:items-center">
      <div className="w-full lg:max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">CRUD App</h1>

        {/* Add/Edit Post Form */}
        <div className="mb-6 w-full">
          <h2 className="text-xl font-bold mb-4">
            {editingPost ? "Edit Post" : "Add New Post"}
          </h2>
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            className="border p-2 rounded w-full mb-3"
          />
          <textarea
            placeholder="Body"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            className="border p-2 rounded w-full mb-3"
          ></textarea>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            {editingPost ? "Update Post" : "Add Post"}
          </button>
        </div>

        {/* Posts List */}
        <div className="w-full">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow mb-4 border">
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
              <div className="mt-3">
                <button
                  onClick={() => handleEdit(post)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;

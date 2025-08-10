import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authors, categories } from "../data/data";
import type { Post } from "../types";
import { usePosts } from '../hooks/useposts';

interface FormData {
  title: string;
  content: string;
  authorId: string;
  categoryId: string;
  tags: string;
}

const ManagePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { posts, addPost, updatePost } = usePosts();

  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
    authorId: authors[0]?.id || "",
    categoryId: categories[0]?.id || "",
    tags: "",
  });

  useEffect(() => {
    if (postId) {
      const postToEdit = posts.find((p) => p.id === postId);
      if (postToEdit) {
        setFormData({
          title: postToEdit.title,
          content: postToEdit.content,
          authorId: postToEdit.authorId,
          categoryId: postToEdit.categoryId,
          tags: (postToEdit.tags ?? []).join(", "),
        });
      }
    }
  }, [postId, posts]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid =
    formData.title.trim() !== "" &&
    formData.content.trim() !== "" &&
    formData.authorId.trim() !== "" &&
    formData.categoryId.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      alert("Please fill in all required fields.");
      return;
    }

    const updatedPost: Post = {
      id: postId || `post${posts.length + 1}`,
      title: formData.title.trim(),
      content: formData.content.trim(),
      authorId: formData.authorId,
      categoryId: formData.categoryId,
      tags: formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      image: "",
    };

    if (postId) {
      updatePost(updatedPost);
    } else {
      addPost(updatedPost);
    }

    navigate(`/post/${updatedPost.id}`);
  };

  return (
    <main className="container my-5" style={{ maxWidth: "700px" }}>
      <div className="card shadow-sm border-0 p-4">
        <h1 className="mb-4 text-center fw-bold text-primary">
          {postId ? "Edit Post" : "Create New Post"}
        </h1>
        <form onSubmit={handleSubmit} aria-label="Manage post form" noValidate>
          <div className="row mb-4 align-items-center">
            <label
              htmlFor="title"
              className="col-12 col-md-4 col-form-label fs-5 fw-semibold"
            >
              Title <span className="text-danger">*</span>
            </label>
            <div className="col-12 col-md-8">
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Enter post title"
                className="form-control form-control-lg"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="row mb-4 align-items-start">
            <label
              htmlFor="content"
              className="col-12 col-md-4 col-form-label fs-5 fw-semibold"
            >
              Content <span className="text-danger">*</span>
            </label>
            <div className="col-12 col-md-8">
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Write your post content here..."
                className="form-control form-control-lg"
              />
            </div>
          </div>

          <div className="row mb-4 align-items-center">
            <label
              htmlFor="authorId"
              className="col-12 col-md-4 col-form-label fs-5 fw-semibold"
            >
              Author <span className="text-danger">*</span>
            </label>
            <div className="col-12 col-md-8">
              <select
                id="authorId"
                name="authorId"
                value={formData.authorId}
                onChange={handleChange}
                required
                className="form-select form-select-lg"
              >
                {authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row mb-4 align-items-center">
            <label
              htmlFor="categoryId"
              className="col-12 col-md-4 col-form-label fs-5 fw-semibold"
            >
              Category <span className="text-danger">*</span>
            </label>
            <div className="col-12 col-md-8">
              <select
                id="categoryId"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                required
                className="form-select form-select-lg"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row mb-5 align-items-center">
            <label
              htmlFor="tags"
              className="col-12 col-md-4 col-form-label fs-5 fw-semibold"
            >
              Tags <small className="text-muted">(comma separated)</small>
            </label>
            <div className="col-12 col-md-8">
              <input
                id="tags"
                name="tags"
                type="text"
                value={formData.tags}
                onChange={handleChange}
                placeholder="react, hooks, state"
                className="form-control form-control-lg"
                autoComplete="off"
                style={{ fontStyle: "italic" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 offset-md-4 col-md-8">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`btn btn-primary btn-lg w-100 ${
                  !isFormValid ? "opacity-50" : ""
                }`}
                aria-disabled={!isFormValid}
              >
                {postId ? "Update Post" : "Create Post"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ManagePost;

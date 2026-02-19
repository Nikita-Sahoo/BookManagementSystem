import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/sliceBook";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    publishedDate: "",
    pages: "",
    category: "",
    coverImage: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    for (let key in form) {
      if (!form[key]) {
        alert("All fields are required!");
        return;
      }
    }

    dispatch(
      addBook({
        ...form,
        id: Date.now(),
        pages: Number(form.pages),
      })
    );

    navigate("/books");
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        ➕ Add New Book
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block mb-1 font-semibold">Author</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Published Date */}
        <div>
          <label className="block mb-1 font-semibold">Published Date</label>
          <input
            type="date"
            name="publishedDate"
            value={form.publishedDate}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Pages */}
        <div>
          <label className="block mb-1 font-semibold">Pages</label>
          <input
            type="number"
            name="pages"
            value={form.pages}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          >
            <option value="">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </div>

        {/* Cover Image */}
        <div>
          <label className="block mb-1 font-semibold">Cover Image URL</label>
          <input
            type="url"
            name="coverImage"
            value={form.coverImage}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            className="border p-2 w-full rounded"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded w-full hover:bg-blue-700 transition"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
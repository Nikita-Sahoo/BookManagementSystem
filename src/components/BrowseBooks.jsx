import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books?.books || []); 
   console.log(books);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchCategory = category? book.category.toLowerCase() === category.toLowerCase() : true;

    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="p-6 mx-30">
      <h2 className="text-2xl font-bold mb-4">Browse Books</h2>

      <input
        type="text"
        placeholder="Search by title or author..."
        className="border p-2 w-full mb-6 rounded"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-5 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg shadow-md p-4 hover:shadow-xl transition"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="h-60 w-full  rounded"
            />

            <h3 className="font-bold text-lg mt-3">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>
            <p className="text-sm font-bold text-gray-500">
              {book.category} 
            </p>
            <p className="text-yellow-500 font-semibold mt-1">
              ⭐ {book.rating}
            </p>
            <p className="text-sm text-gray-500">
              {book.pages} pages • {book.publishedDate}
            </p>
             

            <Link
              to={`/book/${book.id}`}
              className="text-blue-600 mt-2 inline-block font-semibold">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;
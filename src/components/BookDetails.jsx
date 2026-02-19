import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-red-500">
          Book Not Found
        </h2>
        <Link to="/books" className="text-blue-600 mt-4 inline-block">
          ← Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        📖 Book Details
      </h1>

      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-6">
        
        {/* Book Image */}
        <div>
          <img
            src={book.coverImage}
            alt={book.title}
            className="rounded-lg shadow-md w-full h-[500px] "
          />
        </div>

        {/* Book Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{book.title}</h2>

          <p>
            <strong>Author:</strong> {book.author}
          </p>

          <p>
            <strong>Category:</strong> {book.category}
          </p>

          <p>
            <strong>Published Date:</strong> {book.publishedDate}
          </p>

          <p>
            <strong>Pages:</strong> {book.pages}
          </p>

          <p>
            <strong>Description:</strong>
          </p>
          <p className="text-gray-600">{book.description}</p>

          <Link
            to="/books"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            ← Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
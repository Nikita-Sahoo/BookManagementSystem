import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">📚 Welcome to Book Library</h1>
      <p className="text-gray-600 mb-8">
        Browse books by category and explore your favorite reads.
      </p>

      <div className="flex justify-center gap-6">
        <Link
          to="/books/Fiction"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg">
          Fiction
        </Link>

        <Link
          to="/books/Non-Fiction"
          className="bg-green-500 text-white px-6 py-3 rounded-lg">
          Non-Fiction
        </Link>

        <Link
          to="/books/Sci-Fi"
          className="bg-purple-500 text-white px-6 py-3 rounded-lg">
          Sci-Fi
        </Link>
      </div>
    </div>
  );
}

export default Home;
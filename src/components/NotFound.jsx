import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-lg w-full">

        {/* Title */}
        <h1 className="text-5xl font-bold text-red-600 mb-4">
          🚫 404
        </h1>

        {/* Message */}
        <p className="text-lg text-gray-700 mb-2">
          Page Not Found
        </p>

        <p className="text-gray-500 mb-4">
          The path <span className="font-semibold">{location.pathname}</span> does not exist.
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
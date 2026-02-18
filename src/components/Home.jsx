import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to Online Library 📖</h2>

      <div className="space-x-4">
        <Link to="/books/Fiction" className="bg-blue-500 px-4 py-2 text-white rounded">
          Fiction
        </Link>
        <Link to="/books/Non-Fiction" className="bg-green-500 px-4 py-2 text-white rounded">
          Non-Fiction
        </Link>
        <Link to="/books/Sci-Fi" className="bg-purple-500 px-4 py-2 text-white rounded">
          Sci-Fi
        </Link>
      </div>
    </div>
  );
}

export default Home;
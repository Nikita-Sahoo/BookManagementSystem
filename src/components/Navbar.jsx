import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">📚 Online Library</h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="#">Browse Books</Link>
        <Link to="#">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";


function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname.includes("not-found");

  return (
    <>
      {!hideNavbar && <Navbar />}

      
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
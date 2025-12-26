import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Close menu on outside click (mobile)
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-green-700 text-white shadow-sm">
      {/* Logo */}
      <h1 className="text-3xl font-bold">
        <Link to="/">Annapurna Bhandar</Link>
      </h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-4">
        <Link to="/" className="hover:text-blue-950">
          Home
        </Link>

        <Link to="/options" className="hover:text-blue-950">
          Options
        </Link>

        <Link to="/cart" className="relative">
          <span className="text-2xl">🛒</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        <Link to="/about" className="hover:text-blue-950">
          About
        </Link>

      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden flex items-center gap-3 relative">
        {/* Cart */}
        <Link to="/cart" className="relative">
          <span className="text-2xl">🛒</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Three dots */}
        <button onClick={() => setOpen(!open)} className="text-2xl">
          ⋮
        </button>

        {/* Dropdown */}
        {open && (
          <div
            ref={menuRef}
            className="absolute right-0 top-12 w-40 bg-white text-black rounded-lg shadow-lg z-50"
          >
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Home
            </Link>

            <Link
              to="/options"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Options
            </Link>

            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Cart
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              About
            </Link>


          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

import { Link } from "react-router-dom";
import "./Header.css";
import Contact from "../models/Contact";
const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1 className="text-gray-500 hover:text-blue-500 hover:scale-110 transition-all duration-200">
          Contacts App
        </h1>
      </Link>
      <form className="max-w-md mx-auto">
        <label
          form="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative flex items-center">
          {/* Search Icon */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          {/* Search Input */}
          <input
            type="search"
            id="default-search"
            className="block w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
          />
        </div>
      </form>
      <Link to="/contact-form">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6  w-5 h-5 text-gray-500 hover:text-blue-500 hover:scale-110 transition-all duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </Link>
      <Link to="/contact-list">
        <h2 className="text-gray-500 hover:text-blue-500 hover:scale-110 transition-all duration-200">
          My Contacts
        </h2>
      </Link>
      <Link to="/favorites">
        <h2 className="text-gray-500 hover:text-blue-500 hover:scale-110 transition-all duration-200">
          My Favorites
        </h2>
      </Link>
    </header>
  );
};

export default Header;

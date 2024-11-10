import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Contact from "../models/Contact";
import { useState } from "react";

interface Props {
  contacts: Contact[];
}

const Header = ({ contacts }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload on "Enter"

    const contact = contacts.find(
      (contact) =>
        `${contact.firstName} ${contact.lastName}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        contact.phoneNumber.toString().includes(searchTerm)
    );

    if (contact) {
      navigate(`/contact/${contact.phoneNumber}`);
    } else {
      alert("Contact not found.");
    }
  };

  return (
    <header className="flex justify-center items-center p-4 bg-white shadow-md relative">
      {/* Centered Content Section */}
      <div className="flex flex-col items-center space-y-4 max-w-4xl w-full">
        <Link to="/">
          <h1 className="font-proxima text-blue-800 hover:text-blue-500 hover:scale-110 transition-all duration-200 font-bold text-5xl">
            CONTACTS APP
          </h1>
        </Link>
        <form onSubmit={handleSearch} className="w-full max-w-md">
          <div className="relative flex items-center">
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
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="block w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </form>
        <div className="flex flex-col sm:flex-row sm:space-x-6 sm:space-y-0">
          <Link to="/contact-list">
            <h2 className="font-proxima text-white text-transparent text-5xl hover:text-blue-500 hover:scale-110 transition-all duration-200 stroke-text">
              CONTACTS
            </h2>
          </Link>
          <Link to="/favorites">
            <h2 className="text-gray-500 hover:text-blue-500 hover:scale-110 transition-all duration-200">
              My Favorites
            </h2>
          </Link>
        </div>
      </div>

      {/* "Add Contact" Button on the Right */}
      <Link
        to="/contact-form"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-blue-500 hover:scale-110 transition-all duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </Link>
    </header>
  );
};

export default Header;

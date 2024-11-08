import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import ContactForm from "./components/ContactForm";
import Contact from "./models/Contact";
import { useState } from "react";
import ContactList from "./components/ContactList";
import FavoritesList from "./components/FavoritesList";
function App() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      firstName: "Lebron",
      lastName: "James",
      phoneNumber: 8431233211,
      isFavorite: true,
    },
    {
      firstName: "Bronny",
      lastName: "James",
      phoneNumber: 1234567890,
      isFavorite: false,
    },
  ]);
  const addContact = (newContact: Contact): void => {
    setContacts((prev) => [...prev, newContact]);
  };
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact-form"
            element={<ContactForm onAdd={addContact} />}
          />
          <Route
            path="/contact-list"
            element={<ContactList contacts={contacts} />}
          />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

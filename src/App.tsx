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

import ContactDetail from "./components/ContactDetail";
import FavoritesList from "./components/FavoritesList";
import UpdateDetail from "./components/UpdateDetail";
function App() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      firstName: "Lebron",
      lastName: "James",
      phoneNumber: 8431233211,
      isFavorite: true,
      image:
        "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
    },
    {
      firstName: "Bronny",
      lastName: "James",
      phoneNumber: 1234567890,
      isFavorite: false,
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1642355.png",
    },
  ]);

  const addContact = (newContact: Contact): void => {
    setContacts((prev) => [...prev, newContact]);
  };
  const toggleFav = (index: number): void => {
    setContacts((prev) => {
      // step 1: make a copy of prev (arr)
      const copyOfPrev: Contact[] = prev.slice(0);
      // step 2: make copy of object to modify (obj)
      const copyOfObj: Contact = { ...prev[index] };
      // step 3: mutate copied object
      copyOfObj.isFavorite = !copyOfObj.isFavorite;
      // step 4: mutate copied array
      copyOfPrev[index] = copyOfObj;
      // step 5: replace og array with mutated array
      return copyOfPrev;
    });
  };
  const updateContact = (updatedContact: Contact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.phoneNumber === updatedContact.phoneNumber
          ? updatedContact
          : contact
      )
    );
  };
  const deleteContact = (index: number): void => {
    setContacts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };
  return (
    <>
      <Router>
        <Header contacts={contacts} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact-form"
            element={<ContactForm onAdd={addContact} />}
          />
          <Route
            path="/contact-list"
            element={<ContactList contacts={contacts} onUpdate={toggleFav} />}
          />
          <Route
            path="/favorites"
            element={<FavoritesList contacts={contacts} onUpdate={toggleFav} />}
          />
          <Route
            path="/contact/:id"
            element={
              <ContactDetail
                contacts={contacts}
                updateContact={updateContact}
                deleteContact={deleteContact}
              />
            }
          />
          <Route
            path="/contact/update/:id"
            element={
              <UpdateDetail contacts={contacts} updateContact={updateContact} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

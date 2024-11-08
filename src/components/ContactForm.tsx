import { FormEvent, useState } from "react";
import Contact from "../models/Contact";
interface Props {
  onAdd: (contact: Contact) => void;
}
const ContactForm = ({ onAdd }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fav, setFav] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const newContact: Contact = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: +phoneNumber,
      isFavorite: fav,
      //   image: image,
    };
    onAdd(newContact);
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setFav(false);
    setImage(null);
  };
  return (
    <form className="ContactForm max-w-md mx-auto" onSubmit={submitHandler}>
      <label htmlFor="first-name"></label>
      <input
        type="text"
        id="first-name"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        required
        placeholder="First Name"
        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg
         bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <label htmlFor="last-name"></label>
      <input
        type="text"
        id="last-name"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        required
        placeholder="Last Name"
        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg
         bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <label htmlFor="phone-number"></label>
      <input
        type="tel"
        id="phone-number"
        maxLength={12}
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
        required
        placeholder="Phone Number"
        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg
         bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        id="favorites-checkbox"
        type="checkbox"
        checked={fav}
        onChange={(e) => {
          setFav(e.target.checked);
        }}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="favorites-checkbox"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Add To Favorites
      </label>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;

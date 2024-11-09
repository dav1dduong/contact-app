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
  const [image, setImage] = useState<string | null>(null); // Image state should be a string (URL) or null

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const newContact: Contact = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: +phoneNumber, // Make sure to convert the phone number to a number
      isFavorite: fav,
      image: image || "", // If no image, save an empty string
    };

    onAdd(newContact);
    // Clear form fields
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setFav(false);
    setImage(null); // Reset image after form submission
  };

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null; // Get the first file, or null if no file selected
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate a temporary URL for the image file
      setImage(imageUrl); // Store the image URL in state
    } else {
      setImage(null); // If no file is selected, reset the image state
    }
  };

  return (
    <form className="ContactForm max-w-md mx-auto" onSubmit={submitHandler}>
      {/* First Name Input */}
      <input
        type="text"
        id="first-name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        placeholder="First Name"
        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg"
      />
      {/* Last Name Input */}
      <input
        type="text"
        id="last-name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        placeholder="Last Name"
        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg"
      />
      {/* Phone Number Input */}
      <input
        type="tel"
        id="phone-number"
        maxLength={12}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
        placeholder="Phone Number"
        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg"
      />

      {/* Image Upload */}
      <label
        htmlFor="file_input"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Upload file
      </label>
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
        id="file_input"
        type="file"
        onChange={imageHandler} // Call imageHandler on file selection
      />

      {/* Favorites Checkbox */}
      <input
        id="favorites-checkbox"
        type="checkbox"
        checked={fav}
        onChange={(e) => setFav(e.target.checked)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
      />
      <label
        htmlFor="favorites-checkbox"
        className="ms-2 text-sm font-medium text-gray-900"
      >
        Add To Favorites
      </label>

      {/* Submit Button */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Contact from "../models/Contact";

interface Props {
  updateContact: (c: Contact) => void;
  contacts: Contact[];
}

const UpdateDetail: React.FC<Props> = ({ updateContact, contacts }) => {
  const { id } = useParams<{ id: string }>();
  const [contact, setContact] = useState<Contact | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    const currentContact = contacts.find(
      (contact) => contact.phoneNumber.toString() === id
    );
    if (currentContact) {
      setContact(currentContact);
      setFirstName(currentContact.firstName);
      setLastName(currentContact.lastName);
      setPhoneNumber(currentContact.phoneNumber.toString());
      setImage(currentContact.image || "");
    }
  }, [id, contacts]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact) {
      const updatedContact: Contact = {
        ...contact,
        firstName,
        lastName,
        phoneNumber: Number(phoneNumber),
        image,
      };
      updateContact(updatedContact);
      navigate(-1);
    }
  };
  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null; // Get the first file, or null if no file selected
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate a temporary URL for the image file
      setImage(imageUrl); // Store the image URL in state
    } else {
      setImage(""); // Use an empty string if no file is selected
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-[76vh] bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
            onClick={() => navigate(-1)}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
          <img
            className="mb-3 w-40 h-40 rounded-full shadow-lg mx-auto object-cover object-center"
            src={
              image ||
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
            }
            alt=""
          />
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="border p-2 rounded"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="border p-2 rounded"
            />
            <input
              value={phoneNumber}
              className="border p-2 rounded text-blue-500"
              disabled
            />
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
              id="file_input"
              type="file"
              onChange={imageHandler}
            />

            <button
              type="submit"
              className="bg-indigo-600 px-8 py-2 mt-4 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateDetail;

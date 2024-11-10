import "./ContactCard.css";
import { useState } from "react";
import Contact from "../models/Contact";
import { useNavigate } from "react-router-dom";

import PhoneCall from "./PhoneCall";

interface Props {
  contact: Contact;
  onUpdate: () => void;
}

const ContactCard = ({ contact, onUpdate }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => {
      navigate(`/contact/${contact.phoneNumber}`);
    }, 500);
  };
  console.log(contact);
  const sortNumber = (number: number): string => {
    return (
      "(" +
      number.toString().slice(0, 3) +
      ") - " +
      number.toString().slice(3, 6) +
      " - " +
      number.toString().slice(6)
    );
  };

  return (
    <div
      className={`m-3 border rounded-2xl p-2 ${
        contact.isFavorite ? "glowing-border" : "border-gray-300"
      }`}
    >
      <li className="ContactCard" onClick={handleClick}>
        <div className="hover:text-blue-500 hover:scale-110 transition-all duration-200 ">
          <img
            src={
              `${contact.image}` ||
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
            }
            alt="default"
            className={`w-40 h-40 object-cover  mb-4 transition-all `}
          />
          <p className="full-name text-center">{`${contact.firstName} ${contact.lastName}`}</p>
        </div>
      </li>
      <div className="flex justify-between">
        {contact.isFavorite === true ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="red"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hover:text-slate-950  hover:scale-110 icon icon-tabler icons-tabler-outline icon-tabler-heart"
            onClick={() => onUpdate()}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hover:text-blue-500 hover:scale-110 icon icon-tabler icons-tabler-outline icon-tabler-heart"
            onClick={() => onUpdate()}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        )}
        <PhoneCall phoneNumber={contact.phoneNumber.toString()} />
      </div>
    </div>
  );
};

export default ContactCard;

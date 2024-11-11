import { useParams, Link, useNavigate } from "react-router-dom";
import Contact from "../models/Contact";

interface Props {
  contacts: Contact[];
  updateContact: (c: Contact) => void;
  deleteContact: (index: number) => void;
}

const ContactDetail = ({ contacts, updateContact, deleteContact }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const contact = contacts.find(
    (contact) => contact.phoneNumber.toString() === id
  );

  if (!contact) return <p>Contact Not Found</p>;

  const sortNumber = (number: number): string => {
    return `(${number.toString().slice(0, 3)})-${number
      .toString()
      .slice(3, 6)}-${number.toString().slice(6)}`;
  };
  const contactIndex = contacts.findIndex(
    (contact) => contact.phoneNumber.toString() === id
  );
  return (
    <div className="flex items-center justify-center h-[76vh] bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
        <img
          className="mb-3 w-40 h-40 rounded-full shadow-lg mx-auto object-cover object-center"
          src={
            contact.image ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
          }
          alt=""
        />
        <h1 className="text-lg text-gray-700">
          {contact.firstName} {contact.lastName}
        </h1>
        <h3 className="text-sm text-gray-400">
          {sortNumber(contact.phoneNumber)}
        </h3>
        <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
          CALL {contact.firstName}
        </button>
        <Link to={`/contact/update/${contact.phoneNumber}`}>
          <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
            Edit
          </button>
        </Link>
        <button
          className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide"
          onClick={() => {
            deleteContact(contactIndex);
            navigate(-1);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactDetail;

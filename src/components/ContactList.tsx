import "./ContactList.css";
import Contact from "../models/Contact";
import ContactCard from "./ContactCard";
interface Props {
  contacts: Contact[];
}
const ContactList = ({ contacts }: Props) => {
  return (
    <ul className="ContactList flex flex-wrap justify-center gap-4 border-2 border-gray-300 rounded-lg p-4 shadow-md w-1/2 mx-auto">
      {" "}
      {contacts.map((contact, index) => (
        <ContactCard key={index} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;

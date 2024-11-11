import "./ContactList.css";
import Contact from "../models/Contact";
import ContactCard from "./ContactCard";
interface Props {
  contacts: Contact[];
  onUpdate: (index: number) => void;
}
const ContactList = ({ contacts, onUpdate }: Props) => {
  return (
    <ul className="ContactList flex flex-wrap justify-center gap-4 border-2 border-gray-300 rounded-lg p-4 shadow-md w-1/2 mx-auto mt-7">
      {" "}
      {contacts.map((contact, index) => (
        <ContactCard
          key={contact.phoneNumber}
          contact={contact}
          onUpdate={() => onUpdate(index)}
        />
      ))}
    </ul>
  );
};

export default ContactList;

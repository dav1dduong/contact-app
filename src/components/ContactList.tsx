import Contact from "../models/Contact";
import ContactCard from "./ContactCard";
interface Props {
  contacts: Contact[];
}
const ContactList = ({ contacts }: Props) => {
  return (
    <ul className="ContactList">
      {contacts.map((contact, index) => {
        return <ContactCard contact={contact} key={contact.phoneNumber} />;
      })}
    </ul>
  );
};

export default ContactList;

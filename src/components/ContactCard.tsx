import Contact from "../models/Contact";

interface Props {
  contact: Contact;
}
const ContactCard = ({ contact }: Props) => {
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
    <li className="ContactCard">
      <p className="full-name">{`${contact.firstName} ${contact.lastName}`}</p>
      <p className="phone-number">{sortNumber(contact.phoneNumber)}</p>
    </li>
  );
};

export default ContactCard;

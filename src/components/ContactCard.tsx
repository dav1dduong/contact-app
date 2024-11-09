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
  console.log(contact.image);
  return (
    <li className="ContactCard hover:text-blue-500 hover:scale-110 transition-all duration-200">
      <img
        src={
          `${contact.image}` ||
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
        }
        alt="default"
        className="w-40 h-40 object-cover  mb-4 "
      />
      <p className="full-name">{`${contact.firstName} ${contact.lastName}`}</p>
      <p className="phone-number">{sortNumber(contact.phoneNumber)}</p>
    </li>
  );
};

export default ContactCard;

import { useParams } from "react-router-dom";
import Contact from "../models/Contact";

interface Props {
  contacts: Contact[];
}
const ContactDetail = ({ contacts }: Props) => {
  const { id } = useParams<{ id: string }>();
  const contact = contacts.find(
    (contact) => contact.phoneNumber.toString() === id
  );
  if (!contact) {
    return <p>Contact Not Found</p>;
  }
  return (
    <div className="ContactDetail ">
      <img src={contact.image} alt="" />
    </div>
  );
};

export default ContactDetail;

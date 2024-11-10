import Contact from "../models/Contact";
import ContactCard from "./ContactCard";

interface Props {
  contacts: Contact[];
  onUpdate: (index: number) => void;
}
const FavoritesList = ({ contacts, onUpdate }: Props) => {
  const favoriteContacts = contacts.filter((contact) => contact.isFavorite);
  return (
    <div className="FavoritesList list-none flex flex-wrap justify-center gap-4 border-2 border-gray-300 rounded-lg p-4 shadow-md w-1/2 mx-auto">
      {favoriteContacts.length > 0 ? (
        favoriteContacts.map((contact) => (
          <ContactCard
            key={contact.phoneNumber}
            contact={contact}
            onUpdate={() => onUpdate(contact.phoneNumber)}
          />
        ))
      ) : (
        <p className="text-center">No favorite contacts yet!</p>
      )}
    </div>
  );
};
export default FavoritesList;

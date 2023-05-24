import ContactItem from "../ContactItem";
import { Contact } from './Contacts.styled'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { getFilter } from '../../Redux/filterSlice'
import { getContacts } from '../../Redux/contactsSlice'

const Contacts = () => {
  const filter = useSelector(getFilter)
  const contacts = useSelector(getContacts)
  const normalizedFilter = filter.toLowerCase();
  const visContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

  return (
    <Contact>
      {visContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
          ))}
    </Contact>
  )
};
  
export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
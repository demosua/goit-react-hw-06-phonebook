import {useState, useEffect} from "react";
import { IconContext } from "react-icons";
import ContactForm from '../ContactForm';
import Contacts from '../Contacts';
import Filter from '../Filter/Filter'
import { nanoid } from 'nanoid';
import { Container, Section, Title } from './App.styled';
import { theme } from '../../constants/theme'
  
const LS_KEY = 'phonebook';
  
const App = () => {
  const [filter, setFilter] = useState('');
  const [myContacts, setMyContacts] = useState(() => {
    if (JSON.parse(window.localStorage.getItem(LS_KEY))) {
      return JSON.parse(window.localStorage.getItem(LS_KEY))
    }
      return [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
  });

  useEffect(() => {
    myContacts.length > 0 && window.localStorage.setItem(LS_KEY, JSON.stringify(myContacts))
  }, [myContacts])

  const addContact = data => {
    const contact = {id: nanoid(), name: data.name, number: data.number,};
    setMyContacts(myContacts => [contact, ...myContacts]);
  };

  const deleteContact = contactId => {
    setMyContacts(myContacts  =>  myContacts.filter(contact => contact.id !== contactId))
  };
  
  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return myContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  };
  const visibleContacts = getFilteredContacts();

  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, color: theme.colors.iconColor, size: "2em", className: "global-class-name" }}>
    <Container>
      <Section>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} contacts={myContacts}/>
      </Section>
      <h2>Contacts</h2>  
        <Filter value={filter} onChange={changeFilter} />
      <Contacts contacts={visibleContacts} onDeleteContact={deleteContact}/>
      </Container>
    </IconContext.Provider>
  )
}

export default App;
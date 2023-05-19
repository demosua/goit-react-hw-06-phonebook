import { useState } from "react";
import { nanoid } from "nanoid";
import { Form, Label, Input, Button } from './ContactForm.styled';
import { IoPersonAddOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';


const ContactForm = ({ contacts, onSubmit }) => {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(event.currentTarget.value)
        break;
      case 'number':
        setNumber(event.currentTarget.value)
        break;
      default:
        return;
    }
  }; 
  
  const handleSubmit = event => {
    event.preventDefault();
      const isContact = contacts.filter(contact => contact.name.toLowerCase() === name.toLowerCase()).length > 0
      const isNumber = contacts.filter(contact => contact.number.toLowerCase() === number.toLowerCase()).length > 0

    if (isContact || isNumber) {
      isContact ? setName('') : setNumber('')
      isContact ? alert(`${name} is already in contacts.`) : alert(`${number} is already in contacts.`)
      return;
    }

    onSubmit({ name, number });
    reset();
  }  
  
  const reset = () => {
    setName('');
    setNumber('');
  }
  
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor ={nameInputId}>
          Name
        </Label>
          <Input
            type="text"
            name="name"
            id={nameInputId}
            value={name}
            onChange = {handleChange}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        <Label htmlFor ={numberInputId}>
          Number
        </Label>
          <Input
            type="tel"
            name="number"
            id={numberInputId}
            value={number}
            onChange = {handleChange}
            autoComplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
            <Button type="submit"><IoPersonAddOutline /></Button>            
      </Form>
    </>
  )
}

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
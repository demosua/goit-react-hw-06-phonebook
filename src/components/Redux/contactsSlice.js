import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
       state.push(action.payload)
    },
    deleteContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
   },
  },
})

export const { addContact, deleteContact } = contactsSlice.actions
export const getContacts = state => state.contacts
export default contactsSlice.reducer
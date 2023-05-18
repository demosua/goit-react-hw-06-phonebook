import { createSlice, nanoid } from '@reduxjs/toolkit'
//import { nanoid } from "nanoid";

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload)
    },
    deleteContact: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
})

export const { addContact, deleteContact } = contactsSlice.actions
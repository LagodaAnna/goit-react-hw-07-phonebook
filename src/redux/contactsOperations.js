import * as contactsApi from 'contactsAPI/fetchAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await contactsApi.getContacts();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const contact = await contactsApi.addContact(newContact);
    return contact;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const contact = await contactsApi.deleteContact(id);
    return contact;
  }
);

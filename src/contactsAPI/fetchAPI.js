import axios from 'axios';

axios.defaults.baseURL = 'https://630a1f1d324991003280dc0a.mockapi.io';

export async function getContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post('/contacts', newContact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

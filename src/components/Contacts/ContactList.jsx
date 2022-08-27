import { useEffect } from 'react';
import ContactListItem from './ContactListItem';
import { List } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getChangedFilter } from 'redux/contactsSlice';
import * as contactsOperations from 'redux/contactsOperations.js';

const ContactList = () => {
  const filter = useSelector(getChangedFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    const normalizedFilter = filter?.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteHandler = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  const visibleContacts = filterContacts();

  return (
    <>
      {visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <ContactListItem
                key={id}
                id={id}
                name={name}
                number={number}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </List>
      )}
    </>
  );
};

export default ContactList;

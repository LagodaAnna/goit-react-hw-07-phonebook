import PropTypes from 'prop-types';
import { ContactItem, Name, Number, Button } from './Contacts.styled';

const ContactListItem = ({ id, name, number, deleteHandler }) => {
  return (
    <ContactItem>
      <Name> {name}</Name> <Number>{number}</Number>
      <Button type="button" onClick={() => deleteHandler(id)}>
        Delete
      </Button>
    </ContactItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

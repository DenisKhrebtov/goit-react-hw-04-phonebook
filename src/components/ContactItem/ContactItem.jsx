import PropTypes from 'prop-types';

import { ContactNeme, DeleteButton, Item } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <ContactNeme>
        {name}: {number}
      </ContactNeme>
      <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ol className={style.orderList}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={style.contactListItem}>
                <ContactItem
                    name={name}
                    number={number}
                    id={id}
                    onDelete={onDeleteContact}
                />
            </li>
        ))}
    </ol>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ),
};

export default ContactList;

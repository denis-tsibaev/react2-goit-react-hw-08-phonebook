import { Button, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
export default function ContactList({ contacts, onBtnClick }) {
    return (
        <ListGroup variant="flush" className={s.contactList}>
            {contacts.map(({ id, name, number }) => (
                <ListGroup.Item
                    key={id}
                    variant="warning"
                    className={s.contactItem}
                >
                    <span className={s.contactInfo}>
                        {name}: {number}
                    </span>
                    <Button
                        variant="outline-danger"
                        onClick={() => onBtnClick(id)}
                    >
                        Delete
                    </Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
};

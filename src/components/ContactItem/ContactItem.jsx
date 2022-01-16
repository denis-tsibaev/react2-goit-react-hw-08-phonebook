import PropTypes from 'prop-types';
import style from './ContactItem.module.css';

const ContactItem = ({ name, number, onDelete, id }) => (
    <>
        <span>
            {name}: {number}
        </span>
        <button
            type="submit"
            onClick={() => onDelete(id)}
            className={style.deleteBtn}
        >
            Delete
        </button>
    </>
);

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default ContactItem;

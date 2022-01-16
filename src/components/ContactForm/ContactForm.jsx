import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContacts } from '../../redux/operations';
import { getContacts } from '../../redux/selectors';
import style from './ContactForm.module.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleInputChange = event => {
        const { name, value } = event.target;
        if (name === 'name') setName(value);
        if (name === 'number') setNumber(value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const doubleContact = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        );

        if (doubleContact) {
            toast.error(`${name} is already in contacts`);
            return;
        }

        dispatch(addContacts({ name, number }));
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div>
                <label>
                    Name
                    <input
                        className={style.inputName}
                        onChange={handleInputChange}
                        type="text"
                        name="name"
                        value={name}
                        placeholder="text here"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Number
                    <input
                        className={style.inputNumber}
                        onChange={handleInputChange}
                        type="tel"
                        name="number"
                        value={number}
                        placeholder="text here"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />
                </label>
            </div>
            <button type="submit" className={style.formButton}>
                Add contact
            </button>
            <ToastContainer autoClose={2000} />
        </form>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};

export default ContactForm;

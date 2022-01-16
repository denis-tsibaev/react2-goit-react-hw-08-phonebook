import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import TechInfo from '../components/TechInfo';
import { useSelector, useDispatch } from 'react-redux';
import {
    getFilteredContacts,
    getFilter,
    getError,
    getIsLoading,
    getContacts,
} from '../redux/contacts/contact-selectors';
import { useEffect } from 'react';
import {
    fetchContacts,
    deleteContacts,
} from '../redux/contacts/contact-operations';
import { filterContacts } from '../redux/contacts/contact-actions';
import s from './ContactsPage.module.css';

export default function ContactsPage() {
    const contactsList = useSelector(getFilteredContacts);
    const filteredContacts = useSelector(getFilter);
    const errorMessage = useSelector(getError);
    const isLoading = useSelector(getIsLoading);
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const onDeleteContact = id => dispatch(deleteContacts(id));
    const findName = e => {
        dispatch(filterContacts(e.target.value));
    };

    return (
        <>
            <Section title={'Phonebook'}>
                <ContactForm />
                <h2 className={s.title}>Contacts</h2>
                {contacts.length > 1 && (
                    <Filter value={filteredContacts} onFindName={findName} />
                )}
                {errorMessage && <TechInfo message={errorMessage} />}
                {isLoading && <TechInfo message={'Loading...'} />}
                {contactsList.length !== 0 && (
                    <ContactList
                        contacts={contactsList}
                        onBtnClick={onDeleteContact}
                    />
                )}
            </Section>
        </>
    );
}

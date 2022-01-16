import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Section from './components/Section';
import TechInfo from './components/TechInfo/';
import { filterContacts } from './redux/actions';
import { deleteContacts, fetchContacts } from './redux/operations';
import {
    getError,
    getFilter,
    getFilteredContacts,
    getIsLoading,
} from './redux/selectors';

const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getFilteredContacts);
    const filteredContacts = useSelector(getFilter);
    const errorMessage = useSelector(getError);
    const isLoading = useSelector(getIsLoading);

    const onDeleteContact = id => dispatch(deleteContacts(id));
    const findName = event => dispatch(filterContacts(event.target.value));

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className="appDiv">
            <Section title="Phonebook">
                <ContactForm />
            </Section>
            <Section title="Contacts">
                <Filter onFilterChange={findName} value={filteredContacts} />
                {errorMessage && (
                    <TechInfo message="Something wrong! Please, try again later." />
                )}
                {isLoading && <TechInfo message="Loading..." />}

                <ContactList
                    contacts={contacts}
                    onDeleteContact={onDeleteContact}
                />
            </Section>
        </div>
    );
};

export default App;

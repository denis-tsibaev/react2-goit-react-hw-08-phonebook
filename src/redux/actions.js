import { createAction } from '@reduxjs/toolkit';

const filterContacts = createAction('contactList/filter', contact => ({
    payload: contact,
}));

export { filterContacts };

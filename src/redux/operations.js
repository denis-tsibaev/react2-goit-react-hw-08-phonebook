import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    getContacts,
    postContact,
    deleteContact,
} from '../services/contacts-api';

const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await getContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

const addContacts = createAsyncThunk(
    'contacts/addContacts',
    async ({ name, number }, { rejectWithValue }) => {
        try {
            const contact = await postContact(name, number);
            return contact;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

const deleteContacts = createAsyncThunk(
    'contacts/deleteContacts',
    async (id, { rejectWithValue }) => {
        try {
            await deleteContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export { fetchContacts, addContacts, deleteContacts };

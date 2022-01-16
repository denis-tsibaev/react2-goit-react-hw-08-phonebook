import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { tokenForFetch } from '../../services/contacts-api';

const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistToken = state.auth.token;
        tokenForFetch.set(persistToken);
        try {
            const contacts = await axios.get('/contacts');
            return contacts.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

const addContacts = createAsyncThunk(
    'contacts/addContacts',
    async ({ name, number }, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistToken = state.auth.token;
        tokenForFetch.set(persistToken);
        try {
            const contact = await axios.post('/contacts', {
                name,
                number,
            });

            return contact.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

const deleteContacts = createAsyncThunk(
    'contacts/deleteContacts',
    async (id, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistToken = state.auth.token;
        tokenForFetch.set(persistToken);
        try {
            await axios.delete(`/contacts/${id}`);
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export { fetchContacts, addContacts, deleteContacts };

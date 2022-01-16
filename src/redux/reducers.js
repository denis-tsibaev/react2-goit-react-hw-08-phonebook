import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './actions';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const contacts = createReducer([], {
    [fetchContacts.fulfilled]: (_, action) => action.payload,
    [addContacts.fulfilled]: (state, action) => [...state, action.payload],
    [deleteContacts.fulfilled]: (state, action) =>
        state.filter(contact => contact.id !== action.payload),
});

const filteredContacts = createReducer('', {
    [filterContacts]: (_, action) => action.payload,
});

const error = createReducer(null, {
    [fetchContacts.rejected]: (_, action) => action.payload,
    [addContacts.rejected]: (_, action) => action.payload,
    [deleteContacts.rejected]: (_, action) => action.payload,
    [fetchContacts.pending]: () => null,
    [addContacts.pending]: () => null,
    [deleteContacts.pending]: () => null,
});

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [addContacts.pending]: () => true,
    [deleteContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [addContacts.fulfilled]: () => false,
    [deleteContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
    [addContacts.rejected]: () => false,
    [deleteContacts.rejected]: () => false,
});

export default combineReducers({
    contacts,
    filteredContacts,
    error,
    isLoading,
});

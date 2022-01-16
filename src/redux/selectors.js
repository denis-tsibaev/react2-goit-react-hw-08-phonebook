import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filteredContacts;
export const getError = state => state.contacts.error;
export const getIsLoading = state => state.contacts.isLoading;

export const getFilteredContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filteredContacts) => {
        const normalizedFilteredName = filteredContacts.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilteredName),
        );
    },
);

import axios from 'axios';

axios.defaults.baseURL = 'https://61bdf4c12a1dd4001708a1af.mockapi.io';
// axios.defaults.baseURL = 'http://localhost:4000';

async function getContacts() {
    const response = await axios.get('/contacts');
    console.log(response.data);
    return response.data;
}

async function postContact(name, number) {
    const contact = await axios.post('/contacts', {
        name,
        number,
    });
    console.log(contact);
    return contact.data;
}

async function deleteContact(id) {
    await axios.delete(`/contacts/${id}`);
    return;
}

export { getContacts, postContact, deleteContact };

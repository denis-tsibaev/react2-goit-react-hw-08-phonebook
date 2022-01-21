import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const tokenForFetch = {
    set(token) {
        axios.defaults.headers.common.authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.authorization = '';
    },
};

export { tokenForFetch };

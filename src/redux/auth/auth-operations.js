import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { tokenForFetch } from '../../services/contacts-api';

const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('/user/sighnup', credentials);
            tokenForFetch.set(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        tokenForFetch.set(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('users/logout');
        tokenForFetch.unset();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
        return thunkAPI.rejectWithValue();
    }
    tokenForFetch.set(persistToken);
    try {
        const { data } = await axios.get('/users/current');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export { register, logIn, logOut, getCurrentUser };

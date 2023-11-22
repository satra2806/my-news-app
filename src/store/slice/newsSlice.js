// grocerySlice.js
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper'; // Assuming you are using Next.js with Redux wrapper

const initialState = {
    keyWord: '',
    date: '',
    news: [],
    status: 'idle',
    error: null,
    preferredSource: null,
    categories: [],
    authors: [],
};

const newsSlice = createSlice({

    name: 'news',
    initialState,
    reducers: {
        setNews: (state, action) => {
            state.news = action.payload;
        },
        setPreferredSource: (state, action) => {
            state.preferredSource = action.payload;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setAuthors: (state, action) => {
            state.authors = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },});


export const { setNews, setPreferredSource, setCategories, setAuthors, setStatus, setError } = newsSlice.actions;
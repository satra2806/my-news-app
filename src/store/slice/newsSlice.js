// grocerySlice.js
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper'; // Assuming you are using Next.js with Redux wrapper

const initialState = {
    keyWord: '',
    date: '',
    news: [],
    status: 'idle',
    error: null,
    preferredSource: { value: 'NewsAPI', label: 'NewsAPI' },
    categories: { value: 'business', label: 'Business' },
    newsCategory: [{ value: 'business', label: 'Business' }, { value: 'entertainment', label: 'Entertainment' }, { value: 'general', label: 'General' }, { value: 'health', label: 'Health' }, { value: 'science', label: 'Science' }, { value: 'sports', label: 'Sports' }, { value: 'technology', label: 'Technology' }],
    authors: { value: 'BBC News', label: 'BBC News' },  
    authorsData: [{ value : 'Robert Brand' , label : 'Robert Brand' } , { value : 'BBC News' , label : 'BBC News' } , { value : 'BBC Sport' , label : 'BBC Sport' } , { value : 'BBC Weather' , label : 'BBC Weather' } , { value : 'BBC World Service' , label : 'BBC World Service' } , { value : 'BBC' , label : 'BBC' } , { value : 'BBC News - Home' , label : 'BBC News - Home' } , { value : 'BBC News - Technology' , label : 'BBC News - Technology' } , { value : 'BBC News - World' , label : 'BBC News - World' } , { value : 'BBC News - Business' , label : 'BBC News - Business' } , { value : 'BBC News - Entertainment & Arts' , label : 'BBC News - Entertainment & Arts' } , { value : 'BBC News - Health' , label : 'BBC News - Health' } , { value : 'BBC News - Science & Environment' , label : 'BBC News - Science & Environment' } , { value : 'BBC News - UK' , label : 'BBC News - UK' } , { value : 'BBC News - US & Canada' , label : 'BBC News - US & Canada' } , { value : 'BBC News - Wales' , label : 'BBC News - Wales' } , { value : 'BBC News - Scotland' , label : 'BBC News - Scotland' } , { value : 'BBC News - Northern Ireland' , label : 'BBC News - Northern Ireland' } , { value : 'BBC News - Technology' , label : 'BBC News - Technology' } , { value : 'BBC News - Business' , label : 'BBC News - Business' } , { value : 'BBC News - Entertainment & Arts' , label : 'BBC News - Entertainment & Arts' } , { value : 'BBC News - Health' , label : 'BBC News - Health' } , { value : 'BBC News - Science & Environment' , label : 'BBC News - Science & Environment' } , { value : 'BBC News - UK' , label : 'BBC News - UK' } , { value : 'BBC News - US & Canada' , label : 'BBC News - US & Canada' } , { value : 'BBC News - Wales' , label : 'BBC News - Wales' } , { value : 'BBC News - Scotland'}],
    isModalOpen: false,
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
        setKeyword: (state, action) => {
            state.keyWord = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        },
        setIsModalOpen: (state, action) => {
            state.isModalOpen = action.payload;
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


export const { 
    setNews, setPreferredSource, setCategories, setAuthors, 
    setStatus, setError, setKeyword, setDate, setIsModalOpen 
 } = newsSlice.actions;

export default newsSlice.reducer;
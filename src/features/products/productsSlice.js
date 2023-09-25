import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';
import { suffle } from '../../utils/common';

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/products`);
            return res.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        isLoading: false,
        filtered: [],
        related: [],
    },
    reducers: {
        filterByPrice: (state, { payload }) => {
            state.filtered = state.list.filter(({ price }) => price < payload);
        },
        getRelatedProducts: (state, { payload }) => {
            const list = state.list.filter(
                ({ category: { id } }) => id === payload
            );
            state.related = suffle(list);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const { filterByPrice, getRelatedProducts } = productsSlice.actions;

export default productsSlice.reducer;

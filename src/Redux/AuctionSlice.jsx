import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  auctions: [],
  status: 'idle',
  error: null,
};

export const fetchAuctions = createAsyncThunk('auctions/fetchAuctions', async (userId) => {
  const response = await axios.get(`/api/users/${userId}/auctions`);
  return response.data;
});

const auctionSlice = createSlice({
  name: 'auctions',
  initialState,
  reducers: {
    auctionAdded(state, action) {
      state.auctions.push(action.payload);
    },
    auctionUpdated(state, action) {
      const index = state.auctions.findIndex((auction) => auction.id === action.payload.id);
      if (index !== -1) {
        state.auctions[index] = action.payload;
      }
    },
    auctionDeleted(state, action) {
      state.auctions = state.auctions.filter((auction) => auction.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuctions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAuctions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.auctions = action.payload;
      })
      .addCase(fetchAuctions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { auctionAdded, auctionUpdated, auctionDeleted } = auctionSlice.actions;

export default auctionSlice.reducer; 

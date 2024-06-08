import { configureStore } from '@reduxjs/toolkit';
import auctionReducer from '../Redux/AuctionSlice'; 
import userReducer from '../Redux/UserSlice'; 

const store = configureStore({
  reducer: {
    auctions: auctionReducer,
    user: userReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import { authSlice, portfolioSlice } from './';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        portfolio: portfolioSlice.reducer,
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
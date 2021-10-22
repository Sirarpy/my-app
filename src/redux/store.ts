import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './auth/authSlice'
import cocktailSlice from './cocktail/cocktailSlice'
import qrLoaderSlice from "./qrLoaderSlice/qrLoaderSlice";

export const store = configureStore({
    reducer: {
        main: mainSlice,
        cocktail: cocktailSlice,
        loader: qrLoaderSlice
    },
})


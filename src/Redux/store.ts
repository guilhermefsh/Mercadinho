import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer"; // assuming default export
import productMiddleware from "./middlewares/products";
import detailsProductMiddleware from './middlewares/detailsProducts'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend(productMiddleware.middleware)
            .prepend(detailsProductMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;

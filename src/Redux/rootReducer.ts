import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from './reducers/Cart'
import productsSlice from './reducers/products'
import detailsProductsSlice from './reducers/detailProducts'

export const rootReducer = combineReducers({
    cart: cartSlice,
    products: productsSlice,
    detailsProduct: detailsProductsSlice,
})

export type RootState = ReturnType<typeof rootReducer>;


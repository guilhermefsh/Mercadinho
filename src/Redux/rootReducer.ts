import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from './reducers/Cart'
import productsSlice from './reducers/products'
import detailsProductsSlice from './reducers/detailProducts'
import sideBarSlice from './reducers/sidebar'
import themeSlice from './reducers/Theme'
import authSlice from './reducers/Auth'

export const rootReducer = combineReducers({
    cart: cartSlice,
    products: productsSlice,
    detailsProduct: detailsProductsSlice,
    sideBar: sideBarSlice,
    theme: themeSlice,
    auth: authSlice,
})

export type RootState = ReturnType<typeof rootReducer>;


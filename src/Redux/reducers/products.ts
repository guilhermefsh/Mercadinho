import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsProps } from "../../interfaces/ProductsContext";
import { toast } from "react-toastify";


type ProductState = {
    products: ProductsProps[];
    loading: boolean;
    error: string | null;
    query: string
    loaded: boolean
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
    query: 'book3',
    loaded: false
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProductsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchProductsSuccess(state, action: PayloadAction<ProductsProps[]>) {
            state.products = action.payload;
            state.loading = false;
        },
        fetchProductsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
            toast.error('ocorreu um erro ao procurar os produtos')
        },
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload
        }
    },
});

export const { fetchProductsStart, fetchProductsFailure, fetchProductsSuccess, setQuery } = productsSlice.actions;

export default productsSlice.reducer;
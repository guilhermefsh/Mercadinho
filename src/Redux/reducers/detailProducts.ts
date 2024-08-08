import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsProps } from "../../interfaces/ProductsTypes";
import { toast } from "react-toastify";


type ProductState = {
    products: ProductsProps[];
    loading: boolean;
    error: string | null;
    query: string
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
    query: ''
};

const detailsProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchDetailsProductsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchDetailsProductsSuccess(state, action: PayloadAction<ProductsProps[]>) {
            state.products = action.payload;
            state.loading = false;
        },
        fetchDetailsProductsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
            toast.error('ocorreu um erro ao procurar os produtos')
        },
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload
        }
    },
});

export const { fetchDetailsProductsStart, fetchDetailsProductsFailure, fetchDetailsProductsSuccess, setQuery } = detailsProductsSlice.actions;

export default detailsProductsSlice.reducer;
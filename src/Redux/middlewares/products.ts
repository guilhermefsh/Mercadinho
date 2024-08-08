import { createListenerMiddleware } from "@reduxjs/toolkit";
import { fetchProductsFailure, fetchProductsStart, fetchProductsSuccess } from "../reducers/products";
import { api } from "../../infra/axios";
import { RootState } from "../rootReducer";

export const productMiddleware = createListenerMiddleware();

productMiddleware.startListening({
    actionCreator: fetchProductsStart,
    effect: async (_action, listenerApi) => {
        const state = listenerApi.getState() as RootState
        const query = state.products.query
        try {
            const response = await api.get(`sites/MLB/search?q=${query}`)
            listenerApi.dispatch(fetchProductsSuccess(response.data.results));
        } catch (error) {
            listenerApi.dispatch(fetchProductsFailure('Failed to fetch products'));
        }
    },
});

export default productMiddleware





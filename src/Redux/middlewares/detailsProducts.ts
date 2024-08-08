import { createListenerMiddleware } from "@reduxjs/toolkit";
import { fetchDetailsProductsStart, fetchDetailsProductsSuccess } from "../reducers/detailProducts";
import { RootState } from "../rootReducer";
import { fetchProductsFailure } from "../reducers/products";
import { api } from "../../infra/axios";

const detailsProductMiddleware = createListenerMiddleware();


detailsProductMiddleware.startListening({
    actionCreator: fetchDetailsProductsStart,
    effect: async (_action, listenerApi) => {
        const state = listenerApi.getState() as RootState
        const id = state.detailsProduct.query
        try {
            const response = await api.get(`items/${id}`)
            listenerApi.dispatch(fetchDetailsProductsSuccess([response.data]));
        } catch (error) {
            listenerApi.dispatch(fetchProductsFailure('Failed to fetch products'));
        }
    },
});

export default detailsProductMiddleware
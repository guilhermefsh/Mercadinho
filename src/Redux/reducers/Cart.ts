import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsProps } from "../../interfaces/ProductsContext";
import { toast } from "react-toastify";
import { CartState, UpdateCartItemPayload } from "../../interfaces/CartTypes";

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const calculateTotals = (items: ProductsProps[]) => {
    return items.reduce(
        (totals, item) => {
            const quantity = item.quantity || 1;
            totals.totalQuantity += quantity;
            totals.totalPrice += item.price * quantity;
            return totals;
        },
        { totalQuantity: 0, totalPrice: 0 }
    );
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }: PayloadAction<ProductsProps>) => {
            const isProductInCart = state.items.some(item => item.id === payload.id);
            if (isProductInCart) {
                toast.error('Produto já está no carrinho');
                return;
            }
            toast.success('Produto adicionado ao carrinho');
            state.items.push({ ...payload, quantity: 1 });
            const { totalQuantity, totalPrice } = calculateTotals(state.items);
            state.totalQuantity = totalQuantity;
            state.totalPrice = totalPrice;
        },
        deleteCartItem: (state, { payload }: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== payload);
            const { totalQuantity, totalPrice } = calculateTotals(state.items);
            state.totalQuantity = totalQuantity;
            state.totalPrice = totalPrice;
        },
        increaseQuantity: (state, { payload }: PayloadAction<string>) => {
            const item = state.items.find(item => item.id === payload);
            if (item) {
                item.quantity = (item.quantity || 1) + 1;
            }
            const { totalQuantity, totalPrice } = calculateTotals(state.items);
            state.totalQuantity = totalQuantity;
            state.totalPrice = totalPrice;
        },
        decreaseQuantity: (state, { payload }: PayloadAction<string>) => {
            const item = state.items.find(item => item.id === payload);
            if (item && item.quantity! > 1) {
                item.quantity = item.quantity! - 1;
            }
            const { totalQuantity, totalPrice } = calculateTotals(state.items);
            state.totalQuantity = totalQuantity;
            state.totalPrice = totalPrice;
        },
        updateCartItem: (state, action: PayloadAction<UpdateCartItemPayload>) => {
            const { id, newQuantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity = newQuantity;
            }
            const { totalQuantity, totalPrice } = calculateTotals(state.items);
            state.totalQuantity = totalQuantity;
            state.totalPrice = totalPrice;
        },
    }
});

export const {
    addToCart,
    deleteCartItem,
    increaseQuantity,
    decreaseQuantity,
    updateCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;

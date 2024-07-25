import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { toast } from "react-toastify";
import { ProductsProps } from "../interfaces/ProductsContext";

export const useCart = () => {
    const { cartItem, setCartItems } = useContext(ProductsContext)

    const addToCart = (product: ProductsProps) => {

        const isProductInCart = cartItem.some(item => item.id === product.id);

        if (isProductInCart) {
            toast.error('Produto já está no carrinho');
            return;
        }

        try {
            setCartItems([...cartItem, product])
            toast.success('Produto adicionado ao carrinho')
        } catch (error) {
            toast.error('ocorreu um erro ao adicionar o produto no carrinho')
        }
    }

    const updateCartItemQuantity = (id: string, newQuantity: number) => {
        const updatedCartItems = cartItem.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCartItems);
    };

    return { addToCart, updateCartItemQuantity }
}

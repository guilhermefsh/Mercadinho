import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { toast } from "react-toastify";
import { ProductsProps } from "../interfaces/ProductsContext";

export const useCart = () => {
    const { cartItem, setCartItems } = useContext(ProductsContext)
    const totalQuantity = cartItem.reduce((acc, product) => acc + (product.quantity || 1), 0);
    const totalPrice = cartItem.reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0);

    const handleDeleteCartItem = (id: string) => {
        const updateItems = cartItem.filter((item) => item.id != id);
        setCartItems(updateItems)
    }

    const handleDecreaseQuantity = (id: string) => {
        const updatedCartItems = cartItem.map(item =>
            item.id === id && item.quantity! > 1 ? { ...item, quantity: item.quantity! - 1 } : item
        );
        setCartItems(updatedCartItems);
    };

    const handleIncreaseQuantity = (id: string) => {
        const updatedCartItems = cartItem.map(item =>
            item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
        setCartItems(updatedCartItems);
    };


    const handleAddToCart = (product: ProductsProps) => {
        const isProductInCart = cartItem.some(item => item.id === product.id);

        if (isProductInCart) {
            toast.error('Produto já está no carrinho');
            return;
        }

        setCartItems([...cartItem, { ...product, quantity: 1 }]);
        toast.success('Produto adicionado ao carrinho');
    };

    const updateCartItemQuantity = (id: string, newQuantity: number) => {
        const updatedCartItems = cartItem.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCartItems);
    };

    return {
        handleAddToCart,
        updateCartItemQuantity,
        totalQuantity,
        totalPrice,
        handleDeleteCartItem,
        handleDecreaseQuantity,
        handleIncreaseQuantity
    }
}

import React, { useContext } from "react";
import { CartContainer, HeaderContainer, HeaderContent, LogoContainer, SearchContent } from "./styles"
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { ProductsContext } from "../../context/ProductsContext";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { SideBarCart } from "../SideBarCart";


export const Header = () => {

    const { setSearch, search, cartItem, setSideBarVisible, sideBarVisible } = useContext(ProductsContext);
    const { fetchProducts } = useFetchProducts();

    function HandleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        fetchProducts(search);
        setSearch('')
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <LogoContainer>
                    <span>Mercadinho <br /></span>
                    <span>do Gui</span>
                </LogoContainer>
                <SearchContent>
                    <form onSubmit={HandleSearch}>
                        <input
                            type="text"
                            placeholder="Batedeira"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button type="submit">
                            <FaSearch color="blue" size={14} />
                        </button>
                    </form>
                </SearchContent>

                <CartContainer>
                    <button onClick={() => setSideBarVisible(!sideBarVisible)}>
                        <FaCartShopping size={30} color="white" />
                        {cartItem.length > 0 && <span>{cartItem.length}</span>}
                    </button>
                </CartContainer>
            </HeaderContent>
            <SideBarCart />
        </HeaderContainer>
    )
}

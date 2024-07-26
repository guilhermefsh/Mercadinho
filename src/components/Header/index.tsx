import { AuthIcon, CartContainer, HeaderContainer, HeaderContent, LogoContainer, SearchContent } from "./styles"
import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { ProductsContext } from "../../context/ProductsContext";
import { SideBarCart } from "../SideBarCart";
import { ThemeToggleButton } from "../ThemeToggleButton";
import { Link } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";


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
                    <Link to='/'>
                        <span>Mercadinho <br /></span>
                        <span>do Gui</span>
                    </Link>
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
                            <i><FaSearch size={14} /></i>
                        </button>
                    </form>
                </SearchContent>

                <CartContainer>
                    <ThemeToggleButton />
                    <AuthIcon />
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

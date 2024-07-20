import React, { useContext } from "react";
import { CartContainer, HeaderContainer, HeaderContent, LogoContainer, SearchContent } from "./styles"
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { ProductsContext } from "../../context/ProductsContext";
import { useFetchProducts } from "../../hooks/useFetchProducts";


export const Header = () => {

    const { setSearch, search } = useContext(ProductsContext);
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
                    <button>
                        <FaCartShopping size={30} color="white" />
                        <span>1</span>
                    </button>
                </CartContainer>

            </HeaderContent>
        </HeaderContainer>
    )
}

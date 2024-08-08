import { AuthIcon, CartContainer, HeaderContainer, HeaderContent, LogoContainer, MenuList, SearchContent } from "./styles"
import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../../context/CartContext";
import { SideBarCart } from "../SideBarCart";
import { ThemeToggleButton } from "../ThemeToggleButton";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


export const Header = () => {

    const [searchProduct, setSearchProduct] = useState('');
    const [menuVisible, setMenuVisible] = useState(false);

    const { setSearch, cartItem, setSideBarVisible, sideBarVisible } = useContext(CartContext);
    const { SignOut, signed } = useContext(AuthContext);

    const navigate = useNavigate();

    const HandleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch(searchProduct)
    }

    const handleAuthIconClick = () => {
        setMenuVisible(!menuVisible);
    };

    const handleSignOut = () => {
        SignOut()
        navigate('/login')
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
                            value={searchProduct}
                            onChange={(e) => setSearchProduct(e.target.value)}
                        />
                        <button type="submit">
                            <i><FaSearch size={14} /></i>
                        </button>
                    </form>
                </SearchContent>

                <CartContainer>
                    <ThemeToggleButton />
                    <AuthIcon onClick={handleAuthIconClick} />
                    {menuVisible && (
                        <MenuList>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/settings">Settings</Link></li>
                            {signed ? <li onClick={handleSignOut}>Logout</li> : <li><Link to="/login">Login</Link></li>}
                        </MenuList>
                    )}
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

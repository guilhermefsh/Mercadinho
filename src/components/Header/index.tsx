import { CartContainer, HeaderContainer, HeaderContent, SearchContent } from "./styles"
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <SearchContent>
                    <form>
                        <input
                            type="text"
                            placeholder="Batedeira"
                        />
                        <button>
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

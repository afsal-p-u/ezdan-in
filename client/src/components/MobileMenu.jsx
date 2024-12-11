import { AiOutlineHome } from "react-icons/ai";
import { IoShirtOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = () => {
    const location = useLocation();

    return (
        <div 
            className="sticky bottom-0 left-0 bg-[--primary] px-[20px] py-2 hidden max-sm:flex w-full
            justify-between gap-5"
        >
            <Link to="/">
                <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                    <AiOutlineHome className={`${location.pathname == "/" && 'text-[--third]'}`} />
                    <p 
                        className={`text-xs font-medium
                        ${location.pathname == "/" && 'text-[--third]'}`}
                    >
                        Home
                    </p>
                </div>
            </Link>
            <Link to="/products">
                <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                    <IoShirtOutline 
                        className={`${location.pathname == "/product" ? 'text-[--third]' : 
                        location.pathname == '/products' ? 'text-[--third]' : ''}`} 
                    />
                    <p 
                        className={`text-xs font-medium
                            ${location.pathname == "/product" ? 'text-[--third]' : 
                            location.pathname == "/products" ? 'text-[--third]' : ''}`}
                    >
                        Products
                    </p>
                </div>
            </Link>
            <Link to="/cart">
                <div 
                    className={`flex flex-col items-center justify-center gap-1 cursor-pointer`}
                >
                    <RiShoppingCartLine
                        className={`${location.pathname == "/cart" ? 'text-[--third]' :
                        location.pathname == "/checkout" ? 'text-[--third]' : ''}`}
                    />
                    <p 
                        className={`text-xs font-medium
                        ${location.pathname == "/cart" ? 'text-[--third]' :
                        location.pathname == "/checkout" ? 'text-[--third]' : ''}`}
                    >
                        Cart
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default MobileMenu
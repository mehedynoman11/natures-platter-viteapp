import logo from "../assets/nav-logo.png"
import { FaCartShopping, FaMagnifyingGlass } from 'react-icons/fa6';
import type { IProductType } from './type/products';
import { FaCoins } from "react-icons/fa";
interface NavbarProps {
    cart: IProductType[];
    coin: number
}

const Navbar = ({ cart, coin }: NavbarProps) => {
    return (
        <nav className="sticky top-0 z-50 bg-cyan-50">
            <div className="flex justify-between items-center py-4 px-4 container mx-auto md:max-w-[1200px]">
                <img className="w-24 md:w-32 h-auto" src={logo} alt="LOGO" />
                <ul className="hidden md:flex gap-4 items-center justify-center text-lg">
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div className="hidden md:flex gap-4 items-center justify-center text-lg">
                    <FaMagnifyingGlass className='text-lg' />
                    <button className='btn btn-outline'><FaCartShopping className='  text-lg' /> {cart.length}</button>
                    <button className='btn btn-outline'><FaCoins className='  text-lg' /> {coin.toFixed(2)}</button>
                    <button className="btn border-green-500 border px-2 py-1 rounded" type="button">Login</button>
                    <button className="btn bg-green-500 px-2 py-1 text-white rounded" type="button">Register</button>
                </div>
                <div className="flex gap-2 items-center justify-around   md:hidden">
                    <button className='btn btn-sm btn-outline rounded-xl'><FaCoins className='  text-lg' /> {coin}</button>
                    <p className="bg-amber-200 flex items-center gap-2 p-1 rounded-xl"><a href="/Cart"><FaCartShopping className='text-lg '/>{cart.length} </a></p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
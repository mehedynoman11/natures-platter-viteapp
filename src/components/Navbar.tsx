import logo from "../assets/nav-logo.png"
import { FaCartShopping, FaMagnifyingGlass } from 'react-icons/fa6';
import type { IProductType } from './type/products';
interface NavbarProps {
    cart: IProductType[];
}

const Navbar = ({cart}:NavbarProps) => {
    return (
         <nav className="md:grid md:grid-cols-3 justify-center items-center pt-4 px-4 container mx-auto md:max-w-[1200px]">
            <img className="w-24 md:w-32 h-auto" src={logo} alt="LOGO"/>
            <ul className="hidden md:flex gap-4 items-center justify-center text-lg">
                <li><a href="#">Product</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="hidden md:flex gap-4 items-center justify-center text-lg">
                <FaMagnifyingGlass  className='text-lg'/>
                <button className='btn btn-outline'><FaCartShopping className='  text-lg'/> {cart.length}</button>
                <button className="btn border-green-500 border px-2 py-1 rounded" type="button">Login</button>
                <button className="btn bg-green-500 px-2 py-1 text-white rounded" type="button">Register</button>
            </div>
            <div className="flex items-center justify-end gap-4 md:hidden">
                <FaCartShopping className='text-lg'/> {cart.length}
            </div>
        </nav>
    );
};

export default Navbar;
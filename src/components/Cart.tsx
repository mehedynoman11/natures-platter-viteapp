import type { Dispatch, SetStateAction } from "react";
import type { IProductType } from "./type/products";
import { FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";

interface CartProps {
    cart: IProductType[];
    setCart: Dispatch<SetStateAction<IProductType[]>>
}

const Cart = ({ cart, setCart }: CartProps) => {
    const handleRemove = (selectedProduct: IProductType) => {
        const restCart = cart.filter((product) => product.name != selectedProduct.name);
        setCart(restCart);
        toast.success("product removed successfully.")
    }
    return (
        <div>
            <h1 className="text-3xl text-center font-bold">Selected Cart</h1>
            {cart.length <= 0 ? "Your cart is empty" : <div className="container mx-auto max-w-[1200px] py-20 grid grid-cols-3">
                {
                    cart.map((product) => {
                        return (
                            <div key={product.name} className="bg-white flex flex-col justify-between gap-2 rounded p-1 md:p-3">
                                <img className="w-14 h-14 md:w-40 md:h-40 mx-auto" src={product.img} alt="" />
                                <div className="text-center md:space-y-1">
                                    <p className='flex justify-center gap-2 items-center'><FaStar className='text-[#ffff82]' />{product.rating}</p>
                                    <p className="text-sm md:text-lg ">{product.name}</p>
                                    <p className=" font-bold text-shadow-md">{product.price}</p>
                                </div>
                                <button onClick={() => handleRemove(product)} className='btn w-full btn-error'>Remove from Cart</button>
                            </div>
                        )
                    })
                }

            </div> }
            
        </div>
    );
};

export default Cart;
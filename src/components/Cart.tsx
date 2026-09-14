import type { Dispatch, SetStateAction } from "react";
import type { IProductType } from "./type/products";
import { FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";

interface CartProps {
    cart: IProductType[];
    setCart: Dispatch<SetStateAction<IProductType[]>>
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
}

const Cart = ({ cart, setCart, coin, setCoin }: CartProps) => {
    const handleRemove = (selectedProduct: IProductType) => {
        const restCart = cart.filter((product) => product.name != selectedProduct.name);
        setCart(restCart);
        toast.success("product removed successfully.")

        const returnCoin = coin + selectedProduct.price;
        setCoin(returnCoin)
    }
    return (
        <div id="cart">
            <h1 className="text-3xl text-center font-bold">Selected Cart</h1>
            {cart.length <= 0 ?
            <div className="container mx-auto max-w-[1200px] my-10 border text-center text-3xl p-4 rounded-2xl text-gray-400">Your cart is empty</div>
            : <div className="container mx-auto max-w-[1200px] p-4 my-10 border grid grid-cols-3 gap-4">
                {
                    cart.map((product) => {
                        return (
                            <div className="shadow-md ">
                                <div key={product.name} className="bg-white flex flex-col justify-between gap-2 rounded p-1 md:p-3">
                                <img className="w-14 h-14 md:w-40 md:h-40 mx-auto" src={product.img} alt="" />
                                <div className="text-center md:space-y-1">
                                    <p className='flex justify-center gap-2 items-center'><FaStar className='text-[#ffff82]' />{product.rating}</p>
                                    <p className="text-sm md:text-lg ">{product.name}</p>
                                    <p className=" font-bold text-shadow-md">{product.price}</p>
                                </div>
                                <button onClick={() => handleRemove(product)} className='btn w-full btn-error'>Remove from Cart</button>
                            </div>
                            </div>
                        )
                    })
                }

            </div> }
            
        </div>
    );
};

export default Cart;
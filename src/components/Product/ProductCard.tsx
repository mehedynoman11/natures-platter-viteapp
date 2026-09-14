import { type Dispatch, type SetStateAction } from 'react';
import type { IProductType } from '../type/products';
import { FaStar } from 'react-icons/fa6';
import { toast } from 'react-toastify';

interface ProductCardProps {
    product: IProductType
    cart: IProductType[];
    setCart: Dispatch<SetStateAction<IProductType[]>>
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
}

const ProductCard = ({ product, cart, setCart, coin, setCoin }: ProductCardProps) => {

    const handleAddToCart = (product: IProductType) => {
        const newPrice = coin - product.price;

        if (newPrice < 0) {
            toast.error("Not enough money for purchase.");
            return;
        }

        setCart([...cart, product]);
        setCoin(newPrice);
        toast.success("Product added to cart.");

    }


    const isInCart = (product: IProductType) =>
        cart.some(cartProduct => cartProduct.name === product.name)
    return (
        <div className="bg-white flex flex-col justify-between gap-2 rounded p-1 md:p-3">
            <img className="w-14 h-14 md:w-40 md:h-40 mx-auto" src={product.img} alt="" />
            <div className="text-center md:space-y-1">
                <p className='flex justify-center gap-2 items-center'><FaStar className='text-[#ffff82]' />{product.rating}</p>
                <p className="text-sm md:text-lg ">{product.name}</p>
                <p className=" font-bold text-shadow-md">{product.price}</p>
            </div>
            <button
                disabled={isInCart(product)}
                onClick={() => handleAddToCart(product)}
                className='btn w-full btn-success'>{isInCart(product) ? "Added to cart" : "Add to Cart"}</button>
        </div>
    );
};

export default ProductCard;
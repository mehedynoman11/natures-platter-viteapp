import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import maskimg from "../../assets/Mask group.png"
import type { IProductType } from '../type/products';
import ProductCard from './ProductCard';
import { PulseLoader } from 'react-spinners';

interface PopularProductProps {
    cart: IProductType[];
    setCart: Dispatch<SetStateAction<IProductType[]>>
}

const PopularProduct = ({cart, setCart}:PopularProductProps) => {
    const [popularProduct, setPopularProduct] = useState<IProductType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productFetch = async () => {
            const res = await fetch("/products.json");
            const data = await res.json();
            setPopularProduct(data);
            setLoading(false);
        }
        productFetch();
    }, [])
    // console.log(popularProduct)

    

    return (
        <section className="bg-[#EFEBE3] text-center py-24 rounded-2xl px-10 ">
            <div className="container md:max-w-[1200px] mx-auto" />
            <h1 className="text-green-500 text-3xl md:text-4xl font-bold text-center md:text-left my-10">Popular
                Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 p-4 md:p-0">
                <div
                    className="text-left p-6 bg-linear-to-br from-[#53DB3A] to-[#DEF8DA] col-span-3 rounded-3xl md:rounded-l-3xl space-y-3">
                    <h1 className="text-2xl font-bold mt-5">30% off</h1>
                    <p>Discover a world of treats, toys, and essentials handpicked for </p>
                    <button className="border-green-500 px-4 py-1 bg-white text-lg rounded" type="button">Buy
                        Now</button>
                    <img className="w-64 -mt-15" src={maskimg} alt="" />
                </div>
                {loading ? <p className="p-10 text-2xl font-bold flex justify-start items-center gap-2">Loading <PulseLoader/></p> :
                    <div className=" col-span-9 grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-0">

                        {
                            popularProduct.map(product => {
                                return (
                                    <ProductCard cart={cart} setCart={setCart} key={product.name} product={product} />
                                )
                            })
                        }
                    </div>}
            </div>
        </section>
    );
};

export default PopularProduct;
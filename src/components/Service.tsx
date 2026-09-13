import service from "../assets/service.png"
import delivery from "../assets/delivery.png"
import prodcuctimg from "../assets/products.png"

const Service = () => {
    return (
        <section className="container mx-auto text-center my-24 md:max-w-[1200px]">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-5">Services</h1>
            <div className="flex flex-col md:flex-row gap-6 mx-auto">
                <div className="text-center p-4 bg-[#EFEBE3] ">
                    <div className="bg-white rounded-full h-30 w-30 text-center flex justify-center items-center mx-auto">
                        <img className="" src={service} alt=""/>
                    </div>
                    <h1 className="text-xl font-bold">24/7 Services </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                <div className="text-center p-4 bg-[#EFEBE3] ">
                    <div className="bg-white rounded-full h-30 w-30 text-center flex justify-center items-center mx-auto">
                        <img className="" src={delivery} alt=""/>
                    </div>
                    <h1 className="text-xl font-bold">Fast Delivery</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                <div className="text-center p-4 bg-[#EFEBE3] ">
                    <div className="bg-white rounded-full h-30 w-30 text-center flex justify-center items-center mx-auto">
                        <img className="" src={prodcuctimg} alt=""/>
                    </div>
                    <h1 className="text-xl font-bold">Healthy Products</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
            </div>
        </section>
    );
};

export default Service;
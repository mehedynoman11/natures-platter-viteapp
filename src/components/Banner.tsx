import banner from "../assets/Hero Section 1.png"

const Banner = () => {
    return (
    <header className='container mx-auto md:max-w-[1200px] '>
        <div className="mt-10 md:mt-20 px-4">
            <div className="text-center ">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Freshness <span className="text-green-500">You
                    Can<br /> Count</span> On,
                    Prices You’ll Love!</h1>
                <p>Shop your daily essentials at unbeatable prices. From fresh produce to pantry <br /> staples, we’ve got
                    you covered every day!</p>
            </div>
            <img className="h-48 sm:h-64 md:h-96 lg:h-[37.5rem] mx-auto mt-6" src={banner} alt="" />
        </div>
    </header>

    );
};

export default Banner;
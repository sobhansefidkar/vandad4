import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Header() {
    const arr = [
        "",
        ""
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
        autoplay: 10000,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                },
            },
        ],
    };

    return (
        <div className="header3 w-full h-[100vh] relative lgmax:h-auto lgmax:mt-36 max-w-[1300px] max-h-[1100px]">
            <div className=" w-full h-[200px] absolute bottom-0 left-0 z-20 bg-gradient-to-t from-[rgb(231,231,231)] to-transparent">

            </div>
            <Slider {...settings}>
                {
                    arr.map((item, i) => {
                        return (
                            <div className="header-container3 h-[100vh] lgmax:h-[500px] relative w-full">

                            </div>
                        )
                    })
                }
            </Slider>
            <div className=" absolute w-full h-auto flex flex-col gap-6 px-3 mdmax:py-3 top-[50%] translate-y-[-50%]">
                <h1 className=" text-[40px] smmax:text-[25px] font-bold">شرکت ونداد نوین آماده خدمت<br /> رساندن به شماست.</h1>
                <p className=" max-w-[500px] text-md text-gray-500 mdmax:text-gray-800 z-10">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                <button
                    className="relative inline-flex max-w-max items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-red-500 rounded-md group"
                >
                    <span
                        className="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-600 rounded-full group-hover:w-56 group-hover:h-56"
                    ></span>
                    <span className="absolute bottom-0 left-0 h-full -ml-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-auto h-full opacity-100 object-stretch"
                            viewBox="0 0 487 487"
                        >
                            <path
                                fillOpacity=".1"
                                fillRule="nonzero"
                                fill="#FFF"
                                d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                            ></path>
                        </svg>
                    </span>
                    <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="object-cover w-full h-full"
                            viewBox="0 0 487 487"
                        >
                            <path
                                fillOpacity=".1"
                                fillRule="nonzero"
                                fill="#FFF"
                                d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                            ></path>
                        </svg>
                    </span>
                    <span
                        className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
                    ></span>
                    <span className="relative text-base font-semibold">درباره ما</span>
                </button>

            </div>
        </div>
    );
}

export default Header;
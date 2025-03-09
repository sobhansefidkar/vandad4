import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Equipments() {
    const costumers = [
        { name: "سایاهو", type: "قراردادی", phone: "09018619939", img: "../../images/logo/logo (1).webp" },
        { name: "تولید نور", type: "قراردادی", phone: "09019109939", img: "../../images/logo/logo (2).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09015006639", img: "../../images/logo/logo (3).webp" },
        { name: "سایاهو", type: "پروژه ای", phone: "09011239939", img: "../../images/logo/logo (4).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017309939", img: "../../images/logo/logo (5).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09015909939", img: "../../images/logo/logo (6).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017409939", img: "../../images/logo/logo (7).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017369269", img: "../../images/logo/logo (8).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09658709939", img: "../../images/logo/logo (9).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017422648", img: "../../images/logo/logo (10).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09018509951", img: "../../images/logo/logo (11).webp" },
        { name: "سایاهو", type: "قراردادی", phone: "09017409369", img: "../../images/logo/logo (12).webp" },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: true,
        arrows: true,
        autoplay: 10000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                    dots: true
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                },
            },
        ],
    };
    return (
        <div className="equipments w-full h-full flex justify-center">
            <div className="equipments-container w-full h-full flex items-center justify-evenly max-w-[1300px] py-5">
                <div className="equipment-text lgmax:hidden">
                    <img className=' w-48' src="../../images/case.png" alt="" />
                </div>
                <div className="equipment-slider w-[80%] lgmax:w-full flex justify-center">
                    <div className=' w-[90%]'>
                        <Slider {...settings}>
                            {
                                costumers.map((item, i) => {
                                    return (
                                        <div key={i} className=" duration-500  lgmax:max-w-[90%] max-w-[250px] min-h-[350px] bg-white rounded-lg shadow-lg overflow-hidden">
                                            <div className=' w-full h-[350px] flex items-center justify-center'>
                                                ایتم
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Equipments;
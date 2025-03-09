import { useEffect, useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Header() {
    const imgs = [
        "../../images/VOIP.jpg",
        "../../images/VOIP.jpg",
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


    // const [text, setText] = useState("")
    // let p = " به عنوان یک شرکت مستقل، در سال ۱۳۹۹ فعالیت خود را آغاز نموده و مفتخریم با بهره گیری از تجربیات ارزشمند و موفق چند ساله خود و با همکاری متخصصان مجرب و با رعایت استانداردهای کیفی با شتابی بیشتر از گذشته، جایگاه خود را در حوزه خدمات شبکه های کامپیوتری ارتقا دهیم. "



    // const addNextCharacter = () => {
    //     if (p.length > text.length) {
    //         setText((prevText) => prevText + p[prevText.length]);
    //     }
    // }

    // useEffect(() => {

    //     let interval;

    //     if (text.length < p.length) {
    //         interval = setInterval(addNextCharacter, 50);
    //     }

    //     return () => clearInterval(interval);
    // }, [text])
    return (
        <div className="header w-full max-w-[1300px] h-auto flex justify-center mdmax:h-auto relative mt-24 pb-10">
            <div className="header-container w-full h-full">
                <Slider {...settings}>
                    {
                        imgs.map((item, i) => {
                            return (
                                <div key={i}>
                                    <img className=" max-h-[500px] min-w-full" src={item} alt="" />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Header;
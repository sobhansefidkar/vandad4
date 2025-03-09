import { useEffect, useRef } from "react";

function Factories() {
    const imgs = [
        "../../images/logo (1).webp",
        "../../images/logo (2).webp",
        "../../images/logo (3).webp",
        "../../images/logo (4).webp",
        "../../images/logo (5).webp",
        "../../images/logo (6).webp",
        "../../images/logo (7).webp",
        "../../images/logo (8).webp",
        "../../images/logo (9).webp",
        "../../images/logo (10).webp",
        "../../images/logo (11).webp",
        "../../images/logo (12).webp",
        "../../images/logo (13).webp",
    ]

    return (
        <div className="factories w-full h-44 flex justify-center relative">
            <div className="cover-factories absolute w-full h-full  max-w-[1101px]"></div>
            <div className="factories-container w-full h-full flex relative max-w-[1101px] p-2 overflow-hidden">
                <div className=" whitespace-nowrap z-[-1]" style={{"--time": "20s"}}>
                    {
                        imgs.map((item , i) => {
                            return (
                                <img className=" inline-flex m-2 max-w-32" style={{mixBlendMode : "color-burn"}} key={i} src={item} alt="" />
                            )
                        })
                    }
                </div>
                <div className=" whitespace-nowrap z-[-1]">
                    {
                        imgs.map((item , i) => {
                            return (
                                <img className=" inline-flex m-2 max-w-32" style={{mixBlendMode : "color-burn"}} key={i} src={item} alt="" />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Factories;
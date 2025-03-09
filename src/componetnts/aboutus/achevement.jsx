import { useState } from "react";

function Achevment() {

    const [achevments , setAchevments] = useState([
        {img : "../../images/camera.webp" , for : "تندیس طلایی رعایت حقوق مصرف‌کنندگان" , from : "از سازمان حمایت از حقوق مصرف‌کنندگان و تولیدکنندگان" , clicked : false},
        {img : "../../images/camera.webp" , for : "تندیس طلایی رعایت حقوق مصرف‌کنندگان" , from : "از سازمان حمایت از حقوق مصرف‌کنندگان و تولیدکنندگان" , clicked : false},
        {img : "../../images/camera.webp" , for : "تندیس طلایی رعایت حقوق مصرف‌کنندگان" , from : "از سازمان حمایت از حقوق مصرف‌کنندگان و تولیدکنندگان" , clicked : false},
        {img : "../../images/camera.webp" , for : "تندیس طلایی رعایت حقوق مصرف‌کنندگان" , from : "از سازمان حمایت از حقوق مصرف‌کنندگان و تولیدکنندگان" , clicked : false},
        {img : "../../images/camera.webp" , for : "تندیس طلایی رعایت حقوق مصرف‌کنندگان" , from : "از سازمان حمایت از حقوق مصرف‌کنندگان و تولیدکنندگان" , clicked : false},
        {img : "../../images/camera.webp" , for : "تندیس طلایی رعایت حقوق مصرف‌کنندگان" , from : "از سازمان حمایت از حقوق مصرف‌کنندگان و تولیدکنندگان" , clicked : false},
    ])
    console.log(achevments)
    return (
        <div className="achevment w-full h-auto flex justify-center mt-10">
            <div className="achevment-container w-full h-full max-w-[1100px] flex flex-col">
                <div className=" flex justify-center">
                    <h2 className=" px-3 py-2 border-b border-gray-400 text-2xl">دستاورد های ونداد نوین</h2>
                </div>
                <div className=" mt-5 flex flex-wrap justify-evenly">
                    {
                        achevments.map((item, i) => {
                            return (
                                <div key={i} className=" flex gap-5 items-center border-b border-gray-300 px-3 mb-4" data-aos="fade-up">
                                    <div className="achevment-spinner p-1 overflow-hidden">
                                        <div  onClick={() => {
                                                item.clicked = true
                                                setAchevments([...achevments])
                                            }} className={`${item.clicked === true ? "" : ""} bg-[rgb(231,231,231)] z-10`}>
                                            <img className={`w-24`} src={item.img} alt="" />
                                        </div>
                                    </div>
                                    <div className=" flex flex-col">
                                        <span className=" text-sm">{item.for}</span>
                                        <span className=" text-gray-400 text-xs">{item.from}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Achevment;
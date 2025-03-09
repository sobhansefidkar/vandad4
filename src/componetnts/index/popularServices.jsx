function PopularServices() {
    const items = [
        {img : "../../images/popular-services/security.png" , text: "مانیتورینگ شبکه" },
        {img : "../../images/popular-services/search.png" , text: "گزارش وب گردی" },
        {img : "../../images/popular-services/web-traffic.png" , text: "میزان ترافیک مصرفی" },
        {img : "../../images/popular-services/activated.png" , text: "خدمات passive/active" },
    ]
    return (
        <div className="popularServices w-full h-full flex justify-center bg-[#ED1C2B]">
            <div className="popularServices-container w-full h-full max-w-[1300px] flex mdmax:flex-col py-5 gap-5">
                <div className=" w-[15%] mdmax:w-full min-w-[100px] flex  justify-center items-center py-3">
                    <div className=" text-center text-3xl font-bold mdmax:flex" style={{ letterSpacing: "5px" }}>
                        <h2>
                            خدمات
                        </h2>
                        <h2>
                            محبوب
                        </h2>
                        <h2>
                            ما
                        </h2>
                    </div>
                </div>
                <div className=" w-[85%] mdmax:w-full mdmax:px-3 py-3">
                    <ul className=" flex justify-around gap-5 overflow-auto py-3">
                        {
                            items.map((item, i) => {
                                return (
                                    <li key={i} className=" w-60 min-w-60 h-60 hover:scale-[1.03] bg-white shadow-xl duration-500 flex flex-col gap-5 items-center justify-center rounded-lg">
                                        <img className=" w-20" src={item.img} alt="" />
                                        {item.text}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PopularServices;
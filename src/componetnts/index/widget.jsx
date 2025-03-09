
function Widget() {
    const widgets = [
        { img: "../../images/widget/global-network.png", text: "اینترنت بهینه و پر سرعت، بدون قطعی و مطمئن اصلی‌ترین نیاز شماست." , title : "سرویس های اینترنت"},
        { img: "../../images/widget/displacement.png", text: "با انجام انتقالات در روز غیر کاری و در کمترین زمان ممکن، نگران خسارات قطعی سیستم نباشید." , title : "جابجایی شبکه"},
        { img: "../../images/widget/customer-service.png", text: "یک پشتیبان همه جانبه و مطمئن خیال شما رو از بابت همه چیز راحت می کنه." , title : "پشتیبان شبکه"},
        { img: "../../images/widget/voip.png", text: "برقراری تماس از طریق اینترنت یا همان ویپ راهی حرفه‌ای و کم هزینه برای ارتباطات شماست." , title : "تلفن VOIP"},
    ]
    return (
        <div className="widget w-full h-auto flex justify-center mb-10">
            <div className="widget-container w-full max-w-[1300px] h-full flex p-3">
                <ul className="widget-scroller w-full h-auto flex-wrap flex justify-between smmax:justify-center items-center gap-5">
                    {widgets.map((item, i) => {
                        return (
                            <li key={i} className=" w-96 max-w-72 h-72 flex flex-col items-center justify-evenly border rounded-xl p-2 shadow-xl hover:translate-y-5 duration-500">
                                <div>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className=" w-full flex flex-col items-center justify-center gap-4">
                                    <h2 className=" font-bold">{item.title}</h2>
                                    <p className=" text-center text-sm">{item.text}</p>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Widget;

function services() {
    const topImages = [
        { id: 1, image: "../../images/live-projects/1 (7).jpg" },
        { id: 2, image: "../../images/live-projects/1 (5).jpg" },
        { id: 3, image: "../../images/live-projects/1 (2).jpg" },
        { id: 4, image: "../../images/live-projects/1 (3).jpg" },
        { id: 5, image: "../../images/live-projects/1 (2).jpg" },
        { id: 1, image: "../../images/live-projects/1 (7).jpg" },
        { id: 2, image: "../../images/live-projects/1 (3).jpg" },
        { id: 3, image: "../../images/live-projects/1 (6).jpg" },
        { id: 4, image: "../../images/live-projects/1 (7).jpg" },
        { id: 5, image: "../../images/live-projects/1 (2).jpg" },
    ]

    return (
            <div className="gallery h-auto overflow-hidden mdmin:mt-10">
                <div className="gallery-containe w-full h-full max-w-[1300px]">
                    <div className="top-images w-full h-1/2 flex gap-4 p-2">
                        {
                            topImages.map((item, i) => {
                                return (
                                    <img key={i} className=" w-48 rounded-lg" src={item.image} alt="" />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    );
}

export default services;
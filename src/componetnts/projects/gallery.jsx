import Projects from "@/pages/projects";

function services() {
    const topImages = [
        { id: 11, image: "../../images/live-projects/1 (11).jpg", class: "item11" },
        { id: 3, image: "../../images/live-projects/1 (3).jpg", class: "item3" },
        { id: 4, image: "../../images/live-projects/1 (4).jpg", class: "item4" },
        { id: 5, image: "../../images/live-projects/1 (5).jpg", class: "item5" },
        { id: 6, image: "../../images/live-projects/1 (6).jpg", class: "item6" },
        { id: 7, image: "../../images/live-projects/1 (7).jpg", class: "item7" },
        { id: 8, image: "../../images/live-projects/1 (8).jpg", class: "item8" },
        { id: 9, image: "../../images/live-projects/1 (9).jpg", class: "item9" },
        { id: 10, image: "../../images/live-projects/1 (10).jpg", class: "item10" },
        { id: 1, image: "../../images/live-projects/1 (1).jpg", class: "item1" },
    ]

    return (
        <Projects>
            <div className="gallery h-auto overflow-hidden mdmin:mt-10">
                <div className="gallery-container w-[1100px] h-full">
                    <div className="masonry w-full">
                        {
                            topImages.map((item, i) => {
                                return (
                                    <div key={i} className={`item ${item.class}`} data-aos="fade-up">
                                        <img src={item.image} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover"></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Projects>
    );
}

export default services;
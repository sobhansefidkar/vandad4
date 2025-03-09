function Slogan() {
    return (
        <div className="slogan w-full h-auto flex justify-center mb-10 mt-10">
            <div className="slogan-container w-full h-full max-w-[1300px] text-center">
                <div
                    className="mx-auto w-full max-w-96 relative flex flex-col items-center justify-center text-center overflow-visible"
                >
                    <h3 className="text-2xl font-bold mb-3">شعار شما در اینجا قرار میگیرد</h3>
                    <div className="w-full relative flex flex-col items-center justify-center">
                        <div
                            className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[2px] w-full blur-sm"
                        ></div>
                        <div
                            className="absolute inset-x-auto top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-full"
                        ></div>

                        <div
                            className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(50%_200px_at_top,transparent_20%,white)]"
                        ></div>
                    </div>
                    <p className="mt-6 text-sm px-5">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Slogan;
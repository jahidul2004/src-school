const Teachers = () => {
    return (
        <div className="my-10 mx-2 md:mx-5">
            <h1 className="text-3xl md:text-4xl font-bold text-center my-5 md:my-8 py-5 mx-2 md:mx-4 rounded-lg bg-gradient-to-l from-[#027afb] to-[#00c2ff] text-white shadow-lg transform transition-all duration-500 hover:scale-105">
                শিক্ষক মণ্ডলী
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <div className="order-1 md:order-2 rounded-lg w-full bg-[#027afb1c]">
                    <div>
                        <img
                            className="h-[250px] mx-auto"
                            src="https://i.ibb.co.com/Y3k05S1/sahadat-Sumon.png"
                            alt=""
                        />
                    </div>
                    <div className="rounded-b-lg text-center p-4 bg-[#027afb]">
                        <h1 className="text-2xl font-bold text-white">
                            শাহাদাৎ হোসেন সুমন
                        </h1>
                        <p className="text-white">
                            উপধাক্ষ (পদার্থবিজ্ঞান) <br /> শ্রীরায়েরচর এস.আই.এম
                            উচ্চ বিদ্যালয়
                        </p>
                        <button className="btn mt-4">আরো জানুন</button>
                    </div>
                </div>
                <div className="order-1 md:order-2 rounded-lg w-full bg-[#027afb1c]">
                    <div>
                        <img
                            className="h-[250px] mx-auto"
                            src="https://i.ibb.co.com/MszGkb2/principle-Pic.png"
                            alt=""
                        />
                    </div>
                    <div className="rounded-b-lg text-center p-4 bg-[#027afb]">
                        <h1 className="text-2xl font-bold text-white">
                            মোঃ নূর আজিজ
                        </h1>
                        <p className="text-white">
                            অধ্যক্ষ (ভারপ্রাপ্ত) <br /> শ্রীরায়েরচর এস.আই.এম
                            উচ্চ বিদ্যালয়
                        </p>
                        <button className="btn mt-4">আরো জানুন</button>
                    </div>
                </div>
                <div className="order-1 md:order-2 rounded-lg w-full bg-[#027afb1c]">
                    <div>
                        <img
                            className="h-[250px] mx-auto"
                            src="https://i.ibb.co.com/GsLh2zg/narayan-Chandra.png"
                            alt=""
                        />
                    </div>
                    <div className="rounded-b-lg text-center p-4 bg-[#027afb]">
                        <h1 className="text-2xl font-bold text-white">
                            নারায়ন চন্দ্র মোদক
                        </h1>
                        <p className="text-white">
                            সিনিওর শিক্ষক, (জীববিজ্ঞান) <br /> শ্রীরায়েরচর
                            এস.আই.এম উচ্চ বিদ্যালয়
                        </p>
                        <button className="btn mt-4">আরো জানুন</button>
                    </div>
                </div>
            </div>
            <div className="mt-4 md:mt-8 flex justify-center items-center">
                <button className="btn btn-lg bg-[#027afb] text-white border-none">
                    সকল শিক্ষকদের দেখুন
                </button>
            </div>
        </div>
    );
};

export default Teachers;

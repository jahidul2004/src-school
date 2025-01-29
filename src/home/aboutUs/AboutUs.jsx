const AboutUs = () => {
    return (
        <div className="my-20">
            <h1 className="text-3xl md:text-4xl font-bold text-center my-5 md:my-8 py-5 mx-2 md:mx-4 rounded-lg bg-gradient-to-l from-[#027afb] to-[#00c2ff] text-white shadow-lg transform transition-all duration-500 hover:scale-105">
                আমাদের সম্পর্কে
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mx-2 md:mx-5">
                <div>
                    <img
                        className="rounded-lg w-full h-[250px] md:h-[430px] object-cover"
                        src="https://i.ibb.co.com/SxtJdzT/school.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <div className="bg-[#027afb17] p-4 rounded-lg">
                        <h1 className="text-xl font-bold mb-4">
                            স্কুলের ইতিহাস ও পরিচিতি
                        </h1>
                        <p className="text-lg">
                            শ্রীরায়েরচর এস.আই.এম. উচ্চ বিদ্যালয় কুমিল্লা জেলার
                            দাউদকান্দি থানার শ্রীরায়েরচর গ্রামে অবস্থিত একটি
                            ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। স্কুলটি গ্রামের
                            শিক্ষার্থীদের আলোকিত ভবিষ্যৎ গড়ার জন্য একটি
                            গুরুত্বপূর্ণ ভূমিকা পালন করছে। স্কুলটির প্রতিষ্ঠাতা
                            সিরাজুল ইসলাম মহোদয়, যিনি শিক্ষার আলো ছড়িয়ে
                            দেওয়ার উদ্দেশ্যে এই স্কুলটি প্রতিষ্ঠা করেন।এর EIIN:
                            105526। <br />
                            এখানে ষষ্ঠ শ্রেণি থেকে দশম শ্রেণি পর্যন্ত
                            শিক্ষার্থীদের পাঠদান করা হয়। গ্রামাঞ্চলের মাঝে
                            অবস্থিত হলেও এই স্কুলটি আধুনিক শিক্ষার সাথে
                            সামঞ্জস্য রেখে শিক্ষার্থীদের জন্য একটি মনোরম পরিবেশ
                            তৈরি করেছে।{" "}
                            <span className="hidden md:inline">
                                স্কুলটির লক্ষ্য শুধু পরীক্ষার ফলাফল নয়, বরং
                                নৈতিক মূল্যবোধ ও চরিত্র গঠনের মাধ্যমে
                                শিক্ষার্থীদের একটি সুন্দর ভবিষ্যৎ উপহার দেওয়া।
                                স্কুলের শিক্ষকগণ পরিশ্রমী ও নিবেদিতপ্রাণ।
                                শিক্ষার্থীদের মানসিক, শারীরিক ও সাংস্কৃতিক
                                উন্নতির জন্য স্কুলে বিভিন্ন কার্যক্রম পরিচালিত
                                হয়।
                            </span>
                        </p>
                    </div>
                    <div>
                        <div className="w-full mt-2 md:mt-4 grid grid-cols-2 md:grid-cols-4 text-center">
                            <div className="bg-[#027afb] p-4 text-white">
                                <h1 className="text-2xl font-bold">১২০০+</h1>
                                <p>শিক্ষার্থী</p>
                            </div>
                            <div className="bg-[#00b795] p-4 text-white">
                                <h1 className="text-2xl font-bold">২০+</h1>
                                <p>শিক্ষক</p>
                            </div>
                            <div className="bg-[#f0645f] p-4 text-white">
                                <h1 className="text-2xl font-bold">৫০০০+</h1>
                                <p>অ্যালামনি</p>
                            </div>
                            <div className="bg-[#6c63ff] p-4 text-white">
                                <h1 className="text-2xl font-bold">২+</h1>
                                <p>স্টাফ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-5 md:mt-10">
                <button className="btn btn-lg bg-[#027afb] text-white border-none shadow-none">
                    আরও জানুন...
                </button>
            </div>
        </div>
    );
};

export default AboutUs;

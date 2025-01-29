import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
    const [progress, setProgress] = useState(100);
    const progressInterval = useRef(null);
    const swiperRef = useRef(null);

    const startProgress = () => {
        let timeLeft = 5000;
        setProgress(100);
        progressInterval.current = setInterval(() => {
            timeLeft -= 100;
            setProgress((timeLeft / 5000) * 100);
        }, 100);
    };

    useEffect(() => {
        startProgress();
        return () => clearInterval(progressInterval.current);
    }, []);

    return (
        <div className="relative">
            <Swiper
                ref={swiperRef}
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                slidesPerView={1}
                onSlideChange={() => startProgress()}
                onMouseEnter={() => clearInterval(progressInterval.current)}
                onMouseLeave={() => startProgress()}
            >
                {/* First Slide */}
                <SwiperSlide>
                    <div
                        className="hero h-[600px] md:min-h-screen bg-cover bg-center relative"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co/DYd16TV/5680e4eb-33ea-48b7-85a1-a2c75c66651f.jpg)",
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="absolute inset-0 flex justify-center items-center text-center text-white backdrop-blur-[2px] bg-[#0003]">
                            <div className="max-w-2xl">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#abcbec]">
                                    <span>&#8220;</span>আমাদের বিদ্যালয়ে আপনাকে
                                    স্বাগতম
                                </h1>
                                <p className="mb-5 text-[#f1f1f1]">
                                    আমাদের বিদ্যালয় ছাত্র-ছাত্রীদের সামগ্রিক
                                    বিকাশের দিকে লক্ষ্য রাখে। শিক্ষার পাশাপাশি
                                    নৈতিকতা, শৃঙ্খলা ও নেতৃত্বের গুণাবলি বিকাশে
                                    গুরুত্ব দেওয়া হয়। সহপাঠ্যক্রমিক কার্যক্রম,
                                    যেমন খেলাধুলা, সাংস্কৃতিক অনুষ্ঠান ও বিজ্ঞান
                                    মেলা আয়োজনের মাধ্যমে শিক্ষার্থীদের সৃজনশীলতা
                                    ও দক্ষতা উন্নয়নে আমরা প্রতিশ্রুতিবদ্ধ।
                                </p>
                                <button className="btn btn-lg shadow-none bg-[#027afb] text-white border-none">
                                    আরো বিস্তারিত জানুন
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Second Slide */}
                <SwiperSlide>
                    <div
                        className="hero h-[600px] md:min-h-screen bg-cover bg-center relative"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co.com/SxtJdzT/school.jpg)",
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="absolute inset-0 flex justify-center items-center text-center text-white backdrop-blur-[2px] bg-[#0003]">
                            <div className="max-w-2xl">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#abcbec]">
                                    <span>&#8220;</span>একটি আলোকিত আগামী গড়ার
                                    অঙ্গীকার
                                </h1>
                                <p className="mb-5 text-[#f1f1f1]">
                                    আমাদের বিদ্যালয় ছাত্র-ছাত্রীদের সামগ্রিক
                                    বিকাশের দিকে লক্ষ্য রাখে। শিক্ষার পাশাপাশি
                                    নৈতিকতা, শৃঙ্খলা ও নেতৃত্বের গুণাবলি বিকাশে
                                    গুরুত্ব দেওয়া হয়। সহপাঠ্যক্রমিক কার্যক্রম,
                                    যেমন খেলাধুলা, সাংস্কৃতিক অনুষ্ঠান ও বিজ্ঞান
                                    মেলা আয়োজনের মাধ্যমে শিক্ষার্থীদের সৃজনশীলতা
                                    ও দক্ষতা উন্নয়নে আমরা প্রতিশ্রুতিবদ্ধ।
                                </p>
                                <button className="btn btn-lg shadow-none bg-[#027afb] text-white border-none">
                                    আরো বিস্তারিত জানুন
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Third Slide */}
                <SwiperSlide>
                    <div
                        className="hero h-[600px] md:min-h-screen bg-cover bg-center relative"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co.com/q5FTsWz/c2acb51d-317b-4956-9b66-40d60f60ff4b.jpg)",
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="absolute inset-0 flex justify-center items-center text-center text-white backdrop-blur-[2px] bg-[#0003]">
                            <div className="max-w-2xl">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#abcbec]">
                                    <span>&#8220;</span>শিক্ষা, সংস্কৃতি ও
                                    সাফল্যের মিলনস্থল
                                </h1>
                                <p className="mb-5 text-[#f1f1f1]">
                                    আমাদের বিদ্যালয় ছাত্র-ছাত্রীদের সামগ্রিক
                                    বিকাশের দিকে লক্ষ্য রাখে। শিক্ষার পাশাপাশি
                                    নৈতিকতা, শৃঙ্খলা ও নেতৃত্বের গুণাবলি বিকাশে
                                    গুরুত্ব দেওয়া হয়। সহপাঠ্যক্রমিক কার্যক্রম,
                                    যেমন খেলাধুলা, সাংস্কৃতিক অনুষ্ঠান ও বিজ্ঞান
                                    মেলা আয়োজনের মাধ্যমে শিক্ষার্থীদের সৃজনশীলতা
                                    ও দক্ষতা উন্নয়নে আমরা প্রতিশ্রুতিবদ্ধ।
                                </p>
                                <button className="btn btn-lg shadow-none bg-[#027afb] text-white border-none">
                                    আরো বিস্তারিত জানুন
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-400">
                <div
                    className="h-full bg-blue-500"
                    style={{
                        width: `${progress}%`,
                        transition: "width 0.1s linear",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Hero;

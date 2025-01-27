import { useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

const Hero = () => {
    const sliderRef = useRef(null);
    const slider = useRef(null);

    useEffect(() => {
        // Initialize Keen Slider once the component is mounted
        if (sliderRef.current) {
            slider.current = new KeenSlider(sliderRef.current, {
                loop: true, // Enables infinite loop
                slidesPerView: 1, // Number of slides to show at once
                spacing: 10, // Space between slides (optional)
                autoplay: {
                    delay: 5000, // 5 seconds per slide
                    pauseOnHover: true, // Pause autoplay on hover
                },
                // Add any other Keen Slider options you need
            });
        }

        return () => {
            // Clean up when the component is unmounted
            if (slider.current) {
                slider.current.destroy();
            }
        };
    }, []); // The empty array ensures this effect only runs on mount/unmount

    return (
        <div>
            <div ref={sliderRef} className="keen-slider">
                {/* First Slide */}
                <div className="keen-slider__slide">
                    <div
                        className="hero h-[600px] md:min-h-screen bg-cover bg-center relative"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co/DYd16TV/5680e4eb-33ea-48b7-85a1-a2c75c66651f.jpg)",
                            filter: "blur(2px)",
                        }}
                    >
                        {/* Hero Overlay */}
                        <div className="hero-overlay bg-opacity-60"></div>
                    </div>
                    {/* Front content */}
                    <div className="absolute inset-0 flex justify-center items-center text-neutral-content text-center w-full h-full">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-4xl md:text-5xl font-bold text-white">
                                স্বাগতম আমাদের বিদ্যালয়ে
                            </h1>
                            <p className="mb-5 text-white">
                                আমাদের বিদ্যালয় একাধিক কার্যক্রমের মাধ্যমে
                                ছাত্র-ছাত্রীদের সামগ্রিক বিকাশের দিকে লক্ষ্য
                                রাখে।
                            </p>
                            <button className="btn btn-lg bg-[#027afb] text-white border-none shadow-none">
                                আরো বিস্তারিত জানুন
                            </button>
                        </div>
                    </div>
                </div>

                {/* Second Slide */}
                <div className="keen-slider__slide">
                    <div
                        className="hero h-[600px] md:min-h-screen bg-cover bg-center relative"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co/SxtJdzT/school.jpg)",
                            filter: "blur(2px)",
                        }}
                    >
                        {/* Hero Overlay */}
                        <div className="hero-overlay bg-opacity-60"></div>
                    </div>
                    {/* Front content */}
                    <div className="absolute inset-0 flex justify-center items-center text-neutral-content text-center w-full h-full">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-4xl md:text-5xl font-bold text-white">
                                উন্নত শিক্ষা ও সুযোগ
                            </h1>
                            <p className="mb-5 text-white">
                                শ্রীরায়ের চর এস আই এম হাই স্কুলে আমাদের
                                ছাত্র-ছাত্রীরা আধুনিক প্রযুক্তি ও দক্ষ
                                প্রশিক্ষণের মাধ্যমে সমৃদ্ধ হচ্ছে।
                            </p>
                            <button className="btn btn-lg bg-[#027afb] text-white border-none shadow-none">
                                বিস্তারিত জানুন
                            </button>
                        </div>
                    </div>
                </div>

                {/* Third Slide */}
                <div className="keen-slider__slide">
                    <div
                        className="hero h-[600px] md:min-h-screen bg-cover bg-center relative"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co/q5FTsWz/c2acb51d-317b-4956-9b66-40d60f60ff4b.jpg)",
                            filter: "blur(2px)",
                        }}
                    >
                        {/* Hero Overlay */}
                        <div className="hero-overlay bg-opacity-60"></div>
                    </div>
                    {/* Front content */}
                    <div className="absolute inset-0 flex justify-center items-center text-neutral-content text-center w-full h-full">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-4xl md:text-5xl font-bold text-white">
                                দক্ষতা ও নেতৃত্বের পথে
                            </h1>
                            <p className="mb-5 text-white">
                                আমাদের বিদ্যালয় শুধু শিক্ষার মাধ্যমে নয়, বরং
                                নেতৃত্বের গুণাবলী এবং একাগ্রতার মাধ্যমে ছাত্রদের
                                গড়ে তোলে।
                            </p>
                            <button className="btn btn-lg bg-[#027afb] text-white border-none shadow-none">
                                আরও জানুন
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

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
                loop: true, // Optionally enable loop
                slidesPerView: 1, // Number of slides to show at once
                spacing: 10, // Space between slides (optional)
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
                                আমাদের বিদ্যালয়ে আপনাকে স্বাগতম
                            </h1>
                            <p className="mb-5 text-white">
                                আমাদের শ্রীরায়ের চর এস আই এম হাই স্কুল একটি
                                উন্নত শিক্ষা ব্যবস্থা ও সৃজনশীল পরিবেশে
                                ছাত্র-ছাত্রীদের মনোভাব ও দক্ষতা বিকাশের জন্য
                                প্রতিজ্ঞাবদ্ধ।
                            </p>
                            <button className="btn btn-lg bg-[#027afb] text-white border-none shadow-none">
                                আরো বিস্তারিত জানুন
                            </button>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide">2</div>
                <div className="keen-slider__slide">3</div>
            </div>
        </div>
    );
};

export default Hero;

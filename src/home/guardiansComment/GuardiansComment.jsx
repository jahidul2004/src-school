import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const comments = [
    {
        id: 1,
        name: "মোহাম্মদ হাসান",
        comment: "বিদ্যালয়ের শিক্ষা ব্যবস্থা অসাধারণ।",
    },
    { id: 2, name: "সালমা আক্তার", comment: "শিক্ষকরা খুব আন্তরিক ও যত্নশীল।" },
    {
        id: 3,
        name: "জসিম উদ্দিন",
        comment: "বিদ্যালয়ের পরিবেশ শিক্ষার জন্য চমৎকার।",
    },
    {
        id: 4,
        name: "রুবিনা বেগম",
        comment: "ছাত্রদের প্রতিভা বিকাশের সুযোগ রয়েছে।",
    },
];

const GuardiansComment = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % comments.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: "ease-in-out",
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="my-20">
            <h1 className="text-3xl md:text-4xl font-bold text-center my-5 md:my-8 py-5 mx-2 md:mx-4 rounded-lg bg-gradient-to-l from-[#027afb] to-[#00c2ff] text-white shadow-lg transform transition-all duration-500 hover:scale-105">
                অভিবাবকের মন্তব্য
            </h1>

            <div className="mt-8">
                <Slider {...settings}>
                    {comments.map((comment, index) => (
                        <motion.div
                            key={comment.id}
                            className="p-4"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: index === activeIndex ? 1.1 : 1,
                            }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                                <img
                                    className="w-[50px] h-[50px] rounded-full mx-auto mb-4"
                                    src="https://i.ibb.co.com/SxtJdzT/school.jpg"
                                    alt=""
                                />
                                <h3 className="text-lg font-semibold text-[#027afb]">
                                    {comment.name}
                                </h3>
                                <p className="text-gray-600">
                                    {comment.comment}
                                </p>
                                <span className="text-6xl text-[#027afb] absolute top-2 left-2">
                                    &#8220;
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default GuardiansComment;

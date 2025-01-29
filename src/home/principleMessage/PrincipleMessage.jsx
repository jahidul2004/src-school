const Academics = () => {
    return (
        <div className="my-20">
            <h1 className="text-3xl md:text-4xl font-bold text-center my-5 md:my-8 py-5 mx-2 md:mx-4 rounded-lg bg-gradient-to-l from-[#027afb]">
                অধ্যাক্ষের বাণী
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mx-2 md:mx-5">
                <div className="order-2 md:col-span-2 md:order-1 bg-[#027afb17] p-4 rounded-lg">
                    <h1 className="text-xl font-bold mb-4">
                        “শিক্ষাই জাতির মেরুদণ্ড”
                    </h1>
                    <p className="text-lg">
                        এই চিরন্তন সত্যকে সামনে রেখে আমাদের স্কুল, স্রীরায়েরচর
                        এস.আই.এম উচ্চ বিদ্যালয়, গ্রামীণ শিক্ষার আলো ছড়িয়ে দেওয়ার
                        জন্য নিরলসভাবে কাজ করে যাচ্ছে। একজন অধ্যক্ষ হিসেবে আমি
                        বিশ্বাস করি, সুশিক্ষা শুধু ব্যক্তিগত উন্নতির মাধ্যম নয়,
                        এটি সমাজ এবং জাতির উন্নয়নেও গুরুত্বপূর্ণ ভূমিকা পালন
                        করে। আমাদের স্কুলের প্রতিটি শিক্ষার্থীকে আমরা জ্ঞানের
                        আলোয় আলোকিত করার চেষ্টা করি।
                        <span className="hidden md:inline">
                            {" "}
                            তাদের নৈতিকতা, মানবিকতা, এবং সৃজনশীলতাকে বিকশিত করার
                            জন্য আমরা প্রতিশ্রুতিবদ্ধ। আমি আশা করি, এই
                            বিদ্যালয়ের শিক্ষার্থীরা ভবিষ্যতে দেশ ও সমাজের
                            উন্নয়নে অগ্রণী ভূমিকা পালন করবে। আপনার সন্তানদের
                            আমাদের হাতে তুলে দেওয়ার জন্য ধন্যবাদ। আমরা তাদের
                            ভবিষ্যৎ গড়তে সর্বোচ্চ প্রচেষ্টা করব।
                        </span>
                    </p>

                    <p className="mt-4">
                        অধ্যক্ষ <br /> শ্রীরায়েরচর এস.আই.এম উচ্চ বিদ্যালয়।
                    </p>
                </div>

                <div className="order-1 md:order-2 rounded-lg w-full h-[350px] md:h-[330px] bg-[#027afb1c]">
                    <div className="h-[75%]">
                        <img
                            className="h-full mx-auto"
                            src="https://i.ibb.co.com/MszGkb2/principle-Pic.png"
                            alt=""
                        />
                    </div>
                    <div className="h-[25%] rounded-b-lg text-center p-4 bg-[#027afb]">
                        <h1 className="text-2xl font-bold text-white">
                            মোঃ নূর আজিজ
                        </h1>
                        <p className="text-white">
                            অধ্যক্ষ(ভারপ্রাপ্ত), শ্রীরায়েরচর এস.আই.এম উচ্চ
                            বিদ্যালয়
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Academics;

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { MdOutlineSchool } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10 md:grid md:grid-cols-4 ">
                <nav>
                    <h6 className="footer-title text-xl">আমরা কারা?</h6>
                    <p>
                        শ্রীরায়ের চর এস আই এম হাই স্কুল (EIIN: 105526) একটি
                        ঐতিহ্যবাহী শিক্ষাপ্রতিষ্ঠান যা ছাত্র-ছাত্রীদের মননে এবং
                        চরিত্রে মানবিক গুণাবলী বিকাশের জন্য সর্বদা সচেষ্ট।
                        আমাদের স্কুল শিক্ষার মান উন্নয়নের পাশাপাশি সৃজনশীলতা,
                        নৈতিকতা ও সমাজিক দায়িত্বশীলতা গড়ে তোলার ওপর গুরুত্ব দেয়।
                    </p>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl">যোগাযোগ</h6>
                    <p>শ্রীরায়েরচর, দাউদকান্দি, কুমিল্লা</p>
                    <p>ফোনঃ +৮৮০১*********</p>
                    <p>ফোনঃ +৮৮০১*********</p>
                    <p>ইমেইলঃ src@gmail.com</p>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl">গুরুত্বপূর্ণ লিংক</h6>
                    <a href="">গোপনীয়তা শর্তাদি</a>
                    <a href="">এডমিশন পোর্টাল</a>
                    <a href="">ফর্মস ডাউনলোড</a>
                    <a href="">নোটিশ বোর্ড</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl">আমাদের নিউজলেটার</h6>
                    <div className="flex flex-col gap-2 w-full">
                        <input
                            type="text"
                            placeholder="আপনার ইমেইল দিন"
                            className="input input-bordered w-full max-w-2xl bg-transparent border-[#027afb] border-2"
                        />
                        <button className="btn bg-[#027afb] text-white w-full">
                            সাবস্ক্রাইব করুন
                        </button>
                    </div>
                </nav>
            </footer>
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    {/* Logo here */}
                    <MdOutlineSchool className="text-4xl text-[#027afb]" />
                    <p>
                        শ্রীরায়েরচর এস আই এম উচ্চ বিদ্যালয়
                        <br />
                        আধুনিক ও নৈতিক শিক্ষায় এক অনন্য প্রতিষ্ঠান
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-2xl md:text-3xl text-[#027afb]">
                        <a>
                            <FaFacebookSquare />
                        </a>
                        <a>
                            <FaSquareWhatsapp />
                        </a>
                        <a>
                            <FaYoutube />
                        </a>
                        <a>
                            <FaXTwitter />
                        </a>
                    </div>
                </nav>
                <p className="text-center">
                    © ২০২৫ শ্রীরায়ের চর এস আই এম উচ্চ বিদ্যালয়। সর্বস্বত্ব
                    সংরক্ষিত।
                </p>
            </footer>
        </div>
    );
};

export default Footer;

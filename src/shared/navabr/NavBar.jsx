import { useState } from "react";
import { CgReadme } from "react-icons/cg";
import { FaSchoolFlag } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { HiOutlineAcademicCap, HiOutlineViewGrid } from "react-icons/hi";
import { MdEventAvailable } from "react-icons/md";
import { RiHome9Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const links = (
        <>
            <li>
                <NavLink to="/">
                    <RiHome9Line />
                    হোম
                </NavLink>
            </li>
            <li>
                <NavLink to="/about">
                    <FaSchoolFlag />
                    আমাদের সম্পর্কে
                </NavLink>
            </li>
            <li>
                <NavLink to="/academic">
                    <HiOutlineAcademicCap />
                    একাডেমিক
                </NavLink>
            </li>
            <li>
                <NavLink to="/department">
                    <HiOutlineViewGrid />
                    বিভাগ
                </NavLink>
            </li>
            <li>
                <NavLink to="/events">
                    <MdEventAvailable />
                    ইভেন্টস
                </NavLink>
            </li>
            <li>
                <NavLink to="/gallery">
                    <GrGallery />
                    গ্যালারি
                </NavLink>
            </li>
            <li>
                <NavLink to="/admission">
                    <CgReadme />
                    এডমিশন
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 p-5">
            <div className="navbar-start">
                {/* Logo */}
                <a className="text-2xl font-bold text-[#027afb] flex items-center gap-2">
                    শ্রীরায়ের চর
                </a>
            </div>

            {/* Mmenu icon (Right side on small screens) */}
            <div className="navbar-end lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="btn btn-ghost"
                    aria-label="Toggle Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Navbar items for larger screens */}
            <div className="navbar-center hidden lg:flex text-[#027afb]">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    {links}
                </ul>
            </div>

            {/* Login button for larger screens */}
            <div className="navbar-end hidden lg:flex">
                <a className="btn btn-lg bg-[#027afb] text-white border-none">
                    লগইন
                </a>
            </div>

            {/* Drawer for small screens */}
            <div
                className={`${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } fixed inset-0 bg-white z-10 transition-transform duration-300 ease-in-out lg:hidden`}
            >
                {/* Cross icon to close the drawer */}
                <div className="absolute top-5 right-5">
                    <button onClick={toggleMenu} className="text-xl">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <ul className="menu p-5 text-lg">
                    <h1 className="text-3xl font-semibold pr-5 text-center mb-8 text-[#027afb]">
                        শ্রীরায়েরচর এস আই এম উচ্চ বিদ্যালয়
                    </h1>
                    {links}
                </ul>

                {/* Login Button inside drawer */}
                <div className="p-5 flex flex-col gap-4">
                    <a className="btn btn-lg bg-[#027afb] text-white border-none w-full">
                        লগইন
                    </a>
                    <a className="btn btn-lg border-2 border-[#027afb] w-full text-[#027afb]">
                        রেজিস্টার
                    </a>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 lg:hidden"
                    onClick={toggleMenu}
                ></div>
            )}
        </div>
    );
};

export default NavBar;

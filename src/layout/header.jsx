import React, { useState, useEffect } from 'react';
import HeaderLogo from '../assets/svgs/headerLogo.svg';
import { Link } from 'react-router-dom';
import Button from '../ui/button';
import Hamburger from '../assets/svgs/Hamburger_menu.svg';
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
                <div className={`fixed top-0 left-0 w-full bg-white transition-all duration-500 z-40  ${hasShadow ? 'shadow-[0px_1px_5px_rgba(0,0,0,0.1)] py-[16px] md:py-[20px]' : 'py-4 md:py-[50px]'}`}>
            <div className='px-[25px] md:px-[50px]'>
                    <div className="flex gap-2 justify-between items-center">
                        <div>
                            <a href="/">
                                <img className='h-[40px] md:h-[66px]' src={HeaderLogo} alt="Logo" />
                            </a>
                        </div>
                        <div className="flex items-center justify-end gap-7">
                            <Button className="hidden md:block hover:bg-[#FFA830] hover:text-white duration-500">
                                Login
                            </Button>

                            <img className='w-[40px] md:w-full' src={Hamburger} onClick={() => setIsOpen(true)} alt="Menu" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-500 ease-in-out z-50`}
            >
                <button
                    className="absolute top-6 right-3 text-[#FFA830] text-4xl font-bold"
                    onClick={() => setIsOpen(false)}
                >
                    <RxCross2 className='h-[30px] md:h-[66px]' />
                </button>

                <div className="p-5">
                    <Link to=''>
                        <img  className='w-20 md:w-[166px] md:h-[50px]' src={HeaderLogo} alt="" />
                    </Link>
                    <ul className="flex flex-col gap-4 mt-5 !ps-0">
                        <li className='list-none ps-0 ms-0'><Link to="/" className="text-[#4C525B]">Home</Link></li>
                        <li className='list-none ps-0 ms-0'><Link to="/about" className="text-[#4C525B]">About</Link></li>
                        <li className='list-none ps-0 ms-0'><Link to="/services" className="text-[#4C525B]">Services</Link></li>
                        <li className='list-none ps-0 ms-0'><Link to="/contact" className="text-[#4C525B]">Contact</Link></li>
                    </ul>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 !z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Header;

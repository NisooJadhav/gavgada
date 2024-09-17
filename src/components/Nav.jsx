import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdGTranslate } from 'react-icons/md';
import { useLanguage } from '../LanguageContext';

const Nav = () => {
    const { language, toggleLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { to: '/', label: { en: 'Products', mr: 'उत्पादने' } },
        { to: '/about', label: { en: 'About', mr: 'आमच्याबद्दल' } },
        { to: '/services', label: { en: 'Services', mr: 'सेवाएं' } },
        { to: '/contact', label: { en: 'Contact', mr: 'संपर्क' } },
    ];

    return (
        <nav className="bg-green-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex justify-center items-center text-yellow-300 text-lg font-bold">
                    <img src="logo.png" alt="Logo" className="h-[15vh] w-auto mr-3" />
                    <NavLink to="/" className="text-2xl">माणुसकीचा गावगाडा</NavLink>
                </div>
                <div className="hidden md:flex space-x-4">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={`${location.pathname === item.to ? 'text-yellow-300' : 'text-white opacity-60'}`}
                        >
                            {language === 'en' ? item.label.en : item.label.mr}
                        </NavLink>
                    ))}
                    <button
                        className="flex items-center text-white focus:outline-none"
                        onClick={toggleLanguage}
                    >
                        <MdGTranslate className="w-6 h-6 mr-2" />
                        {language === 'en' ? 'मराठी' : 'English'}
                    </button>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        ☰
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={`block text-white ${location.pathname === item.to ? 'bg-yellow-500' : ''}`}
                                onClick={toggleMenu}
                            >
                                {language === 'en' ? item.label.en : item.label.mr}
                            </NavLink>
                        ))}
                        <button
                            className="flex items-center text-white focus:outline-none"
                            onClick={() => {
                                toggleLanguage();
                                toggleMenu();
                            }}
                        >
                            <MdGTranslate className="w-6 h-6 mr-2" />
                            {language === 'en' ? 'मराठी' : 'English'}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;
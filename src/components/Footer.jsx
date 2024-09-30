import React from 'react'
import { Facebook, Twitter, Instagram } from "lucide-react";
import { useLanguage } from '../LanguageContext';
import fssai from "../assets/fssai.png";
import madeInIndia from "../assets/madeInIndia.png";

const Footer = () => {
    const { language } = useLanguage();

    return (
        <footer className="bg-orange-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <h3 className={`text-xl ${language === "mr" ? "font-[gajraj]" : ""} font-semibold mb-4`}>{language === "mr" ? "माणुसकीचा गावगाडा" : "Gavgada"}</h3>
                        <p>{language === "mr" ? "गावातील उत्पादनांसोबत प्रगती साधा!" : "Bringing rural products to your doorstep"}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" aria-label='See Main Content' title="See Main Content" className="hover:text-orange-200">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#products" aria-label='See Products' title="See Products" className="hover:text-orange-200">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#about" aria-label='See About Us' title="See About Us" className="hover:text-orange-200">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#contact" aria-label='Contact Us' title="Contact Us" className="hover:text-orange-200">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" aria-label='Facebook' title='Facebook' className="hover:text-orange-200">
                                <Facebook size={24} />
                            </a>
                            <a href="#" aria-label='Twitter' title='Twitter' className="hover:text-orange-200">
                                <Twitter size={24} />
                            </a>
                            <a href="#" aria-label='Instagram' title='Instagram' className="hover:text-orange-200">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <img src={fssai} alt="FSSAI Logo" className="h-10 w-auto" />
                        <img src={madeInIndia} alt="Made in India Logo" className="h-10 w-auto" />
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2024 Gavgada. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
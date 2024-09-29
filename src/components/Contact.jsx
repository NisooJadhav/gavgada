import React from 'react'
import { Phone, Mail } from "lucide-react";
import { useLanguage } from '../LanguageContext';

const Contact = () => {
    const { language } = useLanguage();
    return (
        <section id="contact" className="py-20 bg-orange-50">
            <div className="container mx-auto px-4">
                <h2 className={`text-3xl mb-8 text-center ${language === "mr" ? "font-[yatra]" : ""}`}>{language === "mr" ? "संपर्क करा" : "Contact Us"}</h2>
                <div className="max-w-md mx-auto">
                    <div className="cursor-pointer flex justify-center mb-4">
                        <Phone size={24} className="text-orange-600 mr-2" />
                        <a href="tel:+919922202033" className="text-gray-800">
                            +91 99222 02033
                        </a>
                    </div>
                    <div className="cursor-pointer flex justify-center mb-4">
                        <Mail size={24} className="text-orange-600 mr-2" />
                        <a href="mailto:contact@gavgada.in" className="text-gray-800">
                            contact@gavgada.in
                        </a>
                    </div>
                    <p className="text-1xl text-center mt-8 text-orange-600">Contact us for bulk orders or review</p>
                </div>
            </div>
        </section>
    )
}

export default Contact

import React from 'react'
import { useLanguage } from '../LanguageContext';
import gada from "../assets/gada.png";

const Hero = () => {
    const { language } = useLanguage();

    return (
        <section id="home" className="bg-orange-100 py-20">
            <div className="container mx-auto text-center px-4">
                <center>
                    <img
                        className="w-auto sm:w-[40vw] md:w-[20vw] max-w-[50%] h-auto mb-5 sm:mb-3"
                        src={gada}
                        alt=""
                    />
                </center>
                <h2
                    className={`text-4xl font-bold mb-4 ${language === "mr" ? "font-[gajraj]" : ""
                        }`}
                >
                    {language === "mr"
                        ? "गावगाड्यात तुमचं स्वागत आहे!"
                        : "Welcome to Gavgada"}
                </h2>
                <p
                    className={`text-xl text-neutral-600 mb-8 ${language === "mr" ? "font-[yatra]" : ""}`}
                >
                    {language === "mr"
                        ? "गावातील उत्पादनांसोबत प्रगती साधा!"
                        : "Discover the beauty of Indian rural craftsmanship"}
                </p>
                <a
                    href="#products"
                    className={`${language === "mr" ? "font-[yatra]" : ""} bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700 transition duration-300`}
                >
                    {language === "mr" ? "आता खरेदी करा" : "Shop Now"}
                </a>
            </div>
        </section>
    )
}

export default Hero;
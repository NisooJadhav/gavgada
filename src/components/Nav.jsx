import React, { useState } from "react";
import { Globe, ShoppingCart } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { X } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="bg-orange-700 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className={`text-2xl font-bold text-white ${language === "mr" ? "font-[gajraj]" : ""
            }`}
        >
          {language === "mr" ? "माणुसकीचा गावगाडा" : "Gavgada"}
        </h1>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#home" aria-label="Go to Home Page" className="text-white hover:text-orange-200">
            Home
          </a>
          <a href="#products" aria-label="Go to Products section" className="text-white hover:text-orange-200">
            Products
          </a>
          <a href="#about" aria-label="Go to About Us section" className="text-white hover:text-orange-200">
            About
          </a>
          <a href="#contact" aria-label="Get Contact Information to contact us" className="text-white hover:text-orange-200">
            Contact
          </a>
          <button
            className="text-white hover:text-orange-200"
            onClick={() => {
              toggleLanguage();
            }}
            aria-label="Translate"
            title="Translate"
          >
            <Globe size={20} />
          </button>
        </div>
        <div className="md:hidden">
          <button
            aria-label="Close Button"
            title="Close Button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <X size={24} /> : <ShoppingCart size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <a href="#home" aria-label="Go to Home Page" className="block text-white py-2">
            Home
          </a>
          <a href="#products" aria-label="Go to Products section" className="block text-white py-2">
            Products
          </a>
          <a href="#about"  aria-label="Go to About us section" className="block text-white py-2">
            About
          </a>
          <a href="#contact"  aria-label="Go to Contact us section" className="block text-white py-2">
            Contact
          </a>
          <button
            className="text-white py-2"
            onClick={() => {
              toggleLanguage();
            }}
            title="Translate"
            aria-label="Translate"
          >
            <Globe size={20} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;

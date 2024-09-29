import React, { useState } from "react";
import { X, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import Nav from "./components/Nav";

const products = [
  {
    id: 1,
    name: "Handwoven Saree",
    price: 2500,
    image: "/api/placeholder/300/200",
  },
  {
    id: 2,
    name: "Terracotta Pot",
    price: 500,
    image: "/api/placeholder/300/200",
  },
];

const Home = () => {
  const { language } = useLanguage();

  return (
    <section id="home" className="bg-orange-100 py-20">
      <div className="container mx-auto text-center px-4">
        <h2
          className={`text-4xl font-bold mb-4 ${
            language === "mr" ? "font-[gajraj]" : ""
          }`}
        >
          {language === "mr"
            ? "गावगाड्यात तुमचं स्वागत आहे!"
            : "Welcome to Gavgada"}
        </h2>
        <p
          className={`text-xl mb-8 ${language === "mr" ? "font-[yatra]" : ""}`}
        >
          {language === "mr"
            ? "भारतीय ग्रामीण कारागिरीचे सौंदर्य शोधा"
            : "Discover the beauty of Indian rural craftsmanship"}
        </p>
        <a
          href="#products"
          className="bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700 transition duration-300"
        >
          {language === "mr" ? "खरेदी करा" : "Shop Now"}
        </a>
      </div>
    </section>
  );
};

const ProductCard = ({ product, onBook }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">₹{product.price}</p>
      <div className="flex items-center mb-4">
        <label htmlFor={`quantity-${product.id}`} className="mr-2">
          Quantity:
        </label>
        <input
          type="number"
          id={`quantity-${product.id}`}
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          className="border rounded px-2 py-1 w-16 text-center"
        />
      </div>
      <button
        onClick={() => onBook(product, quantity)}
        className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-300 w-full"
      >
        Book Now
      </button>
    </div>
  );
};

const Products = ({ onBook }) => {
  const { language } = useLanguage();

  return (
    <section id="products" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {language === "mr" ? "खरेदी करा" : "Our Products"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onBook={onBook} />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-20 bg-orange-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">About Gavgada</h2>
      <p className="text-lg text-center max-w-2xl mx-auto">
        Gavgada is your gateway to the rich cultural heritage of rural India. We
        connect artisans from villages across the country with global consumers,
        bringing you authentic, handcrafted products that tell a story of
        tradition and skill.
      </p>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-orange-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
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
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-orange-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Gavgada</h3>
          <p>Bringing rural craftsmanship to your doorstep</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-orange-200">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-orange-200">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-200">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-200">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-orange-200">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-orange-200">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Gavgada. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

const BookingForm = ({ product, quantity, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", { ...formData, product, quantity });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-semibold mb-4">Book Your Order</h3>
      <p className="mb-4">
        Product: {product.name} <br />
        Quantity: {quantity} <br />
        Total: ₹{product.price * quantity}
      </p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Mobile Number"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Delivery Address"
        rows="3"
        className="w-full p-2 border rounded"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-orange-600 text-white py-2 px-6 rounded hover:bg-orange-700 transition duration-300 w-full"
      >
        Confirm Order
      </button>
    </form>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleBook = (product, quantity) => {
    setSelectedProduct(product);
    setSelectedQuantity(quantity);
    setIsModalOpen(true);
  };

  return (
    <div className="font-sans">
      <Nav />
      <Home />
      <Products onBook={handleBook} />
      <About />
      <Contact />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BookingForm
          product={selectedProduct}
          quantity={selectedQuantity}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default App;

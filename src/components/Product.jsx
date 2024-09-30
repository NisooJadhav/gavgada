import React, { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import chikki from "../assets/chikki.webp";
import pedhaChikki from "../assets/pedha-chikki.webp";

const products = [
    {
        id: 1,
        name_en: "Groundnut Chikki",
        name_mr: "शेंगदाणा चिक्की",
        price: 100,
        image: chikki,
        description_en: "Sweet, crunchy, and nutritious, Peanut Chikki is made from high-quality peanuts and natural jaggery. Perfect for snacks or special occasions. Order now!",
        description_mr: "गोड, कुरकुरीत आणि पौष्टिक, शेंगदाणा चिक्की तुमच्या नाश्त्यासाठी उत्तम आहे! उच्च-गुणवत्तेचे शेंगदाणे आणि नैसर्गिक गूळ यांपासून बनलेली, ही मिठाई प्रत्येकाच्या मनाला भुरळ घालते. विशेष प्रसंगी किंवा रोजच्या चवदार नाश्त्यासाठी आजच ऑर्डर करा!"
    },
    {
        id: 2,
        name_en: "Pedha Chikki",
        name_mr: "पेढा चिक्की",
        price: 150,
        image: pedhaChikki,
        description_en: "A delightful fusion of pedha and chikki that melts in your mouth. Sweet and soft, made from high-quality ingredients, this treat is perfect for special occasions. Order now!",
        description_mr: "पेढा आणि चिक्कीचा अनोखा संगम, जो तोंडात विरघळतो. गोड आणि मऊ, उच्च-गुणवत्तेच्या घटकांपासून बनलेला, ही मिठाई विशेष प्रसंगी किंवा चवदार नाश्त्यासाठी परफेक्ट आहे. आजच ऑर्डर करा!"
    },
];

const ProductCard = ({ product, onBook }) => {
    const { language } = useLanguage();
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <img
                src={product.image}
                alt={product.name_en}
                className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{language === "mr" ? product.name_mr : product.name_en}</h3>
            <p className="text-gray-600 mb-4">MRP: ₹{product.price} <span className="text-gray-400 line-through">{product.price + 50}</span></p>
            <p className="text-gray-600 mb-4 text-sm">{language === "mr" ? product.description_mr : product.description_en}</p>
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
                aria-label="Book Now"
                title="Book Now"
                onClick={() => onBook(product, quantity)}
                className="bg-orange-700 text-white py-2 px-4 rounded hover:bg-orange-800 transition duration-300 w-full"
            >
                Book Now
            </button>
        </div>
    );
};

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
                <button aria-label="Close" onClick={onClose} className="absolute top-2 right-2">
                    <X size={24} />
                </button>
                {children}
            </div>
        </div>
    );
};

const BookingForm = ({ product, quantity, onClose }) => {
    const { language } = useLanguage();

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
        const message = `Customer Name: ${formData.name}\nMobile: ${formData.mobile}\nAddress: ${formData.address}\nProduct: ${product.name_mr}\nQuantity: ${quantity}`;
        const phoneNumberToSend = '9922202033';
        const whatsappUrl = `https://wa.me/${phoneNumberToSend}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">{language === "mr" ? "ऑर्डर बुक करा" : "Book Your Order"}</h3>
            <p className="mb-4">
                Product: {language === "mr" ? product.name_mr : product.name_en} <br />
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
                pattern="\d{10}"
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
                aria-label="Confirm Order"
                title="Confirm Order"
                type="submit"
                className="bg-orange-700 text-white py-2 px-6 rounded hover:bg-orange-800 transition duration-300 w-full"
            >
                Confirm Order
            </button>
        </form>
    );
};

const Product = () => {
    const { language } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleBook = (product, quantity) => {
        setSelectedProduct(product);
        setSelectedQuantity(quantity);
        setIsModalOpen(true);
    };

    return (
        <div className="py-20 bg-orange-50" id="products">
            <div className="container mx-auto px-4">
                <h2 className={`text-3xl mb-8 ${language === "mr" ? "font-[yatra]" : ""} text-center`}>
                    {language === "mr" ? 'आमची उत्पादने' : 'Our Products'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onBook={handleBook} />
                    ))}
                </div>
            </div>
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

export default Product;
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Product = () => {
    const { language } = useLanguage();
    const [quantity, setQuantity] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleOrderNow = () => {
        const message = `Customer Name: ${customerName}\nPhone Number: ${phoneNumber}\nAddress: ${address}\nProduct Name: Malai Pedha\nQuantity: ${quantity}`;
        const phoneNumberToSend = '9922202033';
        const whatsappUrl = `https://wa.me/${phoneNumberToSend}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        setModalOpen(false);
    };

    return (
        <div className="max-w-[50vw] bg-white rounded-lg shadow-lg overflow-hidden flex mt-10 ml-[5vw] rounded-lg relative">
            <img
                src="https://www.giftwithluv.com/assets/upload/product_large/1985429960_product-500x500.jpeg"
                alt="Product"
                className="h-[50vh] w-auto object-fill mt-4"
            />
            <div className="absolute top-4 right-4 text-blue-600 px-2 py-1 rounded animate-bounce">
                {language === 'mr' ? "स्टॉक मध्ये" : 'In Stock'}
            </div>
            <div className="p-6 w-full border-l-2">
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                    {language === 'mr' ? 'मलाई पेढा' : 'Malai Pedha'}
                </h2>
                <p className="text-gray-700 mb-4">
                    {language === 'mr'
                        ? 'आमच्या उत्कृष्ट मलाई पेढ्यात सामील व्हा, जे उत्तम दूध आणि साखरेपासून तयार केलेले एक नाजूक गोड आहे, जे आनंददायी हिऱ्याच्या तुकड्यांमध्ये आकारलेले आहे. प्रत्येक तुकडा हाताने निवडलेल्या बदामांच्या साराने समृद्ध आहे आणि खाण्यायोग्य चांदीच्या पानांनी सजवलेले आहे, जे एक आलिशान उपचार प्रदान करते जे तुमच्या तोंडात विरघळते.'
                        : 'Indulge in our exquisite Malai Pedha, a delicately crafted sweet made from the finest milk and sugar, shaped into delightful diamond slices. Each piece is enriched with the essence of handpicked almonds and adorned with a touch of edible silver leaf, offering a luxurious treat that melts in your mouth.'}
                </p>
                <div className="flex flex-col">
                    <span className="text-lg">
                        {language === 'mr' ? 'वजन: ' : 'Weight: '}
                        <span className='font-semibold text-green-600 mr-2'>125 gm</span>
                    </span>
                    <span className="text-lg mt-4">
                        {language === 'mr' ? 'किंमत:' : 'Price:'}
                        <span className='font-semibold text-green-600 mr-2'>100₹</span>
                        <span className='line-through text-red-600'>120₹</span>
                    </span>
                </div>
                <div className="flex items-center mb-4 mt-4 text-lg">
                    {language === 'mr' ? 'प्रमाण भरा:' : 'Enter Quantity:'}
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="ml-2 border rounded px-2 py-1 w-16"
                        min="1"
                    />
                </div>
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200 mt-4"
                >
                    {language === 'mr' ? 'आता ऑर्डर करा' : 'Order Now'}
                </button>
            </div>
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h3 className="text-lg font-bold mb-4">
                            {language === 'mr' ? 'तुमची माहिती भरा' : 'Enter Your Details'}
                        </h3>
                        <input
                            type="text"
                            placeholder={language === 'mr' ? 'नाव' : 'Name'}
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="border rounded px-2 py-1 mb-2 w-full"
                        />
                        <input
                            type="text"
                            placeholder={language === 'mr' ? 'फोन नंबर' : 'Phone Number'}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="border rounded px-2 py-1 mb-2 w-full"
                        />
                        <input
                            type="text"
                            placeholder={language === 'mr' ? 'पत्ता' : 'Address'}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="border rounded px-2 py-1 mb-4 w-full"
                        />
                        <button
                            onClick={handleOrderNow}
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
                        >
                            {language === 'mr' ? 'ऑर्डर बुक करा' : 'Book Order'}
                        </button>
                        <button
                            onClick={() => setModalOpen(false)}
                            className="ml-4 text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition duration-200"
                        >
                            {language === 'mr' ? 'रद्द करा' : 'Cancel'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Product;
import React, { useState, useEffect } from 'react'
import { useLanguage } from '../LanguageContext'
import cobbler from "../assets/cobbler.webp"
import tailor from "../assets/tailor.webp"
import dairy from "../assets/dairy.webp"
import woman from "../assets/woman.webp"
import vendor from "../assets/vendor.webp"

const About = () => {
    const { language } = useLanguage()
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        cobbler, tailor, dairy, woman, vendor
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="about" className="py-20 bg-orange-100">
            <div className="container mx-auto px-4">
                <h2 className={`text-3xl mb-8 text-center ${language === 'mr' ? "font-[yatra]" : ""}`}>{language === "mr" ? "गावगाडा काय आहे?" : 'What is Gavgada?'}</h2>
                <p className='text-md mb-8 text-center'>
                    {language === "mr" ? `खेड्यातील सामाजिक आणि आर्थिक कारभार चालविणारी जी यंत्रणा असते, तिला "गावगाडा" म्हणतात. शिवकाळातील ग्रामीण जीवन म्हणजेच गावगाडा. सर्व सामाजिक आणि आर्थिक व्यवहारांचा केंद्रबिंदू खेडे असत. शिवकाळात खेड्यांना "ग्राम," "देहे," "मौजा" अशा विविध नावांनी ओळखले जात असे.` : `The system that manages the social and economic affairs in a village is referred to as "Gavgada." Rural life during the Shivaji era is essentially what Gavgada represents. The village served as the focal point for all social and economic transactions. During the Maharaja Shivaji's era, villages were known by various names such as "Gram," "Dehe," and "Mauja."`}
                </p>

                <div className="relative mb-8">
                    <div className="overflow-hidden rounded-lg w-11/12 max-w-[600px] mx-auto">
                        <img
                            src={images[currentIndex]}
                            alt={`Slideshow image ${currentIndex + 1}`}
                            className="w-full md:h-[300px] object-cover transition-transform duration-700 ease-in-out transform"
                        />
                    </div>
                </div>

                <h2 className={`text-2xl mb-8 text-center ${language === 'mr' ? "font-[yatra]" : ""}`}>{language === "mr" ? "आमची उद्दीष्टे" : 'Our Goals:'}</h2>
                <ul className="md:ml-[37vw] list-disc list-inside mb-4">
                    <li className="text-md text-gray-800">{language === 'en' ? 'Support local businesses and artisans.' : 'स्थानिक व्यवसाय आणि कारीगरांना समर्थन द्या.'}</li>
                    <li className="text-md text-gray-800">{language === 'en' ? 'Promote sustainable and eco-friendly practices.' : 'शाश्वत आणि पर्यावरणास अनुकूल पद्धतींचा प्रचार करा.'}</li>
                    <li className="text-md text-gray-800">{language === 'en' ? 'Enhance community engagement and development.' : 'समुदायाची गुंतवणूक आणि विकास वाढवा.'}</li>
                    <li className="text-md text-gray-800">{language === 'en' ? 'Provide a platform for education and resources.' : 'शिक्षण आणि संसाधनांसाठी एक व्यासपीठ प्रदान करा.'}</li>
                </ul>

            </div>
        </section>
    )
}

export default About

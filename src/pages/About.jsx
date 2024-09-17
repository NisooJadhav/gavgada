import React from 'react';
import { useLanguage } from '../LanguageContext';

const About = () => {
    const { language } = useLanguage();

    return (
        <>
            <h1 className="text-4xl font-bold text-center mt-8">
                माणुसकीचा गावगाडा
            </h1>
            <div className="flex max-w-4xl mx-auto p-6">
                <div>
                    <p className="text-lg text-gray-700 mb-4">
                        {language === 'en'
                            ? 'Welcome to our Village Ecommerce platform, where we empower local artisans and farmers to showcase their products to a wider audience. Our mission is to foster community development and promote sustainable practices that benefit everyone.'
                            : 'आमच्या गावातील ई-कॉमर्स प्लॅटफॉर्ममध्ये आपले स्वागत आहे, जिथे आम्ही स्थानिक कारीगर आणि शेतकऱ्यांना त्यांच्या उत्पादनांचे प्रदर्शन करण्यासाठी सशक्त करतो. आमचे ध्येय म्हणजे समुदाय विकासाला प्रोत्साहन देणे आणि सर्वांसाठी फायदेशीर असलेल्या शाश्वत पद्धतींचा प्रचार करणे.'}
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-4">
                        {language === 'en' ? 'Our Goals' : 'आमचे उद्दिष्ट'}
                    </h2>
                    <ul className="list-disc list-inside mb-4">
                        <li className="text-lg text-gray-700">{language === 'en' ? 'Support local businesses and artisans.' : 'स्थानिक व्यवसाय आणि कारीगरांना समर्थन द्या.'}</li>
                        <li className="text-lg text-gray-700">{language === 'en' ? 'Promote sustainable and eco-friendly practices.' : 'शाश्वत आणि पर्यावरणास अनुकूल पद्धतींचा प्रचार करा.'}</li>
                        <li className="text-lg text-gray-700">{language === 'en' ? 'Enhance community engagement and development.' : 'समुदायाची गुंतवणूक आणि विकास वाढवा.'}</li>
                        <li className="text-lg text-gray-700">{language === 'en' ? 'Provide a platform for education and resources.' : 'शिक्षण आणि संसाधनांसाठी एक व्यासपीठ प्रदान करा.'}</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-6 mb-4">
                        {language === 'en' ? 'Join Us in Making a Difference' : 'आमच्यासोबत फरक करण्यासाठी सामील व्हा'}
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        {language === 'en'
                            ? 'By shopping with us, you are not just purchasing products; you are investing in the future of our community. Together, we can create a thriving ecosystem that benefits everyone involved.'
                            : 'आमच्यासोबत खरेदी करून, आपण फक्त उत्पादने खरेदी करत नाही; आपण आपल्या समुदायाच्या भविष्यामध्ये गुंतवणूक करत आहात. एकत्र, आपण सर्व संबंधितांसाठी फायदेशीर असलेला एक समृद्ध पारिस्थितिकी तंत्र तयार करू शकतो.'}
                    </p>
                </div>
                <div className="mt-16">
                    <img
                        src="https://cdn.pixabay.com/photo/2021/05/27/18/55/woman-6289052_1280.png"
                        alt="Community Development"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </>
    );
};

export default About;

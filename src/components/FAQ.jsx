import React, { useState } from "react";

const FAQs = [
  {
    question: "How to Book Sky need Solution?",
    answer: "Booking with Sky Need Solution is easy! You can call us, send a message on WhatsApp, or fill out the inquiry form on our website. Once we have your details, we’ll provide a customized quote and arrange everything for your move."
  },
  {
    question: "What services are covered in the quotation?",
    answer: "Our quotes typically include packing, loading, transportation, unloading, and unpacking. For additional services like storage or insurance, let us know your needs."
  },
  {
    question: "How early should I plan my shifting with Sky Need Solution?",
    answer: "We recommend booking at least 1-2 weeks in advance to ensure availability and a smooth scheduling process."
  },
  {
    question: "Will Sky Need Solution help me set up my home after moving?",
    answer: "Yes, our team can help unpack and arrange items as per your instructions to make your new space feel like home."
  },
  {
    question: "How can I track where my goods are during the move?",
    answer: "We provide regular updates so you’re always informed about your consignment’s location and delivery time."
  },
  {
    question: "Do Sky Need Solution have storage options if I need to keep my items somewhere for a while?",
    answer: "Yes, we offer clean and secure storage facilities in Mumbai for both short-term and long-term needs."
  },
  {
    question: "How much will it cost to shift my home?",
    answer: "The cost depends on how much stuff you have, the distance, and any extra services you need. Share your details with us for a detailed quote."
  },
  {
    question: "How should I prepare before the movers arrive?",
    answer: "Declutter unnecessary items, separate valuables or essentials, and inform our team about any fragile or high-priority items for special care."
  },
  {
    question: "What precautions does Sky Need Solution take for fragile items?",
    answer: "We use premium packing materials, including bubble wrap, padded boxes, and corner protectors, to safeguard delicate items during transit."
  },
  {
    question: "Do Sky Need Solution offer insurance for my belongings during the shifting?",
    answer: "Yes, we provide transit insurance to cover your goods in case of any unexpected issues."
  },
  {
    question: "How early should we inform for a survey?",
    answer: "It’s best to inform us at least 2-3 days before your preferred survey date. This allows us to schedule a visit at your convenience and provide an accurate quote."
  },
  {
    question: "What if my goods get damaged during the shifting?",
    answer: "We take utmost care while handling your items, but in case of any damage, our transit insurance ensures that you’re covered. Let us know, and we’ll guide you through the claims process."
  },
  {
    question: "How much time does it take to complete home shifting in Mumbai?",
    answer: "The time depends on the size of your home and the distance to your new location. Typically, a 1BHK can be done in 4-6 hours, while larger homes may take a full day."
  },
  {
    question: "Can I move my vehicle with Sky Need Solution ?",
    answer: "Yes, we provide vehicle transportation services. Whether it’s a car or bike, we ensure it reaches your destination safely and securely."
  },
  {
    question: "Do I need to pack my things before the movers come ?",
    answer: "No need! Our team will take care of all the packing using high-quality materials. However, if you prefer, you can pack personal or valuable items yourself."
  },
  {
    question: "Is it safe to move my things with Sky Need Solution ?",
    answer: "Absolutely! We use reliable packing techniques and trained professionals to ensure your items are moved safely and securely."
  },
  {
    question: "How can I book an AC service with Sky Need Solution?",
    answer: "Booking is simple! You can call us, message us on WhatsApp, or fill out a quick form on our website. Our team will schedule your service at a convenient time."
  },
  {
    question: "What types of services does Sky Need Solution provide for ACs?",
    answer: "SNS offers a range of AC services, including dismantling, installation, reinstallation, basic servicing, and cleaning. Whether it’s part of your relocation or standalone service, we’ve got you covered."
  },
  {
    question: "How long does it take to uninstall and reinstall an AC?",
    answer: "Typically, it takes about 1-2 hours to uninstall an AC and another 2-3 hours for reinstallation. The exact time depends on the type and condition of the AC unit."
  },
  
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full p-4 lg:w-[50%] lg:mx-auto lg:ml-[8%] md:w-full mt-2 shadow-lg shadow-gray-500 bg-white border border-gray-300 rounded-md"
>
  <h2 className="text-center mb-5 text-[#02091C] text-xl font-bold font-title">
    Frequently Asked Questions
  </h2>
  {FAQs.map((faq, index) => (
    <div
      key={index}
      className="mb-2 border-b border-gray-200 pb-2"
    >
      <div
        onClick={() => toggleAnswer(index)}
        className="flex justify-between cursor-pointer text-black font-body"
      >
        <span>{faq.question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${
            openIndex === index ? "rotate-90" : "rotate-0"
          }`}
          viewBox="0 0 24 24"
        >
          <path
            fill="black"
            d={
              openIndex === index
                ? "M19 11H5v2h142-2z"
                : "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
            }
          ></path>
        </svg>
      </div>
      {openIndex === index && (
        <div className="ml-1 mt-2 text-gray-600 text-sm font-body leading-6">
          {faq.answer}
        </div>
      )}
    </div>
  ))}
</div>

  );
};

export default FAQSection;


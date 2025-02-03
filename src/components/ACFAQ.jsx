import React, { useState } from "react";

const ACFAQ = [
  {
    "question": "What types of AC units do you offer for rental?",
    "answer": "We provide both split and window AC units for rent, available in different capacities to meet your specific cooling needs."
  },
  {
    "question": "How long can I rent an AC?",
    "answer": "You can rent an AC for as short as 3 months or for long-term periods depending on your requirements. We offer flexible rental durations."
  },
  {
    "question": "Do you provide installation for rented AC units?",
    "answer": "Yes, installation is included in our AC rental services, ensuring your unit is set up correctly and efficiently."
  },
  {
    "question": "Do I need to pay a security deposit for renting an AC?",
    "answer": "Yes, a refundable security deposit is required at the start of your rental period. The amount depends on the type of AC unit rented."
  },
  {
    "question": "How often should I get my AC serviced under the AMC?",
    "answer": "Under our AMC, your AC will be serviced once or twice a year, depending on your chosen plan, to ensure it operates efficiently throughout the year."
  },
  {
    "question": "What is included in the AC AMC?",
    "answer": "Our AMC includes regular servicing, cleaning of filters, free labor charges for repairs, and priority customer support for all your AC issues."
  },
  {
    "question": "What happens if my rented AC breaks down?",
    "answer": "If your rented AC breaks down, we will either repair it or replace it with a working unit, depending on the issue, to minimize any inconvenience."
  },
  {
    "question": "Can I rent an AC for a short-term need, such as for an event or a few months?",
    "answer": "Yes, we offer short-term AC rental solutions, perfect for events, temporary housing, or cooling during specific seasons."
  },
  {
    "question": "How do I know if my AC needs a gas refill?",
    "answer": "If your AC is not cooling effectively or is running longer than usual without providing the desired temperature, it may be low on refrigerant. A professional technician can assess and refill it."
  },
  {
    "question": "Is it safe to refill the AC gas myself?",
    "answer": "Refilling the AC gas should always be done by a licensed professional to avoid damage to the unit and ensure the correct type of refrigerant is used."
  },
  {
    "question": "What’s the cost of an AC gas refill?",
    "answer": "The cost of an AC gas refill depends on the size and type of your AC unit. We offer transparent pricing after evaluating the refrigerant level and the type of gas required."
  },
  {
    "question": "How do I know if I should get an anti-rust deep cleaning for my AC?",
    "answer": "If your AC is exposed to high humidity or outdoor elements, or if you notice early signs of rust or corrosion, an anti-rust deep clean is recommended to preserve the unit’s life."
  },
  {
    "question": "How does anti-rust deep cleaning improve my AC’s performance?",
    "answer": "Anti-rust deep cleaning removes dirt and debris from the internal components of your AC and applies a rust-preventing solution, which helps maintain its efficiency and cooling performance."
  },
  {
    "question": "What is covered under AC repair services?",
    "answer": "We repair a wide range of issues, including faulty compressors, refrigerant leaks, electrical problems, thermostat issues, poor airflow, and much more for both split and window AC units."
  },
  {
    "question": "Can you repair both split and window AC units?",
    "answer": "Yes, we specialize in repairing both split and window air conditioners, ensuring your unit is restored to full working condition."
  },
  {
    "question": "Do you offer any warranty on AC repairs?",
    "answer": "Yes, all our AC repairs come with a warranty on labor and parts, giving you peace of mind that the repair will last."
  },
  {
    "question": "How can I prevent my AC from getting damaged?",
    "answer": "Regular maintenance and servicing, including cleaning filters, checking refrigerant levels, and scheduling professional inspections, can prevent common AC issues."
  },
  {
    "question": "Is there a minimum rental period for an AC?",
    "answer": "Yes, the minimum rental period is typically 3 months, but we offer flexible options for longer durations as well."
  },
  {
    "question": "Can I upgrade my rented AC to a different model if I need more cooling?",
    "answer": "Yes, if your cooling needs change, you can upgrade to a different model or size of the rented AC. Just contact us, and we’ll assist with the exchange."
  },
  {
    "question": "What is the benefit of signing up for an AMC for my AC?",
    "answer": "An AMC ensures that your AC is regularly serviced, reducing the chances of breakdowns, improving energy efficiency, and extending the lifespan of the unit. You also get priority service for any issues that arise."
  }
];
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
<div className="flex items-center justify-center md:p-5 p-2">
  <div className="w-full p-4 md:w-[60%] shadow shadow-gray-500 bg-white border border-gray-300 rounded-md">
    <h2 className="text-center mb-5 text-[#02091C] text-xl font-semibold">
      Frequently Asked Questions
    </h2>
    {ACFAQ.map((faq, index) => (
      <div key={index} className="mb-2 border-b border-gray-200 pb-2">
        <div
          onClick={() => toggleAnswer(index)}
          className="flex justify-between items-center cursor-pointer text-black font-medium text-base"
        >
          <span className="flex-grow-0">{faq.question}</span>
          <svg
            className={`w-5 h-5 flex-shrink-0 transform transition-transform duration-300 ${
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
          <div className="ml-1 mt-2 text-gray-600 text-sm leading-6">
            {faq.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</div>

  );
};

export default FAQSection;


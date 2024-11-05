import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      title: "Ordering and Shipping",
      content:
        "Find answers to questions about the ordering process, shipping options, delivery times, and tracking your ceramic product shipments.",
    },
    {
      title: "Product Care and Maintenance",
      content:
        "Learn how to properly care for and maintain your ceramic products to ensure their longevity and appearance.",
    },
    {
      title: "Returns and Refunds",
      content:
        "Get information on our return policy, including how to initiate a return and what to expect from the refund process.",
    },
    {
      title: "Custom Orders and Personalization",
      content:
        "Discover options for custom orders and personalization to make your ceramic products unique.",
    },
    {
      title: "Contact and Customer Support",
      content:
        "Find ways to contact our customer support team for additional help with your order or other inquiries.",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className=" p-8 rounded container mx-auto">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">FAQs</h2>
        <p className="text-gray-700 mb-8">
          Find answers to common questions about our ceramic products, ordering,
          shipping, care, and more. If you need further information, feel free
          to contact our support team.
        </p>
        <div className="border rounded">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 text-green-700 font-semibold flex justify-between items-center"
              >
                <span>{faq.title}</span>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700">{faq.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

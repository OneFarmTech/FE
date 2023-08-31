import { Tabs, TabsHeader, Tab, TabsBody, TabPanel } from "@material-tailwind/react";
import { useState } from "react";
import FaqComp from "./FAQComp";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("farm");
  const data = [
    {
      label: "Farmer Questions",
      value: "farm",
      desc: [
        {
          id: 1,
          question: "How can I join OneFarm Tech as a farmer?",
          answer: 'You can easily join OneFarm Tech by clicking on the "Sign Up" button and providing your details and contact information. Our team will review your application, and upon approval, you can start using the platform.',
        },
        {
          id: 2,
          question: "What produce can I list on the platform?",
          answer: "You can list a wide range of produce on OneFarm Tech, including fruits, vegetables, grains, and more. If you have any unique or special crops/produce, feel free to add them too",
        },
        {
          id: 3,
          question: "Can I list both organic and conventional crops on the platform?",
          answer: "Yes! OneFarm Tech allows you to list both organic and conventional crops, enabling you to cater to different market demands.",
        },
        {
          id: 4,
          question: "How do I receive payments for my products?",
          answer: "Once your products are ordered and delivered successfully, payments will be transferred to your registered bank account securely through our payment gateway.",
        },
        {
          id: 5,
          question: "Can I get technical assistance for improving my farming practices?",
          answer: "Yes! OneFarm Tech provides technical assistance and educational resources to help you improve your farming techniques, optimize productivity, and adopt sustainable practices.",
        },
        {
          id: 6,
          question: "What type of technical assistance is available for farmers?",
          answer: "OneFarm Tech offers expert guidance on crop management, pest control, sustainable farming practices, and more through our comprehensive library of educational resources and local workshops.",
        }
      ]
    },
    {
      label: "Wholesalers Questions",
      value: "middle",
      desc: [
        {
          id: 1,
          question: "How can I connect with farmers on the platform?",
          answer: "As a wholesaler, you can explore our extensive farmer network, send connection requests, and initiate collaborations for sourcing products.",
        },
        {
          id: 2,
          question: "How do I manage my farmer network and connections?",
          answer: "As a wholesaler, you can efficiently manage your farmer network through our intuitive dashboard, track connections, and foster collaborations.",
        },
        {
          id: 3,
          question: "Can I access historical sales data and performance metrics?",
          answer: "Yes, our platform provides comprehensive historical sales data, performance metrics, and commission reports to help you assess and improve your business strategies.",
        },
        {
          id: 4,
          question: "What market insights are available for wholesalers?",
          answer: "OneFarm Tech offers comprehensive market insights, demand forecasts, and competitor analysis to help you make strategic decisions and optimize your operations.",
        },
        {
          id: 5,
          question: "How do I manage logistics and distribution?",
          answer: "Our platform provides tools for optimizing logistics, tracking deliveries, and managing inventory, ensuring smooth operations for your business.",
        },
        {
          id: 6,
          question: "Does OneFarm Tech offer integration with third-party logistics services?",
          answer: "Yes, we offer seamless integration with trusted logistics partners, streamlining your distribution operations and ensuring timely deliveries.",
        }
      ]
    },
    {
      label: "Retailers Questions",
      value: "retail",
      desc: [
        {
          id: 1,
          question: "How do I place an order for products?",
          answer: "It's simple! Browse the product listings, select the items you need, add them to your cart, and proceed to the checkout page to place your order.",
        },
        {
          id: 2,
          question: "Is the supply chain information transparent?",
          answer: "Absolutely! OneFarm Tech emphasizes transparency. You can access real-time supply chain information, including the farm of origin, transportation details, and handling processes.",
        },
        {
          id: 3,
          question: "Can I set up recurring orders for specific products?",
          answer: "Absolutely! Our platform allows you to set up recurring orders for regularly stocked products, ensuring a seamless supply for your business. Except for seasonal products which we’ll inform you about.",
        },
        {
          id: 4,
          question: "Can I get market insights and demand forecasts?",
          answer: "Yes, you can! OneFarm Tech provides valuable market insights, pricing trends, and demand forecasts to help you make informed buying decisions.",
        },
        {
          id: 5,
          question: "How do I pay for my orders?",
          answer: "We offer multiple secure payment options, including credit/debit cards, online banking, and mobile wallets, for your convenience.",
        }
      ]
    }
  ];

  return (
    <div>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b-[3px] border-blue-10 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-[3px] top-[3px] border-green-30 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-green-30 font-bold text-xl" : "text-blue-10 font-bold text-xl"}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              <div>
                {
                  desc.map((faq) => (
                    <FaqComp key={faq.id} answer={faq.answer} question={faq.question} />
                  ))
                }
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Faq;

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
          question: "What is OneFarm?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 2,
          question: "How does OneFarm benefit retailers?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 3,
          question: "How does OneFarm benefit farmers?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 4,
          question: "How does OneFarm ensure fair revenue distribution?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 5,
          question: "What crops and products are available on OneFarm?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 6,
          question: "How can I join OneFarm as a farmer or retailer?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        }
      ]
    },
    {
      label: "Middleman Questions",
      value: "middle",
      desc: [
        {
          id: 1,
          question: "What is OneFarm?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 2,
          question: "How does OneFarm benefit retailers?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 3,
          question: "How does OneFarm benefit farmers?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 4,
          question: "How does OneFarm ensure fair revenue distribution?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 5,
          question: "What crops and products are available on OneFarm?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 6,
          question: "How can I join OneFarm as a farmer or retailer?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        }
      ]
    },
    {
      label: "Retailer Questions",
      value: "retail",
      desc: [
        {
          id: 1,
          question: "What is OneFarm?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 2,
          question: "How does OneFarm benefit retailers?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 3,
          question: "How does OneFarm benefit farmers?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 4,
          question: "How does OneFarm ensure fair revenue distribution?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 5,
          question: "What crops and products are available on OneFarm?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
        },
        {
          id: 6,
          question: "How can I join OneFarm as a farmer or retailer?",
          answer: "OneFarm is a technology-driven platform that empowers smallholder farmers in Nigeria by connecting them directly with retailers, streamlining the agricultural supply chain, and ensuring fair revenue distribution.",
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

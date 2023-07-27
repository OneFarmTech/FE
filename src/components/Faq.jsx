import { Tabs, TabsHeader, Tab, TabsBody, TabPanel } from "@material-tailwind/react";
import { useState } from "react";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("farm");
  const data = [
    {
      label: "Farmer Questions",
      value: "farm",
      desc: "farmers"
    },
    {
      label: "Middleman Questions",
      value: "middle",
      desc: "Middle"
    },
    {
      label: "Retailer Questions",
      value: "retail",
      desc: "retailers"
    }
  ];

  return (
    <div>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b-[3px] border-blue-10 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-[3px] border-green-30 shadow-none rounded-none",
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
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Faq;

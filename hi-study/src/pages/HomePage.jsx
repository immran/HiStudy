import React, { useState } from "react";
import { Tabs } from "antd";
import PrimaryDetailsForm from "../components/PrimaryDetailsForm";
import OtherDetailsFrom from "../components/OtherDetailsForm";
import AddressDetailsForm from "../components/AddressDetailsForm";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [isPrimaryDetailsFilled, setIsPrimaryDetailsFilled] = useState(false);
  const [isOtherDetailsFilled, setIsOtherDetailsFilled] = useState(false);

  const onPrimaryDetailsSubmit = (data) => {
    console.log("Primary Details Form Data:", data);
    setIsPrimaryDetailsFilled(true);
    setActiveTab("2");
  };

  const onOtherDetailsSubmit = (data) => {
    console.log("Other Details Form Data:", data);
    setIsOtherDetailsFilled(true);
    setActiveTab("3");
  };

  const onAddressDetailsSubmit = (data) => {
    console.log("Address Details Form Data:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Tabs activeKey={activeTab} onChange={setActiveTab} centered>
        <Tabs.TabPane tab="Primary Details" key="1">
          <PrimaryDetailsForm onSubmit={onPrimaryDetailsSubmit} />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab="Other Details"
          key="2"
          disabled={!isPrimaryDetailsFilled}
        >
          <div className="p-4 text-center text-gray-500">
            <OtherDetailsFrom onSubmit={onOtherDetailsSubmit} />
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab="Address Details"
          key="3"
          disabled={!isOtherDetailsFilled}
        >
          <div className="p-4 text-center text-gray-500">
            <AddressDetailsForm onSubmit={onAddressDetailsSubmit} />
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default HomePage;

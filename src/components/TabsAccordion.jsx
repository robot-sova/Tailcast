import React, { useState } from "react";

export const TabsAccordion = () => {
  // Define the tabs with their respective data
  const tabs = [
    {
      title: "Air Conditioner Repair",
      content:
        "Air conditioners are probably one of man’s greatest inventions. If you need your air conditioner to function as long as possible and without trouble, you will have to service them regularly and maintain them.",
      image: "https://via.placeholder.com/600x300?text=Air+Conditioner+Repair",
      cta: "Fix My Air Conditioner",
    },
    {
      title: "Cooktop Repair",
      content:
        "Your cooktop is essential for your daily cooking needs. Ensure it’s in top condition to avoid disruption in your kitchen routine.",
      image: "https://via.placeholder.com/600x300?text=Cooktop+Repair",
      cta: "Fix My Cooktop",
    },
    {
      title: "Dishwasher Repair",
      content:
        "A properly working dishwasher saves time and effort. Get your dishwasher repaired today to avoid kitchen chaos.",
      image: "https://via.placeholder.com/600x300?text=Dishwasher+Repair",
      cta: "Fix My Dishwasher",
    },
  ];

  // State to track the currently active tab
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle tab clicks
  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Sidebar for tabs */}
      <div
        style={{
          flex: "1",
          backgroundColor: "#0a74da",
          color: "white",
          padding: "1rem",
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            style={{
              display: "block",
              backgroundColor: activeIndex === index ? "#0747a1" : "transparent",
              color: "white",
              padding: "1rem",
              border: "none",
              textAlign: "left",
              cursor: "pointer",
              width: "100%",
              fontSize: "1rem",
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div
        style={{
          flex: "3",
          backgroundColor: "#f3f4f6",
          padding: "1.5rem",
        }}
      >
        <img
          src={tabs[activeIndex].image}
          alt={tabs[activeIndex].title}
          style={{
            width: "100%",
            maxHeight: "300px",
            objectFit: "cover",
            marginBottom: "1rem",
          }}
        />
        <p style={{ marginBottom: "1rem" }}>{tabs[activeIndex].content}</p>
        <button
          style={{
            backgroundColor: "#0a74da",
            color: "white",
            padding: "0.8rem 1.5rem",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          {tabs[activeIndex].cta}
        </button>
      </div>
    </div>
  );
};

export default TabsAccordion;

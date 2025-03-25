"use client";
import React from "react";
import { Tab } from "../tab";
import { useChartStore } from "@/store/use-chart-store";

const tabs = [
  ["D", "Day"],
  ["W", "Week"],
  ["M", "Month"],
  ["Y", "Year"]
] as const;

const ChartTab = () => {
  const { activeTab, setActiveTab } = useChartStore();
 
  return tabs.map((tab) => {
    const [value, label] = tab;

    return(
      <Tab
        key={value}
        isActive={activeTab === value}
        onClick={() => setActiveTab(value)}
      >
        {label}
      </Tab>
    )
  })
};

export default ChartTab;

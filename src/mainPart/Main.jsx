import React from "react";
import TimeScale from "./TimeScale";
import WeekTable from "./weekTable/WeekTable";

const Main = () => {
  return (
    <div className="main">
      <TimeScale />
      <WeekTable />
    </div>
  );
};

export default Main;

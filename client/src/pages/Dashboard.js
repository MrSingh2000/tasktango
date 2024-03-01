import React from "react";
import { showToast } from "../helpers";

function Dashboard() {
  return (
    <div className="bg-green-200 w-full">
      <button onClick={() => showToast("here")}>click me</button>
    </div>
  );
}

export default Dashboard;

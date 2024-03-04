import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div className="custom-div">
      <div className="h-screen w-screen">
        <div className="body">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="base">
            <span></span>
            <div className="face"></div>
            <div className="longfazers">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <h1>Fasten your seatbelt</h1>
      </div>
    </div>
  );
}

export default Loader;

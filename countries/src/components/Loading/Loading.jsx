import React from "react";
import "./Loading.css";

const Loading = ({theme}) => {
  return (
    <div className="circle">
      <svg className={`rotate-${theme}-theme`}>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
    </div>
  );
};

export default Loading;

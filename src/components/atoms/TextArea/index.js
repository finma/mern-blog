import React from "react";
import "./TextArea.css";

const TextArea = ({ label, ...rest }) => {
  return (
    <div className="my-8">
      <p className="text-base text-gray-600">{label}</p>
      <textarea className="text-area" {...rest}></textarea>
    </div>
  );
};

export default TextArea;

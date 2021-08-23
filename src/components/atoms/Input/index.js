import React from "react";

const Input = ({ label, ...rest }) => {
  return (
    <div className="my-6">
      <p className="text-base text-gray-600">{label}</p>
      <input
        className="p-2 rounded-lg border border-gray-300 outline-none w-full box-border text-gray-800"
        {...rest}
      />
    </div>
  );
};

export default Input;

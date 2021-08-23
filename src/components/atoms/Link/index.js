import React from "react";

const Link = ({ title, ...rest }) => {
  return (
    <p className="text-gray-800 underline text-center cursor-pointer" {...rest}>
      {title}
    </p>
  );
};

export default Link;

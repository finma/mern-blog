import React from "react";

const Button = ({ title, ...rest }) => {
  return (
    <button
      className=" py-2 px-4  bg-blue-600 hover:bg-blue-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg"
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;

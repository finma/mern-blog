import React from "react";

const Upload = ({ image, label, ...rest }) => {
  return (
    <div className="my-8">
      <p className="text-base text-gray-600">{label}</p>
      {image && (
        <img
          src={image}
          alt="preview"
          className="block w-48 h-48 object-cover mb-4 mt-4"
        />
      )}
      <input type="file" className="" {...rest} />
    </div>
  );
};

export default Upload;

import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../..";

const BlogItem = ({ image, title, body, author, createdAt, _id, onDelete }) => {
  const history = useHistory();
  const handleDetailBlog = () => {
    history.push(`/detail-blog/${_id}`);
  };

  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80  mt-4">
      <div className="w-full block h-full">
        <img src={image} alt="blog" className="max-h-40 w-full object-cover" />
        <div className="bg-white dark:bg-gray-800 w-full p-4">
          <div className="flex justify-between">
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {title}
            </p>
            <div className="flex space-x-2">
              <p
                className="font-bold text-blue-500 cursor-pointer"
                onClick={() => history.push(`/create-blog/${_id}`)}
              >
                Edit
              </p>
              <p>|</p>
              <p
                className="font-bold text-red-500 cursor-pointer"
                onClick={() => onDelete(_id)}
              >
                Delete
              </p>
            </div>
          </div>
          <p className="text-gray-400 dark:text-gray-300 font-light text-md">
            {body.length > 60 ? `${body.substring(0, 60)}...` : body}
          </p>
          <div className="flex mt-2 ">
            <div className="flex flex-col justify-between text-sm w-full">
              <div>
                <p className="text-gray-800 dark:text-white">{author}</p>
                <p className="text-gray-400 dark:text-gray-300">{createdAt}</p>
              </div>
              <div className="mt-2 w-1/2 m-auto">
                <Button title="View Detail" onClick={handleDetailBlog} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

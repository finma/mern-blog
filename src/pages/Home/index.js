import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BlogItem, Gap, Button } from "../../components";
import { confirmAlert } from "react-confirm-alert";
import axios from "axios";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./Home.css";
import {
  setDataBlog,
  setForm,
  setImagePreview,
} from "../../config/redux/action";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const handleCreateBlog = () => {
    dispatch(setForm("title", ""));
    dispatch(setForm("image", ""));
    dispatch(setForm("body", ""));
    dispatch(setImagePreview(null));

    history.push("/create-blog");
  };

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.currentPage : counter + 1);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are You sure delete this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .delete(`http://localhost:3000/v1/blog/post/${id}`)
              .then((res) => {
                dispatch(setDataBlog(counter));
              })
              .catch((err) => {
                console.log(err);
              });
          },
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  };

  return (
    <div className="container">
      <div className="btn-create">
        <Button title="create blog" onClick={handleCreateBlog} />
      </div>
      <div className="item-wrapper">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:3000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              author={blog.author.name}
              createdAt={blog.createdAt}
              _id={blog._id}
              onDelete={confirmDelete}
            />
          );
        })}
      </div>
      <Gap height={30} />
      <div className="pagination-wrapper">
        <Button title="previous" onClick={previous} />
        <Gap width={30} />
        <p className="page">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap width={30} />
        <Button title="next" onClick={next} />
      </div>
      <Gap height={30} />
    </div>
  );
};

export default Home;

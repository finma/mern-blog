import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { Button } from "../../components";
import "./DetailBlog.css";

const DetailBlog = (props) => {
  const history = useHistory();
  const [data, setData] = useState({});
  const { title, image, body, createdAt, author } = data;

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`http://localhost:3000/v1/blog/post/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.id]);

  if (author) {
    return (
      <div className="container">
        <img
          src={`http://localhost:3000/${image}`}
          alt="content"
          className="image"
        />
        <h1 className="title">{title}</h1>
        <p className="author">
          {author.name} - {createdAt}
        </p>
        <div className="body">
          <p>{body}</p>
        </div>
        <div className="btn-back">
          <Button title="Back" onClick={() => history.push("/")} />
        </div>
      </div>
    );
  }

  return <p>Loading Data ...</p>;
};

export default withRouter(DetailBlog);

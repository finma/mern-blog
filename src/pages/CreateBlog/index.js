import React, { useState, useEffect } from "react";
import { Input, Button, TextArea, Upload, Gap } from "../../components";
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./style.css";
import {
  postToAPI,
  setForm,
  setImagePreview,
  updateToAPI,
} from "../../config/redux/action";

const CreateBlog = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { form, imagePreview } = useSelector(
    (state) => state.createBlogReducer
  );
  const { title, body } = form;
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      setIsUpdate(true);
      axios
        .get(`http://localhost:3000/v1/blog/post/${id}`)
        .then((res) => {
          const data = res.data.data;
          console.log(data);
          dispatch(setForm("title", data.title));
          dispatch(setForm("body", data.body));
          dispatch(setImagePreview(`http://localhost:3000/${data.image}`));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch, props]);

  const handleSubmit = () => {
    const id = props.match.params.id;

    if (isUpdate) {
      console.log("update");
      updateToAPI(form, id);
    } else {
      console.log("create");
      postToAPI(form);
    }

    dispatch(setForm("title", ""));
    dispatch(setForm("image", ""));
    dispatch(setForm("body", ""));
    dispatch(setImagePreview(null));

    history.push("/");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImagePreview(URL.createObjectURL(file)));
  };

  return (
    <div className="container">
      <h1 className="title">{isUpdate ? "Update" : "Create New"} Blog Post</h1>
      <Input
        label="Post Title"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Upload
        label="Upload Image"
        onChange={(e) => handleImageUpload(e)}
        image={imagePreview}
      />
      <TextArea
        label="Body"
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />
      <div className="action-wrapper">
        <Button title="Back" onClick={() => history.push("/")} />
        <Gap width={100} />
        <Button title={isUpdate ? "Update" : "Save"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default withRouter(CreateBlog);

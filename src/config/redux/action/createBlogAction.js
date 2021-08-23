import axios from "axios";

export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImagePreview = (payload) => {
  return { type: "SET_IMAGE_PREVIEW", payload };
};

export const postToAPI = (form) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("image", form.image);
  data.append("body", form.body);

  axios
    .post("http://localhost:3000/v1/blog/post", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log("create blog success!", res);
    })
    .catch((err) => {
      console.log("error : ", err);
    });
};

export const updateToAPI = (form, id) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("image", form.image);
  data.append("body", form.body);

  axios
    .put(`http://localhost:3000/v1/blog/post/${id}`, data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log("update blog success!", res);
    })
    .catch((err) => {
      console.log("error : ", err);
    });
};

import axios from "axios";

export const setDataBlog = (page) => (dispatch) => {
  axios
    .get(`http://localhost:3000/v1/blog/posts?page=${page}&perPage=3`)
    .then((result) => {
      const responseAPI = result.data;

      dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
      dispatch({
        type: "UPDATE_PAGE",
        payload: {
          currentPage: responseAPI.current_page,
          totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page),
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

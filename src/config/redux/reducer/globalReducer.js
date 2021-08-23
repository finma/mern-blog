const initialState = {
  name: "Firman Maulana",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Finma",
    };
  }

  return state;
};

export default globalReducer;

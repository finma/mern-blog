import React from "react";
import { Provider } from "react-redux";
import { Routes } from "../config";
import store from "../config/redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;

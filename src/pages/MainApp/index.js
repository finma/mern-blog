import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import { Header, Footer } from "../../components";

const MainApp = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-1">
        <Router>
          <Switch>
            <Route path="/create-blog/:id?">
              <CreateBlog />
            </Route>
            <Route path="/detail-blog/:id">
              <DetailBlog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;

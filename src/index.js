import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import { Analytics } from "@vercel/analytics/react"

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/index.css";

import Landing from "views/Landing.js"; 
import Profile from "views/Profile.js";
import Product from "views/Product.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/products" exact component={Product} />
      <Redirect from="*" to="/" exact component={Landing}/>
    </Switch>
    {/* <Analytics /> */}
  </BrowserRouter>,
  document.getElementById("root")
);

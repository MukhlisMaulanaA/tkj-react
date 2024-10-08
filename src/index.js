import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

import "@fortawesome/fontawesome-free/css/all.min.css";
// import "assets/styles/tailwind.css";
import "assets/styles/index.css";

// layouts

// import Admin from "layouts/Admin.js";
// import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js"; 
import Profile from "views/Profile.js";
import Product from "views/Product.js";
// import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      {/* <Route path="/admin" component={Admin} /> */}
      {/* <Route path="/auth" component={Auth} /> */}
      {/* add routes without layouts */}
      <Route path="/" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/products" exact component={Product} />
      {/* <Route path="/" exact component={Index} /> */}
      {/* add redirect for first page */}
      <Redirect from="*" to="/" exact component={Landing}/>
    </Switch>
    <Analytics />,
  </BrowserRouter>,
  document.getElementById("root")
);

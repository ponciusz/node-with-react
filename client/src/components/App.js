import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {

 

  return (
    <div className="container">
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Route exact={true} path="/" component={Landing} />
          <Route exact={true} path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
};

export default App;

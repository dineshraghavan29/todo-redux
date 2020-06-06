import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainContainer from "./components/mainContainer";
import NotFound from "./components/not-found";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MainContainer} />
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect to="not-found"></Redirect>
      </Switch>
    </div>
  );
}

export default App;

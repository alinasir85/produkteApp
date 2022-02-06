
import Sidebar from "./Sidebar/Sidebar";
import {Redirect, Route, Switch} from "react-router";
import Products from "./Products/Products";
import Login from "./Login/Login";
import React from "react";

function App() {
  return (
    <>
        <Sidebar>
            <Switch>
                <Route path="/products"> <Products/> </Route>
                <Route exact path="/"> <Login/> </Route>
                <Redirect to="/"/>
            </Switch>
        </Sidebar>
    </>
  );
}

export default App;

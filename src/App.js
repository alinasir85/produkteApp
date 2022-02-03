import Products from "./Products/Products";
import SideBar from "./Sidebar/SideBar";
import Login from "./Login/Login";
import {Redirect, Route, Switch} from "react-router";

function App() {
  return (
    <>
        <SideBar/>
        <Switch>
            <Route path="/products"> <Products/> </Route>
            <Route exact path="/"> <Login/> </Route>
            <Redirect to="/" />
        </Switch>
    </>
  );
}

export default App;

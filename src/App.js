import Products from "./Products/Products";
import SideBar from "./Sidebar/SideBar";
import Login from "./Login/Login";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <SideBar/>
        <Routes>
            <Route path="/products" element={<Products/>} />
            <Route path="/" element={<Login/>} />
        </Routes>
    </>
  );
}

export default App;

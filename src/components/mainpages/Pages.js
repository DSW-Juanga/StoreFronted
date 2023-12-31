import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import Products from "./products/Products";
import NotFound from "./utils/NotFound";
import Login from "./auth/Login";
import Register from "./auth/Register";
import CreateProduct from "./createProduct/CreateProduct";
import DetailProduct from "./detailProducts/DetailProduct";

function Pages() {
  const state = useContext(GlobalState);
  const [isLogged] = state.UserAPI.isLogged;
  const [isAdmin] = state.UserAPI.isAdmin;

  return (
    <Routes>
            <Route path="/" element={<Products />} />

            <Route 
            path= "/detail/:id"
            element={isLogged ? <DetailProduct/>  : <Login/>}
            />
     
      <Route path="/login" element={isLogged ? <NotFound /> : <Login />} />
      <Route
        path="/register"
        element={isLogged ? <NotFound /> : <Register />}
      />


      <Route
        path="/create_product"
        element={isAdmin ? <CreateProduct/>: <NotFound />}
      />
      <Route
        path="/edit_product/:id"
        element={isAdmin ? <CreateProduct/> : <NotFound />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Pages;

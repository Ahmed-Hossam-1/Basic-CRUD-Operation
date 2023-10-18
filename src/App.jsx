import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Categores from "./components/Categores";
import Layout from "./components/Layout";
import AddProduct from "./components/AddProduct";
import DetailsProduct from "./components/DetailsProduct";
import EditProduct from "./components/EditProduct";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Outlet />}>
          <Route index element={<Products />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":editproduct" element={<EditProduct />} />
          <Route path=":productId" element={<DetailsProduct />} />
        </Route>
        <Route path="categores" element={<Categores />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

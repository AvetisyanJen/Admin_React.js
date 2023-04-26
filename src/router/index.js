import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/login.js";
import Register from "../Pages/register.js";
import Profile from "../Pages/Profile.js";
import Header from "../Components/header/header.js";
import AdminPage from "../Pages/AdminPanel/AdminPage.js";
import Products from "../Pages/AdminPanel/Products.js";
import ProtectedRoute from "./privat.js";
import CreateProduct from "../Pages/AdminPanel/createProduct.js";
import Categories from "../Pages/AdminPanel/Categories.js";
import EditProduct from "../Pages/AdminPanel/editProduct.js";


function Router() {






  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Header />}>
            <Route path="login" element={<Login />} />

            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="adminPage" element={<ProtectedRoute><AdminPage /></ProtectedRoute>}>
               <Route path="products/editProduct/:id" element={<ProtectedRoute><EditProduct/></ProtectedRoute>}/>
              <Route path="products" element={<ProtectedRoute><Products /></ProtectedRoute>}/>
              <Route path="products/addProduct" element={<ProtectedRoute><CreateProduct /></ProtectedRoute>}/>
              <Route path="categories" element={<ProtectedRoute><Categories /></ProtectedRoute>}/>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
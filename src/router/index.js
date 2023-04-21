import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/login.js";
import Register from "../Pages/register.js";
import Profile from "../Pages/Profile.js";
import Header from "../Components/header/header.js";
import AdminPage from "../Pages/AdminPanel/AdminPage.js";

import AddCategory from "../Pages/AdminPanel/AddCategory.js";
import Products from "../Pages/AdminPanel/Products.js";
import ProtectedRoute from "./privat.js";


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
              <Route path="addCategory" element={<ProtectedRoute><AddCategory /></ProtectedRoute>}/>
              <Route path="products" element={<ProtectedRoute><Products /></ProtectedRoute>}/>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
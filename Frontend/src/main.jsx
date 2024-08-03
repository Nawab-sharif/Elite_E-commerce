import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import AdminLayout from './AdminLayout.jsx';
import AdminTable from './adminPanel/AdminTable.jsx';
import AddProduct from './adminPanel/AddProduct.jsx';
import ViewProduct from './adminPanel/ViewProduct.jsx';
import UpdateProduct from './adminPanel/UpdateProduct.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import ProductCard from './components/ProductCard.jsx';


let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route path='' element={<Home/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<ProductCard />} />
      </Route>
      <Route path='/admin' element={<AdminLayout />}>
        <Route path='' element={<AdminTable />} />
        <Route path='/admin/addproduct' element={<AddProduct />} />
        <Route path='/admin/viewproduct/:id' element={<ViewProduct />} />
        <Route path='/admin/updateproduct/:id' element={<UpdateProduct />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

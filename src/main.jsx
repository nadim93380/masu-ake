import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import ErrorPage from './Common/ErrorPage.jsx';
import AllCraft from './Pages/AllCraft.jsx';
import AddCraft from './Pages/AddCraft.jsx';
import MyArt from './Pages/MyArt.jsx';
import DetailsCraft from './Pages/DetailsCraft.jsx';
import Login from './Common/Login.jsx';
import Register from './Common/Register.jsx';
import AuthSharer from './authentication/AuthSharer.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allCraft",
        element: <AllCraft></AllCraft>
      },
      {
        path: "/addCraft",
        element: <AddCraft></AddCraft>
      },
      {
        path: "/myCraft",
        element: <MyArt></MyArt>
      },
      {
        path: "/craftDetails",
        element: <DetailsCraft></DetailsCraft>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthSharer>
      <RouterProvider router={router} />
    </AuthSharer>
  </React.StrictMode>,
)

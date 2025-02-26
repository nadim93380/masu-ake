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
import PrivateRoute from './Layout/PrivateRoute.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import CategoryList from './Pages/CategoryList.jsx';
import UpdateCraft from './Pages/UpdateCraft.jsx';


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
        element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
      },
      {
        path: "/myCraft",
        element: <PrivateRoute><MyArt></MyArt></PrivateRoute>
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdateCraft></UpdateCraft></PrivateRoute>,
        loader:({params})=>fetch(`https://masu-server.vercel.app/craftDetails/${params.id}`)
      },
      {
        path: "/craftDetails/:id",
        element: <PrivateRoute><DetailsCraft></DetailsCraft></PrivateRoute>,
        loader: ({params})=>fetch(`https://masu-server.vercel.app/craftDetails/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/categoryCraft/:category',
        element: <CategoryList></CategoryList>,
        loader:({params})=>fetch(`https://masu-server.vercel.app/catgoryCraft/${params.category}`)
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>
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

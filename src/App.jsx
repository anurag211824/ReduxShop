import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx'
import Cartlist from './pages/Cartlist.jsx'
import Wishlist from './pages/Wishlist.jsx'
import AppLayout from "./component/AppLayout.jsx";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
        {
          path: "/cartlist",
          element: <Cartlist />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

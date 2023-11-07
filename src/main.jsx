import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LikePage from "./pages/LikePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/like",
    element: <LikePage />,
  },
  {
    path: "/*",
    element: <HomePage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

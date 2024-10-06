import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
import App from "./App";
import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Portofolio from "./pages/Portofolio";
import PortofolioDetail from "./pages/PortofolioDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/catalog/:productId",
    element: <Product />,
  },
  {
    path: "/portofolio",
    element: <Portofolio />,
  },
  {
    path: "/portofolio/:id",
    element: <PortofolioDetail />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

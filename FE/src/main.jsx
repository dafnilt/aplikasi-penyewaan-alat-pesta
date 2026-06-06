import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import OrderList from "./pages/OrderList";
import OrderDetail from "./pages/OrderDetail";
import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Portofolio from "./pages/Portofolio";
import PortofolioDetail from "./pages/PortofolioDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
    mutations: {
      retry: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/orders",
    element: <OrderList />
  },
  {
    path: "/orders/:orderId",
    element: <OrderDetail />
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
    path: "/product/:idProduct",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);

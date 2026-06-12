import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import AdminAccounts from "./pages/AdminAccounts";
import OrderList from "./pages/OrderList";
import OrderDetail from "./pages/OrderDetail";
import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import Portofolio from "./pages/Portofolio";
import PortofolioDetail from "./pages/PortofolioDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProtectedAdminRoute from "./guards/ProtectedAdminRoute";
import ProtectedSuperAdminRoute from "./guards/ProtectedSuperAdminRoute";
import { ConfigProvider } from "antd";

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
  element: <ProtectedAdminRoute />,
    children: [
      {
        path: "/orders",
        element: <OrderList />,
      },
      {
        path: "/orders/:orderId",
        element: <OrderDetail />
      },
    ],
  },
  {
    element: <ProtectedSuperAdminRoute />,
    children: [
      {
        path: "/admin-accounts",
        element: <AdminAccounts />,
      },
    ],
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
    path: "/order",
    element: <Order />,
  },
  {
    path: "/payment",
    element: <Payment />,
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
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#74B559",
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ConfigProvider>
  </React.StrictMode>,
);

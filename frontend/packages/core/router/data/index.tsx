import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
  import { Menu } from "@zocom/menu";
  // import { CartPage } from "@zocom/cart-page";
  // import { DashboardPage } from "@zocom/dashboard-page";
  // import { OrderStatusPage } from "@zocom/orderStatus-page";
  // import { ReciptPage } from "@zocom/recipt-page";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Menu />,
    },
    // {
    //   path: "/cart",
    //   element: <CartPage />,
    // },
    // {
    //   path: "/status",
    //   element: <OrderStatusPage />,
    // },
    // {
    //   path: "/dashboard",
    //   element: <DashboardPage />,
    // },
    // {
    //   path: "/recipt",
    //   element: <ReciptPage />,
    // },
    {
      path: "*",
      element: <p>Page Not Found</p>
    },
  ]);
  
  export const AppRoutes = () => {
    return <RouterProvider router={router} />;
  };
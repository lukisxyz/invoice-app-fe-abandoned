import { createBrowserRouter } from "react-router-dom";
import LayoutContainer from "../components/layout/container";
import {
  ProductDetailPage,
  ProductDetailLoader,
} from "../pages/product-detail";
import { HomeLoader, HomePage } from "../pages/home";
import { AccountPage } from "../pages/account";
import { CartPage } from "../pages/cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutContainer />,
    children: [
      {
        path: "",
        element: <HomePage />,
        loader: HomeLoader,
      },
      {
        path: "/product/:productId",
        element: <ProductDetailPage />,
        loader: ProductDetailLoader,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import LayoutContainer from "../components/layout/container";
import {
  ProductDetailPage,
  ProductDetailLoader,
} from "../pages/product-detail";
import { HomeLoader, HomePage } from "../pages/home";
import { AccountPage } from "../pages/account";
import { CartPage } from "../pages/cart";
import { ProductLoader, ProductPage } from "../pages/product";
import CartLoader from "../pages/cart/loader";

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
        path: "/product",
        element: <ProductPage />,
        loader: ProductLoader,
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
        loader: CartLoader,
      },
    ],
  },
]);

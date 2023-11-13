import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page/page";
import HomeLoader from "../pages/home-page/loader";
import LayoutContainer from "./container";
import ProductPage from "../pages/product-page/page";
import ProductLoader from "../pages/product-page/loader";
import ProductDetailPage from "../pages/product-detail-page/page";
import ProductDetailLoader from "../pages/product-detail-page/loader";

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
    ],
  },
]);

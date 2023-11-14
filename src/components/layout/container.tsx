import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import Breadcrumb from "../derived/breadcrumb";

export default function LayoutContainer() {
  const matches = useLocation();
  const path = matches.pathname.split("/").slice(1);

  return (
    <main className="overflow-x-hidden min-h-screen max-w-screen-lg w-full mx-auto p-3 pb-9">
      <Header />
      <Breadcrumb data={path} />
      <div className="px-2">
        <Outlet />
      </div>
    </main>
  );
}

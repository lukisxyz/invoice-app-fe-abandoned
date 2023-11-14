import { Outlet } from "react-router-dom";
import Header from "./header";

export default function LayoutContainer() {
  return (
    <main className="overflow-x-hidden max-w-screen-lg w-full mx-auto p-3 pb-9">
      <Header />
      <Outlet />
    </main>
  );
}

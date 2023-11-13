import { Outlet } from "react-router-dom";

export default function LayoutContainer() {
  return (
    <main className="max-w-screen-lg w-full mx-auto p-3">
      <Outlet />
    </main>
  );
}

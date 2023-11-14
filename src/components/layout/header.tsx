import { Link, useNavigate } from "react-router-dom";
import CartHeader from "../derived/cart";

type MenuItemType = { label: string; action: () => void };

export default function Header() {
  const nav = useNavigate();
  const Menus: Array<MenuItemType> = [
    {
      label: "Search",
      action: () => console.log("product"),
    },
    {
      label: "Account",
      action: () => nav("/account"),
    },
  ];
  return (
    <header className="min-h-[4rem] sticky top-0 z-10 col-[1/-1] row-[1] w-full border-b mb-3 sm:mb-6 bg-white border-slate-100 items-center text-sm text-slate-700 flex justify-between">
      <Link to="/">
        <h1 className="font-bold px-2">Tokoku</h1>
      </Link>
      <div className="flex gap-3">
        {(Menus || []).map((i) => (
          <MenuItem key={i.label} {...i} />
        ))}
        <CartHeader />
      </div>
    </header>
  );
}

const MenuItem = ({ label, action }: MenuItemType) => {
  return (
    <button
      onClick={() => action()}
      type="button"
      className="px-2 py-1 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-800 disabled:opacity-50 disabled:pointer-events-none"
    >
      {label}
    </button>
  );
};

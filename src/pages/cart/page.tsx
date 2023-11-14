import { useLoaderData, useNavigate } from "react-router-dom";
import { Product } from "../../types/product.type";
import { CartItemCard } from "../../components/derived/cart-item-card";

export default function CartPage() {
  const nav = useNavigate();
  const { data } = useLoaderData() as { data: Array<Product> };
  return (
    <div>
      <div className="mb-6">
        {(data || []).map((i) => (
          <CartItemCard {...i} key={i.id} qty={2} />
        ))}
      </div>
      <button
        type="button"
        onClick={() => nav("/order")}
        className="py-3 px-4 text-center text-sm font-medium rounded-lg bg-slate-800 text-white hover:bg-slate-900 disabled:opacity-50 disabled:pointer-events-none"
      >
        Create Order
      </button>
    </div>
  );
}

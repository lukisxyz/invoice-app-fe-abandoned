import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/derived/product-card";
import { Fruit } from "../../types/product.type";
import { useState } from "react";

export default function HomePage() {
  const { data } = useLoaderData() as { data: Array<Fruit> };
  const [isListView, setListView] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="py-3 mb-6 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        onClick={() => setListView(!isListView)}
      >
        {isListView ? "List View" : "Grid View"}
      </button>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
        {(data || []).map((i: Fruit) => (
          <ProductCard islistView={isListView} key={i.id} {...i} />
        ))}
      </div>
    </div>
  );
}

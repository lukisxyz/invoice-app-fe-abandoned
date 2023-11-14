import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/derived/product-card";
import { Product } from "../../types/product.type";
import { useMobileScreen } from "../../hooks/useMobileScreen";

export default function ProductPage() {
  const { data } = useLoaderData() as { data: Array<Product> };
  const isMobileView = useMobileScreen(430);
  return (
    <div>
      <div className="grid grid-cols-1 mt-6 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3">
        {(data || []).map((i: Product) => (
          <ProductCard islistView={isMobileView} key={i.id} {...i} />
        ))}
      </div>
    </div>
  );
}

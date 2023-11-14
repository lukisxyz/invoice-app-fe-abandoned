import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/derived/product-card";
import { Fruit } from "../../types/product.type";
import { useMobileScreen } from "../../hooks/useMobileScreen";

export default function HomePage() {
  const { data } = useLoaderData() as { data: Array<Fruit> };
  const isMobileView = useMobileScreen(430);
  return (
    <div>
      <div className="grid grid-cols-1 mt-6 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3">
        {(data || []).map((i: Fruit) => (
          <ProductCard islistView={isMobileView} key={i.id} {...i} />
        ))}
      </div>
    </div>
  );
}

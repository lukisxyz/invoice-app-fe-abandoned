import { Link } from "react-router-dom";
import { Discount, Fruit } from "../../types/product.type";
import LazyImg from "../base/image";

export default function ProductCard(
  props: Fruit & { islistView?: boolean; classNames?: string }
) {
  const {
    classNames,
    id,
    name,
    description,
    discount,
    image,
    price,
    islistView,
  } = props;
  const newPrice = countNewPrice(discount, price);
  return (
    <Link
      className={`${classNames} flex-shrink-0`}
      title={name}
      aria-label={name}
      to={`/product/${id}`}
    >
      {islistView ? (
        <div className="flex h-20 gap-1 bg-white border shadow-sm rounded-md overflow-hidden w-full max-w-md">
          <div className="h-20 w-20 flex-shrink-0 overflow-hidden">
            <LazyImg
              className="object-cover h-20 w-20"
              src={image}
              alt={name}
              loading="lazy"
            />
          </div>
          <div className="p-2 w-full">
            <h3 className="text-base font-bold mb-1 text-slate-700">{name}</h3>
            {discount ? (
              <>
                <span className="text-orange-700 font-mono mr-2 text-xs line-through">{`Rp.${price}`}</span>
                <span className="text-slate-600 font-mono font-semibold text-lg">{`Rp.${newPrice}`}</span>
              </>
            ) : (
              <span className="text-slate-600 font-mono font-semibold text-lg">{`Rp.${price}`}</span>
            )}
          </div>
          <div className="w-16 flex flex-col items-end mr-2">
            {discount && (
              <div className="text-xs mt-2 py-0.5 px-1 text-white bg-fustext-orange-800 rounded-md w-fit">{`-${
                discount?.type === "price" ? "Rp." : ""
              }${discount?.amount}${
                discount?.type === "percent" ? "%" : ""
              }`}</div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col bg-white border shadow-sm rounded-xl w-full max-w-md">
          <div className="h-48 overflow-hidden">
            <LazyImg
              className="rounded-t-xl object-cover object-center h-56 w-full"
              src={image}
              alt={name}
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <h3 className="text-lg font-bold text-slate-800">{name}</h3>
            <p className="mt-1 line-clamp-1 mb-3 text-slate-500">
              {description}
            </p>
            {discount ? (
              <>
                <span className="text-orange-700 font-mono mr-2 text-xs line-through">{`Rp.${price}`}</span>
                <span className="text-slate-600 font-mono font-semibold text-lg">{`Rp.${newPrice}`}</span>
              </>
            ) : (
              <span className="text-slate-600 font-mono font-semibold text-lg">{`Rp.${price}`}</span>
            )}
          </div>
        </div>
      )}
    </Link>
  );
}

function countNewPrice(data: Discount | null, price: number): number {
  if (!data) return 0;
  const min =
    data.type === "percent"
      ? Math.ceil((data.amount / 100) * price)
      : data.amount;
  return price - min;
}

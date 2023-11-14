import { Cart, Discount } from "../../types/product.type";

export default function CartItemCardMini(props: Cart) {
  const { name, price, discount, qty } = props;
  const newPrice = countNewPrice(discount, price);
  return (
    <div className="border-b py-2">
      <div className="flex text-slate-500 text-sm justify-between">
        <h3>{name}</h3>
        <span>{`Qty: ${qty}`}</span>
      </div>
      <div className="text-right">
        {discount ? (
          <>
            <span className="text-orange-700 font-mono mr-2 text-[9px] line-through">{`Rp.${price}`}</span>
            <span className="text-slate-600 font-mono font-semibold">{`Rp.${newPrice}`}</span>
          </>
        ) : (
          <span className="text-slate-600 font-mono font-semibold">{`Rp.${price}`}</span>
        )}
        <div />
      </div>
    </div>
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

export function CartItemCard(props: Cart) {
  const { name, image, price, discount, qty } = props;
  const newPrice = countNewPrice(discount, price);
  return (
    <div className="py-2 flex">
      <div className="w-16 h-16 overflow-hidden">
        <img src={image} alt={name} />
      </div>
      <div className="ml-3">
        <div className="flex gap-6 text-slate-500 text-lg justify-between">
          <h3>{name}</h3>
          <span className="text-sm">{`Qty: ${qty}`}</span>
        </div>
        <div className="mt-2">
          {discount ? (
            <>
              <span className="text-slate-600 font-mono text-lg font-semibold">{`Rp.${newPrice}`}</span>
              <span className="text-orange-700 font-mono ml-2 text-xs line-through">{`Rp.${price}`}</span>
            </>
          ) : (
            <span className="text-slate-600 font-mono font-semibold">{`Rp.${price}`}</span>
          )}
          <div />
        </div>
      </div>
    </div>
  );
}

import { Popover } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import CartItemCardMini from "./cart-item-card";
import { Product } from "../../types/product.type";

export default function CartHeader() {
  const nav = useNavigate();
  return (
    <Popover className="relative">
      <Popover.Button className="px-2 py-1 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-800 disabled:opacity-50 disabled:pointer-events-none">
        Cart (0)
      </Popover.Button>
      <Popover.Panel className="absolute z-10 right-0 mt-3 w-screen sm:w-64 transform overflow-hidden pl-6">
        <div className="grid p-3 text-base font-semibold bg-white border shadow-lg rounded-lg text-slate-700">
          {data.map((i) => (
            <CartItemCardMini qty={2} {...i} />
          ))}
          <button
            type="button"
            onClick={() => nav("/cart")}
            className="py-3 px-4 text-center text-sm font-medium rounded-lg bg-slate-800 text-white hover:bg-slate-900 disabled:opacity-50 disabled:pointer-events-none"
          >
            Cart Detail
          </button>
        </div>
      </Popover.Panel>
    </Popover>
  );
}

const data: Array<Product> = [
  {
    id: "1",
    name: "Apple Fruit",
    description: "Description of Apple fruit.",
    price: 30000, // Price in Rupiah
    discount: {
      type: "percent",
      amount: 10,
    },
    image: "https://source.unsplash.com/featured/?apple",
  },
  {
    id: "2",
    name: "Banana Fruit",
    description: "Description of Banana fruit.",
    price: 20000, // Price in Rupiah
    discount: null,
    image: "https://source.unsplash.com/featured/?banana",
  },
  {
    id: "3",
    name: "Orange Fruit",
    description: "Description of Orange fruit.",
    price: 35000, // Price in Rupiah
    discount: {
      type: "price",
      amount: 500, // Discount amount in Rupiah
    },
    image: "https://source.unsplash.com/featured/?orange",
  },
  {
    id: "4",
    name: "Grapes Fruit",
    description: "Description of Grapes fruit.",
    price: 49900, // Price in Rupiah
    discount: {
      type: "percent",
      amount: 15,
    },
    image: "https://source.unsplash.com/featured/?grapes",
  },
  {
    id: "5",
    name: "Orange Fruit",
    description: "Description of Grapes fruit.",
    price: 49900, // Price in Rupiah
    discount: {
      type: "percent",
      amount: 15,
    },
    image: "https://source.unsplash.com/featured/?orange",
  },
  {
    id: "6",
    name: "Mango Fruit",
    description: "Description of Grapes fruit.",
    price: 49900, // Price in Rupiah
    discount: {
      type: "percent",
      amount: 15,
    },
    image: "https://source.unsplash.com/featured/?orange",
  },
];

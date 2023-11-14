export type Discount = {
  type: "price" | "percent";
  amount: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: Discount | null;
  image: string;
};

export type Cart = Product & {
  qty: number;
};

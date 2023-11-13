export type Discount = {
  type: "price" | "percent";
  amount: number;
};

export type Fruit = {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: Discount | null;
  image: string;
};

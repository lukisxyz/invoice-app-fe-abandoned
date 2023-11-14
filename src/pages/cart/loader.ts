import { json } from "react-router-dom";
import { Product } from "../../types/product.type";

export default function CartLoader() {
  const seedData: Array<Product> = [
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
      name: "Watermelon Fruit",
      description: "Description of Watermelon fruit.",
      price: 59900, // Price in Rupiah
      discount: null,
      image: "https://source.unsplash.com/featured/?watermelon",
    },
    {
      id: "6",
      name: "Mango Fruit",
      description: "Description of Mango fruit.",
      price: 37900, // Price in Rupiah
      discount: {
        type: "price",
        amount: 1200, // Discount amount in Rupiah
      },
      image: "https://source.unsplash.com/featured/?mango",
    },
    {
      id: "7",
      name: "Pineapple Fruit",
      description: "Description of Pineapple fruit.",
      price: 24900, // Price in Rupiah
      discount: {
        type: "percent",
        amount: 8,
      },
      image: "https://source.unsplash.com/featured/?pineapple",
    },
    {
      id: "8",
      name: "Strawberry Fruit",
      description: "Description of Strawberry fruit.",
      price: 39900, // Price in Rupiah
      discount: null,
      image: "https://source.unsplash.com/featured/?strawberry",
    },
    {
      id: "9",
      name: "Kiwi Fruit",
      description: "Description of Kiwi fruit.",
      price: 42900, // Price in Rupiah
      discount: {
        type: "percent",
        amount: 12,
      },
      image: "https://source.unsplash.com/featured/?kiwi",
    },
  ];
  return json({ data: seedData }, { status: 200 });
}

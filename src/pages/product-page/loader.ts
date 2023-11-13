import { json } from "react-router-dom";
import { Fruit } from "../../types/product.type";

export default function ProductLoader() {
  const seedData: Array<Fruit> = [
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
    {
      id: "10",
      name: "Peach Fruit",
      description: "Description of Peach fruit.",
      price: 28900, // Price in Rupiah
      discount: {
        type: "price",
        amount: 800, // Discount amount in Rupiah
      },
      image: "https://source.unsplash.com/featured/?peach",
    },
    {
      id: "11",
      name: "Lemon Fruit",
      description: "Description of Lemon fruit.",
      price: 14900, // Price in Rupiah
      discount: null,
      image: "https://source.unsplash.com/featured/?lemon",
    },
    {
      id: "12",
      name: "Cherry Fruit",
      description: "Description of Cherry fruit.",
      price: 47900, // Price in Rupiah
      discount: {
        type: "percent",
        amount: 18,
      },
      image: "https://source.unsplash.com/featured/?cherry",
    },
    {
      id: "13",
      name: "Blueberry Fruit",
      description: "Description of Blueberry fruit.",
      price: 36900, // Price in Rupiah
      discount: {
        type: "price",
        amount: 1500, // Discount amount in Rupiah
      },
      image: "https://source.unsplash.com/featured/?blueberry",
    },
    {
      id: "14",
      name: "Cantaloupe Fruit",
      description: "Description of Cantaloupe fruit.",
      price: 64900, // Price in Rupiah
      discount: {
        type: "percent",
        amount: 10,
      },
      image: "https://source.unsplash.com/featured/?cantaloupe",
    },
    {
      id: "15",
      name: "Raspberry Fruit",
      description: "Description of Raspberry fruit.",
      price: 52900, // Price in Rupiah
      discount: null,
      image: "https://source.unsplash.com/featured/?raspberry",
    },
    {
      id: "16",
      name: "Blackberry Fruit",
      description: "Description of Blackberry fruit.",
      price: 40900, // Price in Rupiah
      discount: {
        type: "price",
        amount: 700, // Discount amount in Rupiah
      },
      image: "https://source.unsplash.com/featured/?blackberry",
    },
    {
      id: "17",
      name: "Pear Fruit",
      description: "Description of Pear fruit.",
      price: 31900, // Price in Rupiah
      discount: {
        type: "percent",
        amount: 12,
      },
      image: "https://source.unsplash.com/featured/?pear",
    },
    {
      id: "18",
      name: "Plum Fruit",
      description: "Description of Plum fruit.",
      price: 27900, // Price in Rupiah
      discount: null,
      image: "https://source.unsplash.com/featured/?plum",
    },
  ];
  return json({ data: seedData }, { status: 200 });
}

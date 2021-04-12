import faker from "faker";
import uuid from "react-uuid";

faker.seed(0);

export const database = [...Array(25)].map((id) => ({
  id: uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: Number(faker.commerce.price()),
  category: faker.random.arrayElement([
    "Yoga Mats",
    "Yoga Blankets",
    "Yoga Clothing",
  ]),
  brand: faker.random.arrayElement(["Nike", "Puma", "Reebok", "Adidas"]),
  isPopular: faker.random.boolean(),
  isNewest: faker.random.boolean(),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  yogaAssured: faker.random.boolean(),
  ratings: faker.random.arrayElement([1.42, 2.52, 3.88, 4.64, 5.0]),
  offer: faker.random.arrayElement(["10", "20", "50", "70"]),
  totalPurchase: faker.random.arrayElement([500, 1700, 1200, 4515, 6700, 8970]),
  availableQty: faker.random.arrayElement([5, 25, 3, 17, 44, 100]),
}));

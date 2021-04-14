import faker from "faker";
import uuid from "react-uuid";

faker.seed(0);

export const brand = ["Nike", "Puma", "Reebok", "Adidas", "HRX", "Sparx"];
export const category = ["Mats", "Blankets", "Clothing"];
export const discount = ["10", "20", "50", "70"];
export const ratings = [1.0, 2.0, 3.0, 4.0, 5.0];

export const database = [...Array(50)].map((id) => ({
  id: uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  actualPrice: Number(faker.commerce.price() * 5),
  price: Number(faker.commerce.price()),
  category: faker.random.arrayElement([...category]),
  brand: faker.random.arrayElement([...brand]),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  yogaAssured: faker.random.boolean(),
  ratings: faker.random.arrayElement([...ratings]).toFixed(1),
  discount: faker.random.arrayElement([...discount]),
  totalPurchase: faker.random.arrayElement([500, 1700, 1200, 4515, 6700, 8970]),
  availableQty: faker.random.arrayElement([5, 25, 3, 17, 44, 100]),
}));

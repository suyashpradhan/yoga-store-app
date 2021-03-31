import faker from "faker";
import uuid from "react-uuid";

faker.seed(0);

export const database = [...Array(25)].map((id) => ({
  id: uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  category: faker.random.arrayElement(["mats", "blankets", "clothing"]),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement(["20", "50", "70"]),
  rating: {
    starRating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    totalReviews: faker.random.arrayElement([10, 15, 20, 25]),
  },
  availableQty: faker.random.arrayElement([10, 11, 12, 13, 14, 15]),
}));

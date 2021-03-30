import { createServer, Model, RestSerializer } from "miragejs";
import uuid from "react-uuid";

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      product: Model,
    },

    routes() {
      this.namespace = "api";
      this.timing = 1000;
      this.resource("products");

      this.get("/products", () => {
        return {
          products: [
            {
              id: uuid(),
              name: "Yoga Mat",
              description:
                "Our best-selling yoga mat, the Sticky Mat has been a collection favourite for over a decade and with good reason",
              images: [
                "https://rukminim1.flixcart.com/image/416/416/k29bvrk0/sport-mat/d/w/h/anti-skid-yoga-mat-with-strap-6-60-adrenex-by-flipkart-180-original-imafhn7ffvpvcjge.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/416/416/k29bvrk0/sport-mat/d/w/h/anti-skid-yoga-mat-with-strap-6-60-adrenex-by-flipkart-180-original-imafhn7ghbedsf6f.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/416/416/k29bvrk0/sport-mat/d/w/h/anti-skid-yoga-mat-with-strap-6-60-adrenex-by-flipkart-180-original-imafhn7ghxtzyf45.jpeg?q=70",
                "https://rukminim1.flixcart.com/image/416/416/k29bvrk0/sport-mat/d/w/h/anti-skid-yoga-mat-with-strap-6-60-adrenex-by-flipkart-180-original-imafhe6myssn9d4d.jpeg?q=70",
              ],
              originalPrice: 1200,
              discountedPrice: 800,
              totalQuantity: 50,
              currentProductQuantity: 0,
              isInCart: false,
              isWishlised: false,
              isVisible: true,
              specifications: {
                general: [
                  {
                    modelName: "Yoga Mat",
                    suitableFor:
                      "Yoga, Stretch workout, equipment less workout, Crunches, Planks, Pushpups",
                  },
                ],
                productDetails: [
                  {
                    shape: "Rectangle",
                    otherDetails:
                      "Equipment less workouts, Crunches, Planks, Pushups, Cushion effect on Knees and elbows",
                  },
                ],
                dimensions: [
                  {
                    width: "60cm",
                    weight: "180cm",
                    thickness: "6mm",
                  },
                ],
              },
              rating: "4.1",
              boughtTillNow: "1200",
            },
          ],
        };
      });
    },
  });
}

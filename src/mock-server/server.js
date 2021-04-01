import { createServer, Model, RestSerializer } from "miragejs";
import { database } from "../Database/database";

export const setupMockServer = () => {
  createServer({
    serializers: {
      application: RestSerializer,
    },
    models: {
      product: Model,
      bag: Model,
      wishlist: Model,
    },

    routes() {
      this.namespace = "api";
      this.timing = 2000;
      this.resource("products");
      this.resource("bags");
      this.resource("wishlists");
    },

    seeds(server) {
      database.forEach((product) => {
        server.create("product", {
          ...product,
        });
      });

      database.forEach((product) => {
        server.create("bag", {
          ...product,
        });
      });

      database.forEach((product) => {
        server.create("wishlist", {
          ...product,
        });
      });
    },
  });
};

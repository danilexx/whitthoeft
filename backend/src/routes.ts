import { Router } from "express";
import { userStoreSchema } from "./app/schemas/User";
import UserController from "./app/controllers/UserController";
import validateBody from "./app/middlewares/validateBody";
import { sessionStoreSchema } from "./app/schemas/Session";
import { commentStoreSchema } from "./app/schemas/Comment";
import { favoriteStoreSchema } from "./app/schemas/Favorite";
import { addressStoreSchema } from "./app/schemas/Address";
import SessionController from "./app/controllers/SessionController";
import SeedController from "./app/controllers/SeedController";
import ProductController from "./app/controllers/ProductController";
import auth from "./app/middlewares/auth";
import CommentController from "./app/controllers/CommentController";
import FavoriteController from "./app/controllers/FavoriteController";
import AddressController from "./app/controllers/AddressController";
import { cartStoreSchema } from "./app/schemas/Cart";
import CartController from "./app/controllers/CartController";
import { creditCardStoreSchema } from "./app/schemas/CreditCard";
import CreditCardController from "./app/controllers/CreditCardController";
import SearchController from "./app/controllers/SearchController";

const routes = Router();
routes.post("/users", validateBody(userStoreSchema), UserController.store);

routes.post(
  "/sessions",
  validateBody(sessionStoreSchema),
  SessionController.store
);
routes.get("/seed", SeedController.seed);
routes.get("/products", ProductController.index);
routes.get("/products/:productIdOrName", ProductController.show);
routes.get("/search", SearchController.index);

routes.use(auth);

routes.post(
  "/products/:productId/comments",
  validateBody(commentStoreSchema),
  CommentController.store
);
routes.post(
  "/favorites",
  validateBody(favoriteStoreSchema),
  FavoriteController.store
);
routes.post(
  "/addresses",
  validateBody(addressStoreSchema),
  AddressController.store
);
routes.delete("/addresses/:addressId", AddressController.destroy);
routes.get("/addresses", AddressController.index);
routes.get("/favorites", FavoriteController.index);
routes.delete("/favorites/:productId", FavoriteController.destroy);
routes.get("/cart", CartController.index);
routes.post("/cart", validateBody(cartStoreSchema), CartController.store);
routes.post(
  "/credit_cards",
  validateBody(creditCardStoreSchema),
  CreditCardController.store
);
routes.get("/credit_cards", CreditCardController.index);
routes.delete("/credit_cards/:creditCardId", CreditCardController.destroy);
routes.get("/users", UserController.show);
routes.put("/users", UserController.update);

export default routes;

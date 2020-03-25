import { Response } from "express";
import {
  AuthenticatedAndValidatedRequest,
  AuthenticatedRequest,
} from "../schemas";
import { Cart } from "../models/Cart";
import { Product } from "../models/Product";

interface CartStoreBody {
  productId: number;
}

class CartController {
  async store(
    req: AuthenticatedAndValidatedRequest<any, CartStoreBody>,
    res: Response
  ) {
    const { productId } = req.body;
    const { user } = req;
    const product = await Product.findOne(productId);
    const cartProduct = Cart.create({ product, user, quantity: 1 });
    await cartProduct.save();
    // const data = req.body;
    // const { user } = req;
    // const address = Address.create(data);
    // address.user = user;
    // await address.save();
    return res.json(cartProduct);
  }

  async index(req: AuthenticatedRequest, res: Response) {
    const { user } = req;
    const cartProducts = await Cart.find({
      where: {
        user,
      },
    });
    return res.json(cartProducts);
    // const { user } = req;
    // const { addresses } = await User.findOne(user.id, {
    //   relations: ["addresses"],
    // });
    // return res.json(addresses);
  }
}

export default new CartController();

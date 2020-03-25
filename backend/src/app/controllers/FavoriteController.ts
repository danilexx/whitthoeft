import { Response, Request } from "express";
import { User } from "../models/User";
import {
  AuthenticatedAndValidatedRequest,
  AuthenticatedRequest,
} from "../schemas";
import { Product } from "../models/Product";

interface FavoriteStoreBody {
  productId: number;
}

class FavoriteController {
  async store(
    req: AuthenticatedAndValidatedRequest<any, FavoriteStoreBody>,
    res: Response
  ) {
    const { productId } = req.body;
    const {
      user: { id },
    } = req;
    const user = await User.findOne(id, {
      relations: ["favorites"],
    });
    const product = await Product.findOne(productId);
    user.favorites.push(product);
    await user.save();
    return res.json(product);
  }

  async index(req: AuthenticatedRequest, res: Response) {
    const {
      user: { id: userId },
    } = req;
    const user = await User.findOne(userId, {
      relations: ["favorites"],
    });
    return res.json(user.favorites);
  }

  async destroy(
    req: AuthenticatedRequest<{ productId: string }>,
    res: Response
  ) {
    const {
      user: { id },
    } = req;
    const user = await User.findOne(id, {
      relations: ["favorites"],
    });
    const { productId } = req.params;
    user.favorites = user.favorites.filter((e) => e.id !== Number(productId));
    await user.save();
    return res.json({ ok: true });
  }
}

export default new FavoriteController();

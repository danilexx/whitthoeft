import { Response } from "express";
import { AuthenticatedAndValidatedRequest } from "../schemas";
import { Product } from "../models/Product";
import { Comment } from "../models/Comment";

interface CommentStoreBody {
  description: string;
  rating: number;
}

interface CommentStoreParams {
  productId: string;
}

class CommentController {
  async store(
    req: AuthenticatedAndValidatedRequest<CommentStoreParams, CommentStoreBody>,
    res: Response
  ) {
    const data = req.body;
    const { user } = req;
    const { productId } = req.params;
    const product = await Product.findOne(productId);
    const comment = await Comment.create({ ...data, user, product });
    await Comment.save(comment);
    return res.json(comment);
  }
}

export default new CommentController();

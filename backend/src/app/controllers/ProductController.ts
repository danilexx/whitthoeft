import { Response, Request } from "express";
import { Product } from "../models/Product";

const isNumber = (a: any): boolean => +a === +a;

class ProductController {
  async index(req: Request, res: Response) {
    const page = req.query.page || "1";
    const itemsPerPage = req.query.itemsPerPage || "10";
    const offset = (Number(page) - 1) * Number(itemsPerPage);
    const products = await Product.find({
      skip: offset,
      take: Number(itemsPerPage),
      order: {
        name: "ASC",
      },
    });
    const total = await Product.count();
    return res.json({ products, total });
  }

  async show(req: Request<{ productIdOrName: string }>, res: Response) {
    const { productIdOrName } = req.params;
    const isId = isNumber(productIdOrName);
    const product = await Product.findOne({
      relations: ["comments", "imgList"],
      where: isId ? { id: productIdOrName } : { name: productIdOrName },
    });
    return res.json(product);
  }
}

export default new ProductController();

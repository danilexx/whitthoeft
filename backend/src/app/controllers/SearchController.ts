import { Like } from "typeorm";
import { Request, Response } from "express";
import { Product } from "../models/Product";

class SearchController {
  async index(req: Request, res: Response) {
    const { product_name } = req.query;
    const products = await Product.find({
      where: `Product.name ILIKE '%${product_name}%'`,
      select: ["id", "name", "price", "oldPrice"],
    });
    return res.json(products);
  }
}

export default new SearchController();

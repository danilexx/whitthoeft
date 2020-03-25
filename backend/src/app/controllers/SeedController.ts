import { Request, Response } from "express";
import Chance from "chance";
import { getConnection, BaseEntity, EntitySchema } from "typeorm";
import { File } from "../models/File";
import { Product } from "../models/Product";
import { User } from "../models/User";

const productImgs = [
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921592/products/camisa1_ihfv4h.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921592/products/camisa2_kyz26n.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921592/products/camisa3_czwaeh.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921592/products/camisa4_qfshfj.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921592/products/camisa5_cexf3i.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921592/products/camisa6_js6vv5.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921592/products/camisa7_x4o2yo.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921593/products/camisa8_epgap9.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921592/products/camisa9_nosedn.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921592/products/camisa10_iifnni.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921592/products/calca1_yqntjh.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921591/products/calca2_mua700.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921591/products/calca3_jl0l9b.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921591/products/calca4_tdcitw.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921591/products/calca5_pbcbqb.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921591/products/calca6_eifhbg.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921591/products/calca7_mrevaa.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921591/products/calca8_ix1bl9.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921592/products/calca9_wrkppf.jpg",
  "https://res.cloudinary.com/ddfwo3bbi/image/upload/v1584921592/products/calca10_pp5ymv.jpg",
];

const chance = Chance();

const capitalize = (text: string) => {
  const [firstLetter, ...rest] = text.split("");
  return firstLetter.toUpperCase() + rest.join("");
};

const generateProducts = (numberOf: number) => {
  return [...Array(numberOf)].map((_, index) => {
    const price = chance.floating({
      fixed: 2,
      min: 20,
      max: 40,
    });
    const type = index <= 9 ? "camiseta" : "calça";
    return {
      name: `${capitalize(type)} whittoeft ${index + 1}`,
      type,
      price,
      oldPrice: chance.bool({
        likelihood: 30,
      })
        ? price +
          chance.floating({
            min: 5,
            max: 10,
            fixed: 2,
          })
        : null,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus fermentum aliquam. Suspendisse tristique tortor quis cursus suscipit. Cras id nunc eget nibh sollicitudin lobortis. Suspendisse accumsan eget enim in ultrices. Curabitur non tellus eget turpis porttitor egestas. Fusce condimentum neque non posuere tempor. Sed auctor scelerisque ex, sed eleifend augue pretium id.",
    };
  });
};

const products = generateProducts(20);

const clearDb = async () => {
  const conn = getConnection();
  await conn.synchronize(true);
  // const entities = ["file", "comment", "product", "file"];
  // entities.forEach(async (entity) => {
  //   const repository = conn.getRepository(entity);
  //   // await repository.query(`TRUNCATE TABLE ${entity};`);
  //   await repository.query(`DELETE FROM ${entity};`);
  // });
};

class SeedController {
  async seed(req: Request, res: Response) {
    await clearDb();
    const toCreateImages = productImgs.map((e) => ({ url: e }));
    const imagesCreateds = File.create(toCreateImages);
    await File.save(imagesCreateds);
    const toCreateProducts = imagesCreateds.map((image, index, array) => {
      const imgList = chance.pickset(array, 3);
      return {
        ...products[index],
        // img: image,
        img: image,
        imgList,
      };
    });
    const productsCreateds = Product.create(toCreateProducts);
    await Product.save(productsCreateds);
    const user = User.create({
      name: "danilo",
      email: "danilofalador67@gmail.com",
      cpf: "402.924.120-45",
      tel: "55 11 990253606",
      birth: "2001-03-23T23:51:09.030Z",
    });
    user.password = "danilo10";
    user.save();
    return res.json(productsCreateds);
  }
}

export default new SeedController();

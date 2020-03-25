import { Response } from "express";
import { CreditCard } from "../models/CreditCard";
import {
  AuthenticatedAndValidatedRequest,
  AuthenticatedRequest,
} from "../schemas";

interface CreditCardStoreBody {
  number: string;
  name: string;
  cvv: string;
  expiry: string;
  issuer: string;
}

class CreditCardController {
  async store(
    req: AuthenticatedAndValidatedRequest<any, CreditCardStoreBody>,
    res: Response
  ) {
    const data = req.body;
    const { user } = req;
    const creditCard = CreditCard.create({ ...data, user });
    await creditCard.save();
    return res.json(creditCard);
  }

  async index(req: AuthenticatedRequest, res: Response) {
    const { user } = req;
    const creditCards = (
      await CreditCard.find({
        where: {
          user,
        },
      })
    ).map((creditCard) => ({
      ...creditCard,
      number: creditCard.number
        .split("")
        .map((e, index, array) => {
          if (e === " ") return e;
          if (index < array.length - 4) {
            return "•";
          }
          return e;
        })
        .join(""),
    }));
    return res.json(creditCards);
  }

  async destroy(
    req: AuthenticatedRequest<{ creditCardId: string }>,
    res: Response
  ) {
    const { creditCardId } = req.params;
    const creditCard = await CreditCard.findOne(creditCardId);
    await creditCard.remove();
    return res.json({ ok: true });
  }
}

export default new CreditCardController();

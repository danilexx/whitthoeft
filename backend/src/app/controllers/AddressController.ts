import { Response } from "express";
import {
  AuthenticatedAndValidatedRequest,
  AuthenticatedRequest,
} from "../schemas";
import { Address } from "../models/Address";
import { User } from "../models/User";

interface AddressStoreBody {
  cep: string;
  street: string;
  number: number;
  complement: string;
  state: string;
  city: string;
}

class AddressController {
  async store(
    req: AuthenticatedAndValidatedRequest<any, AddressStoreBody>,
    res: Response
  ) {
    const data = req.body;
    const { user } = req;
    const address = Address.create(data);
    address.user = user;
    await address.save();
    return res.json(address);
  }

  async index(req: AuthenticatedRequest, res: Response) {
    const { user } = req;
    const { addresses } = await User.findOne(user.id, {
      relations: ["addresses"],
    });
    return res.json(addresses);
  }

  async destroy(
    req: AuthenticatedRequest<{
      addressId: string;
    }>,
    res: Response
  ) {
    const { addressId } = req.params;
    const { user } = req;
    const address = await Address.findOne({
      where: { id: addressId, user },
    });
    if (!address) {
      return res.status(404).json({
        error: "esse endereço não pertence a você",
      });
    }
    await address.remove();
    return res.json({
      ok: true,
    });
  }
}

export default new AddressController();

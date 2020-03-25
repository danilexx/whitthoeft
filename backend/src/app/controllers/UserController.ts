import { Request, Response } from "express";
import { string } from "yup";
import { User } from "../models/User";
import {
  ValidatedRequest,
  AuthenticatedRequest,
  AuthenticatedAndValidatedRequest,
} from "../schemas";

interface UserBody {
  email: string;
  name: string;
  cpf: string;
  tel: string;
  birth: string;
  password: string;
}

type UserPutBody = Partial<
  UserBody & {
    newPassword: string;
    confirmNewPassword: string;
  }
>;
type UserStoreBody = UserBody;

class UserController {
  async show(req: AuthenticatedRequest<{ id: string }>, res: Response) {
    const { user } = req;
    return res.json(user);
  }

  async store(req: ValidatedRequest<any, UserStoreBody>, res: Response) {
    const data = req.body;
    const user = User.create(data)[0];
    user.password = data.password;
    await User.save(user);
    return res.json(user);
  }

  async update(
    req: AuthenticatedAndValidatedRequest<any, UserPutBody>,
    res: Response
  ) {
    const { user } = req;
    const { password, confirmNewPassword, newPassword, ...data } = req.body;
    User.merge(user, data);
    if (password && confirmNewPassword && newPassword) {
      const isValidPassword = await user.checkPassword(password);
      if (newPassword !== confirmNewPassword) {
        return res.status(404).json({
          error: "Nova senha e sua confirmação não batem",
        });
      }
      if (!isValidPassword) {
        return res.status(404).json({
          error: "Senha provida não é valida",
        });
      }
      user.password = newPassword;
    }
    await user.save();
    return res.json(user);
  }
}

export default new UserController();

import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../service/user";

export default class UserController {

  constructor(private userService = new UserService()) { };

  public getAll = async (req: Request, res: Response) => {
    const users = await this.userService.getAll();
    return res.status(StatusCodes.OK).json(users);
  }

  public getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const user = await this.userService.getById(id);
    return res.status(StatusCodes.OK).json(user);
  }
}
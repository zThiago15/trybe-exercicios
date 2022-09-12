import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const validationUser = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: `Preencher campos obrigatórios` })
  }

  next();
}

export default validationUser;
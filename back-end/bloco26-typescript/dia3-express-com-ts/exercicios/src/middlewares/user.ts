import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const validationUser = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: `Preencher campos obrigatórios` })
  }

  if (name.length < 3) 
    return res.status(StatusCodes.NOT_ACCEPTABLE).json({ message: 'Nome deve ter no mínimo 3 caracteres' });
  
  if (password.length < 6 || password.length > 12) 
    return res.status(StatusCodes.NOT_ACCEPTABLE).json({ message: 'Senha tem que ter no mínimo 6 caracteres e no máximo 12' })

    
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  if (!regexEmail.test(email)) 
    return res.status(StatusCodes.NOT_ACCEPTABLE).json({ message: 'E-mail inválido' });
  

  next();
}

export default validationUser;
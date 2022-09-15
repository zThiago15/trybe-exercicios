import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import userRouter from './routes/user';
import blogRouter from './routes/blog';
import 'express-async-errors';


const app = express();
app.use(express.json());


app.use(userRouter);
app.use(blogRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(StatusCodes.BAD_REQUEST).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(StatusCodes.BAD_REQUEST).json({ message });
      break;
    case 'ConflictError':
      res.status(StatusCodes.CONFLICT).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
});

const port = 3000;
app.listen(port, () => {
  console.info(`Listening at port ${port}`);
})
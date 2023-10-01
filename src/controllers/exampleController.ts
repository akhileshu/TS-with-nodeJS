// controllers/exampleController.ts

import { NextFunction, Request, Response } from 'express';

export const getExample = (req: Request, res: Response,next:NextFunction) => {
  res.send('Hello from the example controller!');
};

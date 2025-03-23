import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers);
    const token = req.headers['authorization'];
    req['token'] = token; // cохраняем токен в объекте запроса
    next();
  }
}

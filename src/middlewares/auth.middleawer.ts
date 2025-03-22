import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RequestContextService } from '../services/requestContext.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly requestContext: RequestContextService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];

    this.requestContext.setToken(token);

    next();
  }
}

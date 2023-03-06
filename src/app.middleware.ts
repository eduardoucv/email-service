import {
  ForbiddenException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  use({ headers }: Request, _: Response, next: NextFunction) {
    if (
      !headers ||
      !headers['authorization'] ||
      headers['authorization'].length === 0
    ) {
      return next(new ForbiddenException('Authorization required'));
    }

    const token: string = headers['authorization'].split(' ')[1];

    try {
      const decoded: any = verify(token, process.env.SECRET, {
        algorithms: ['HS256'],
      });

      if (
        !decoded ||
        !decoded.origin ||
        !decoded.resource ||
        !decoded.timestamp
      ) {
        return next(new UnauthorizedException('Unauthorized'));
      }

      if (Date.now() > decoded.timestamp + +process.env.MAX_REQUEST_MS_GAP) {
        return next(new UnauthorizedException('Unauthorized'));
      }

      return next();
    } catch (e) {
      return next(new UnauthorizedException('Invalid token'));
    }
    return next();
  }
}

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from 'src/decorators/roles.decorator';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const roles = this.reflector.get(Roles, context.getHandler());

    const path = request.path;

    console.log('开始guard...', path);

    if (!roles) {
      console.log('结束guard...', path);
      return true;
    }

    const user = request.query.user as string;

    if (user && roles.includes(user)) {
      console.log('结束guard...', path);
      return true;
    }

    console.log('结束guard...', path);
    return false;
  }
}

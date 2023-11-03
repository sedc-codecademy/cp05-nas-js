import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(contex: ExecutionContext) {
    const req = contex.switchToHttp().getRequest();
    return req.isAuthenticated();
  }
}

// src/auth/auth.guard.ts
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthServiceClient } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authClient: AuthServiceClient) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
      console.log('AuthGuard is executing...');
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.replace('Bearer ', '');
    if (!token) return false;
    return this.authClient.validateToken(token);
  }
}

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthServiceClient {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async validateToken(token: string): Promise<boolean> {

    const url = this.configService.get<string>('AUTH_URL');

    if (!url) {
      throw new Error('AUTH_URL is not defined in the environment variables');
    }

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      );

     return response.data?.status === 'valid';

    } catch (error) {
      console.error('AuthService error:', error?.message);
      return false;
    }
  }
}

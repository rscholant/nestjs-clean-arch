import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from '@shared/infrastructure/env-config/env-config.interface';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private readonly configService: ConfigService) {}
  getAppPort(): number {
    return this.configService.get<number>('PORT');
  }
  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV');
  }
}

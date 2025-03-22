import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RequestContextService } from './services/requestContext.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly requestContext: RequestContextService,
  ) {}

  @Get()
  getHello() {
    const token = this.requestContext.getToken();
    return this.appService.getHello(token);
  }

  @Get('token')
  getToken() {
    const token = this.requestContext.getToken();
    return 'token:' + token;
  }
}

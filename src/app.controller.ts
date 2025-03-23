import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request) {
    const token = request['token']; // получаем токен из объекта запроса
    return this.appService.getHello(token);
  }

  @Get('token')
  getToken(@Req() request: Request) {
    const token = request['token']; // получаем токен из объекта запроса
    return 'token:' + token;
  }
}

import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiService } from './api.service';
import { HttpModule } from '@nestjs/axios';
import { TokenMiddleware } from './middlewares/TokenMiddleware';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, ApiService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware).forRoutes({
      path: '*', // для всех маршрутов
      method: RequestMethod.ALL,
    });
  }
}

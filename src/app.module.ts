import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiService } from './api.service';
import { HttpModule } from '@nestjs/axios';
import { AuthMiddleware } from './middlewares/auth.middleawer';
import { RequestContextService } from './services/requestContext.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, ApiService, RequestContextService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*', // для всех маршрутов
      method: RequestMethod.ALL,
    });
  }
}

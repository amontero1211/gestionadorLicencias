import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
// import * as cookieParser from 'cookie-parser';
// import * as morgan from 'morgan';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('🚀 ~ bootstrap ~ app:', app);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  // app.use(morgan('dev'));
  // app.use(cookieParser());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

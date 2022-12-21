import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
// import { AppModule } from '../src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls:['amqp://localhost:5672'],
  //     queue: 'validate_donation',
  //     queueOptions: {
  //       durable: false
  //     }
  //   }
  // })
  // const microservice = app.connectMicroservice([
  // //   {
  // //   name: "USER_SERVICES",
  // //   transport: Transport.TCP,
  // //   options: {
  // //     host: process.env.TCP_USER_HOST,
  // //     port: process.env.TCP_USER_PORT,
  // //   },
  // // },
  // {
  //   transport: Transport.REDIS,
  //   Option: {
  //     host: process.env.REDIS_HOST,
  //     port: process.env.REDIS_PORT,
  //   }
  // },
  // // {
  // //   transport: Transport.RMQ,
  // //   options: {
  // //     urls: ['amqp://localhost:5672'],
  // //     queue: 'cats_queue',
  // //     queueOptions: {
  // //       durable: false
  // //     },
  // //   },
  // // },
  // // {
  // //   transport: Transport.KAFKA,
  // //   options: {
  // //     client: {
  // //       brokers: ['localhost:9092'],
  // //     }
  // //   }
  // // }
  // ]);

  // await app.startAllMicroservices();
  app.enableCors();
  app.setGlobalPrefix("api/v1/")
  // app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(4001);
  console.log(`Server running on: http://localhost:${4001}`);
}
bootstrap();
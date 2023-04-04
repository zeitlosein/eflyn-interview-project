import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ListModule } from './list/list.module';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entities/todo.entity';
import { List } from './list/entities/list.entity';
import { LoggingService } from './logging.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'interview-app/dist/interview-app'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hacknik123',
      database: 'interview_app_db',
      entities: [List, Todo],
      synchronize: true,
    }),
    ListModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggingService],
})
export class AppModule {}

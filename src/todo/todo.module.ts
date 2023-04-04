import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { List } from 'src/list/entities/list.entity'; 
import { LoggingService } from 'src/logging.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, List])],
  controllers: [TodoController],
  providers: [TodoService, LoggingService]
})

export class TodoModule {}

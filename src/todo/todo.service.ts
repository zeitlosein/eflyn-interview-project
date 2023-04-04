import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { List } from 'src/list/entities/list.entity';
import { FindToDoDto } from './dto/find-todo.dto';
import { LoggingService } from 'src/logging.service';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private todoRepo: Repository<Todo>,
  @InjectRepository(List) private listRepo: Repository<List>, private loggingService: LoggingService) {}

  create(createTodoDto: CreateTodoDto) {
    const todo = new Todo();
    todo.title = createTodoDto.title;
    todo.list = new List();
    todo.list.id = createTodoDto.listId;
    return this.todoRepo.save(todo);
  }

  findAll(dto: FindToDoDto) {
    const where: Partial<Todo> = {};
    if(dto.listId) {
      where.list = new List();
      where.list.id = dto.listId;
    }

    return this.todoRepo.find({ where });
  }

  async findOne(id:number) {
    try {
      const todo = await this.todoRepo.findOne({where:{id}});
      if(!todo) {
        throw new NotFoundException(`Todo with ID${id} not found.`);
      }
      return todo;
    } catch(error) {
      this.loggingService.logError(`Error while fetching Todo with ID ${id}:`, error);
      throw error;
    }
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    try {
      const todo = await this.todoRepo.findOne({where:{id}});
      if (!todo) {
        throw new NotFoundException(`Todo with ID ${id} not found`);
      }
      const updatedTodo = { ...todo, ...updateTodoDto };
      await this.todoRepo.save(updatedTodo);
      return updatedTodo;
    } catch (error) {
      this.loggingService.logError(`Error while updating Todo with ID ${id}:`, error);
      throw new InternalServerErrorException();
    }
  }
  


  async remove(id: number) {
    try {
      const todo = await this.todoRepo.findOne({where:{id}});
      if (!todo) {
        throw new NotFoundException(`Todo with ID ${id} not found`);
      }
      await this.todoRepo.remove(todo);
    } catch (error) {
      this.loggingService.logError(`Error while deleting Todo with ID ${id}:`, error);
      throw new InternalServerErrorException();
    }
  }
  


}
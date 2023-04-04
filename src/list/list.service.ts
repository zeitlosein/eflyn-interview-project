import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Repository } from 'typeorm'; // added this import
import { LoggingService } from 'src/logging.service';


@Injectable()

export class ListService {

  constructor(@InjectRepository(List) private listRepo: Repository<List>, private loggingService:LoggingService) {}

  create(createListDto: CreateListDto) {
    const list = this.listRepo.create();
    Object.assign(list, createListDto);
    return this.listRepo.save(list);
  }


  findAll() {
    return this.listRepo.find();
  }

  async findOne(id: number) {
    try {
      const list = await this.listRepo.findOne({ where: {id}});
      if(!list) {
        throw new NotFoundException(`List with ID ${id} not found.`);
      }
      return list;
    } catch(error) {
      this.loggingService.logError(`Error while fetching List with ID ${id}:`, error);
      throw error;
    }
  }
  
  // In this approach, instead of using the `update()` method of the repository, 
  // I'm using `findOne()` to find the list, updating the list with the `Object.assign()` 
  // function, and then saving it back to the repository using `save()`.
  async update(id:number, updateListDto: UpdateListDto) {
    try {
      const list = await this.listRepo.findOne({ where:{id}});
      if(!list) {
        throw new NotFoundException(`List with ID ${id} not found.`);
      }
      Object.assign(list, updateListDto);
      return this.listRepo.save(list);
    } catch(error) {
      this.loggingService.logError(`Error while updating List with ID ${id}:`, error);
      throw error;
    }
  }

  remove(id: number) {
    return this.listRepo.delete({ id });
  }
}




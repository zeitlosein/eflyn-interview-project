import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { List } from "src/list/entities/list.entity";

@Entity()
export class Todo {

    @ManyToOne(() => List, (list) => list.todos)
    list: List;


    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn() 
    updatedAt: Date;
  
    @PrimaryGeneratedColumn()
    id: number;

    @Column()  
    title: string;

    @Column({default:false})
    completed:boolean;
}
  
  
import { Column, CreateDateColumn, OneToMany ,Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Todo } from "src/todo/entities/todo.entity";

@Entity()
export class List {

    @OneToMany(() => Todo, (todo) => todo.list)
    todos: Todo[];

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn() 
    updatedAt: Date;
  
    @PrimaryGeneratedColumn()
    id: number;

    @Column()  
    title: string;
}
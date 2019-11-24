import { Field, Int, ObjectType } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Author {
  @Field(type => Int)
  @PrimaryGeneratedColumn({comment: "主键，作者ID"})
  id: number;

  @Field(type => String, { description: "姓" })
  @Column({nullable: true, name: "first_name"})
  firstName?: string;

  @Field(type => String, { description: "名" })
  @Column({nullable: true, name: 'last_name'})
  lastName?: string;
}
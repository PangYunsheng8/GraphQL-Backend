import { Field, Int, ObjectType } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Article {
  @Field(type => Int)
  @PrimaryGeneratedColumn({comment: "主键，文章ID"})
  id: number;

  @Field(type => String)
  @Column({nullable: true, comment: "文章标题"})
  title: string;

  @Field(type => String)
  @Column({nullable: true, comment: '文章内容'})
  content: string;

  @Field(type => Int)
  @Column({nullable: false, comment: "作者id"})
  user_id: number
}
import { Field, ArgsType, InputType, Int } from 'type-graphql';

@ArgsType()
export class ArticleIdArgs {

  @Field(type => Int, { description: "文章ID" })
  id!: number;

}

@InputType()
export class changeArticleInput {

  @Field(type => Int, { description: "文章ID" })
  id: number;

  @Field(type => String, { description: "文章标题" })
  title: string;

  @Field(type => String, { description: "文章内容" })
  content: string;

  @Field(type => Int, { description: "文章作者ID" })
  user_id: number;

}
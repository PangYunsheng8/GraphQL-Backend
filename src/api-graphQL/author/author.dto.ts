import { ArgsType, Field, Int } from 'type-graphql'

@ArgsType()
export class GetAuthorArgs {

  @Field(type => Int, { description: "作者ID" })
  id!: number;
  
}
import { ObjectType, Field, Int } from "type-graphql";

//对API调用返回固定的格式
@ObjectType()
export class Result {

  @Field(type => Int, { description: "操作结果代码，0为成功，其他为失败" })
  code: number;

  @Field(type => String, { description: "操作结果详情" })
  message: string;

}
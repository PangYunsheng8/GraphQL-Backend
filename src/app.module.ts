import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from "@nestjs/typeorm";
import { appConfig } from './app.config';
import { AuthorModule } from './api-graphQL/author/author.module';
import { ArticleModule } from './api-graphQL/article/article.module';

@Module({
  imports: [
    AuthorModule, 
    ArticleModule,
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot(appConfig.db),
  ]
})
export class AppModule {}

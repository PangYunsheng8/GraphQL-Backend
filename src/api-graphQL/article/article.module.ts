import { Module } from '@nestjs/common';
import { Article } from '../../entity/article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleService } from './article.service';
import { ArticleResolver } from './article.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Article])
  ],
  providers: [ArticleResolver, ArticleService]
})
export class ArticleModule {}

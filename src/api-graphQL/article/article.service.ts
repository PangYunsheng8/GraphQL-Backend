import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Article } from '../../entity/article.entity';
import { ArticleIdArgs, changeArticleInput } from './article.dto';
import { Result } from '../result.vo';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async getArticle(dto: ArticleIdArgs): Promise<Article> {
    return await this.articleRepository.findOne(dto.id)
  }

  async getArticles(): Promise<Article[]> {
    return await this.articleRepository.find()
  }

  async addArticle(dto: changeArticleInput): Promise<Result> {
    const article = new Article()
    article.id = dto.id
    article.title = dto.title
    article.content = dto.content
    article.user_id = dto.user_id
    await this.articleRepository.save(article)
    return {
      code: 0,
      message: "添加文章成功!"
    }
  }

  async updateArticle(dto: changeArticleInput): Promise<Result> {
    let article = await this.articleRepository.findOne({ id: dto.id })
    if (article) {
      article.id = dto.id
      article.title = dto.title
      article.content = dto.content
      article.user_id = dto.user_id
      this.articleRepository.save(article)
      return {
        code: 0,
        message: "修改文章成功!"
      }
    } else {
      return {
        code: 1,
        message: "文章不存在!"
      }
    }
  }

  async deleteArticle(dto: ArticleIdArgs): Promise<Result> {
    let article = await this.articleRepository.findOne({ id: dto.id })
    if (article) {
      await this.articleRepository.remove(article)
      return {
        code: 0,
        message: "删除文章成功!"
      }
    } else {
      return {
        code: 1,
        message: "文章不存在!"
      }
    }
  }
}

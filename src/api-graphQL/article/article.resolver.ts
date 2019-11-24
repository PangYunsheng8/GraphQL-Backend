import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { Article } from '../../entity/article.entity';
import { ArticleIdArgs, changeArticleInput } from './article.dto';
import { Result } from '../result.vo';

@Resolver('Article')
export class ArticleResolver {
  constructor(
    private articleService: ArticleService
  ) { }

  @Query(returns => Article, { description: "根据文章ID查询文章" })
  async getArticle(@Args() dto: ArticleIdArgs): Promise<Article> {
    return await this.articleService.getArticle(dto)
  }

  @Query(returns => [Article], { description: "查询所有文章" })
  async getArticles(): Promise<Article[]> {
    return await this.articleService.getArticles()
  }

  @Mutation(returns => Result, { description: "增加一篇文章" })
  async addArticle(@Args('add') dto: changeArticleInput): Promise<Result> {
    return await this.articleService.addArticle(dto)
  }

  @Mutation(returns => Result, { description: "修改一篇文章" })
  async updateArticle(@Args('update') dto: changeArticleInput): Promise<Result> {
    return await this.articleService.updateArticle(dto)
  }

  @Mutation(returns => Result, { description: "删除一篇文章" })
  async deleteArticle(@Args() dto: ArticleIdArgs): Promise<Result> {
    return await this.articleService.deleteArticle(dto)
  }

}

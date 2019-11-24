import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author } from '../../entity/author.entity';
import { GetAuthorArgs } from './author.dto';

@Resolver('Author')
export class AuthorResolver {
  constructor(
    private authorService: AuthorService
  ) { }

  @Query(returns => Author, { description: "根据ID查询作者" })
  async getAuthor(@Args() dto: GetAuthorArgs): Promise<Author> {
    return await this.authorService.getAuthor(dto)
  }

  @Query(returns => [Author], { description: "查询所有作者" }) 
  async getAuthors(): Promise<Author[]> {
    return await this.authorService.getAuthors()
  }

  // @Mutation(return => )
}

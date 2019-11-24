import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Author } from '../../entity/author.entity';
import { GetAuthorArgs } from './author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async getAuthor(dto: GetAuthorArgs): Promise<Author>{
    return await this.authorRepository.findOne(dto.id)
  }

  async getAuthors(): Promise<Author[]> {
    return await this.authorRepository.find()
  }
}

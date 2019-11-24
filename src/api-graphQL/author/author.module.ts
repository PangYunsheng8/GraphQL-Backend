import { Module } from '@nestjs/common';
import { Author } from '../../entity/author.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Author])
  ],
  providers:[AuthorResolver, AuthorService]
})
export class AuthorModule {}

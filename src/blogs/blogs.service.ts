import { Injectable } from '@nestjs/common';
import { CreateBlogInput } from './dto/create-blog.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog) private readonly blogRepository: Repository<Blog>,
  ) {}

  create(createBlogInput: CreateBlogInput) {
    return this.blogRepository.save(createBlogInput);
  }

  findAll() {
    return this.blogRepository.find();
  }

  findOne(id: string) {
    return this.blogRepository.findBy({ id });
  }

  async remove(id: string) {
    await this.blogRepository.delete({ id });

    return 'deleted Successfully';
  }
}

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BlogsService } from './blogs.service';
import { Blog } from './entities/blog.entity';
import { CreateBlogInput } from './dto/create-blog.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@UseGuards(JwtAuthGuard)
@Resolver(() => Blog)
export class BlogsResolver {
  constructor(private readonly blogsService: BlogsService) {}

  @Mutation(() => Blog)
  createBlog(@Args('createBlogInput') createBlogInput: CreateBlogInput) {
    return this.blogsService.create(createBlogInput);
  }

  @Query(() => [Blog], { name: 'blogs' })
  findAll() {
    return this.blogsService.findAll();
  }

  @Query(() => Blog, { name: 'blog' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.blogsService.findOne(id);
  }

  @Mutation(() => String)
  removeBlog(@Args('id', { type: () => String }) id: string) {
    return this.blogsService.remove(id);
  }
}

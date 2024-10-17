import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BlogsService } from './blogs.service';
import { Blog } from './entities/blog.entity';
import { CreateBlogInput } from './dto/create-blog.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { IsPublic, Role, Secured } from './meta/data';

@UseGuards(JwtAuthGuard)
@Resolver(() => Blog)
export class BlogsResolver {
  constructor(private readonly blogsService: BlogsService) {}

  @Secured(Role.UPDATE_AND_CREATE_BLOGS)
  @Mutation(() => Blog)
  createBlog(@Args('createBlogInput') createBlogInput: CreateBlogInput) {
    return this.blogsService.create(createBlogInput);
  }

  @IsPublic()
  @Query(() => [Blog], { name: 'blogs' })
  findAll() {
    return this.blogsService.findAll();
  }

  @IsPublic()
  @Query(() => Blog, { name: 'blog' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.blogsService.findOne(id);
  }

  @Secured(Role.REMOVE_BLOGS)
  @Mutation(() => String)
  removeBlog(@Args('id', { type: () => String }) id: string) {
    return this.blogsService.remove(id);
  }
}

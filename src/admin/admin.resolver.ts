import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { Admin } from './entities/admin.entity';
import { CreateAdminInput } from './dto/create-admin.input';
import { SigninUserInput } from './dto/signin-admin.input';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { IsPublic, Role, Secured } from './meta/data';

@UseGuards(JwtAuthGuard)
@Resolver(() => Admin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @IsPublic()
  @Mutation(() => Admin)
  createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
    return this.adminService.create(createAdminInput);
  }

  @Query(() => [Admin], { name: 'admins' })
  findAll() {
    return this.adminService.findAll();
  }

  @Query(() => Admin, { name: 'admin' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.adminService.findOne(id);
  }

  @IsPublic()
  @Mutation(() => String, { name: 'signin' })
  signinUser(@Args('signinUserInput') input: SigninUserInput) {
    return this.adminService.signin(input);
  }

  @Secured(Role.REMOVE_USER)
  @Mutation(() => Admin)
  removeAdmin(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.remove(id);
  }
}

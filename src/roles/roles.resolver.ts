import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';
import { Role as Permissions } from '../meta/data';
import {
  CreatePermissionInput,
  CreateRoleInput,
} from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { Permission } from './entities/permission.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { Secured } from '../meta/data';

@UseGuards(JwtAuthGuard)
@Resolver(() => Role)
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Secured(Permissions.UPDATE_AND_CREATE_ROLE)
  @Mutation(() => Role)
  createRole(@Args('createRoleInput') createRoleInput: CreateRoleInput) {
    return this.rolesService.createRole(createRoleInput);
  }

  @Secured(Permissions.UPDATE_AND_CREATE_PERMISSIONS)
  @Mutation(() => Permission)
  createPermission(
    @Args('createPermissionInput') createPermissionInput: CreatePermissionInput,
  ) {
    return this.rolesService.createPermission(createPermissionInput);
  }

  @Query(() => [Role], { name: 'roles' })
  findAllRole() {
    return this.rolesService.findAllRole();
  }

  @Query(() => [Permission], { name: 'permissions' })
  findAllPermissions() {
    return this.rolesService.findAllPermissions();
  }

  @Query(() => Role, { name: 'role' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.rolesService.findOne(id);
  }

  @Secured(Permissions.UPDATE_AND_CREATE_ROLE)
  @Mutation(() => Role)
  updateRole(@Args('updateRoleInput') updateRoleInput: UpdateRoleInput) {
    return this.rolesService.update(updateRoleInput.id, updateRoleInput);
  }

  @Secured(Permissions.REMOVE_ROLE)
  @Mutation(() => Role)
  removeRole(@Args('id', { type: () => Int }) id: number) {
    return this.rolesService.remove(id);
  }
}

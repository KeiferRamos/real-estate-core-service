import { Injectable } from '@nestjs/common';
import {
  CreatePermissionInput,
  CreateRoleInput,
} from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { Permission } from './entities/permission.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}

  async createRole({ permission, ...rest }: CreateRoleInput) {
    const rolePermission = await this.findPermissionById(permission);

    return this.roleRepository.save({ ...rest, permission: rolePermission });
  }

  createPermission(createPermission: CreatePermissionInput) {
    return this.permissionRepository.save(createPermission);
  }

  findPermissionById(id: string) {
    return this.permissionRepository.findOneBy({ id });
  }

  findAllRole() {
    return this.roleRepository.find();
  }

  findRoleById(id: string) {
    return this.roleRepository.findOneBy({ id });
  }

  findAllPermissions() {
    return this.permissionRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleInput: UpdateRoleInput) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}

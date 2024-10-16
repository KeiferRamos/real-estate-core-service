import { SetMetadata } from '@nestjs/common';

export const IS_ADMIN_KEY = 'isAdmin';
export const IsAdmin = () => SetMetadata(IS_ADMIN_KEY, true);

export enum Role {
  UPDATE_AND_CREATE_PROPERTIES = 'update and create properties',
  UPDATE_AND_CREATE_BLOGS = 'update and create blogs',
  REMOVE_BLOGS = 'remove blogs',
  REMOVE_PROPERTIES = 'remove properties',
  REMOVE_USER = 'remove user',
  UPDATE_USER_ROLE = 'update user role',
  UPDATE_AND_CREATE_ROLE = 'update and create roles',
  UPDATE_AND_CREATE_PERMISSIONS = 'update and create permissions',
  REMOVE_ROLE = 'remove roles',
  REMOVE_PERMISSION = 'remove permission',
}

export const IS_PUBLIC_KEY = 'isPublic';
export const IsPublic = () => SetMetadata(IS_PUBLIC_KEY, true);

export const IS_SECURED_KEY = 'isSecured';
export const Secured = (role: Role) => SetMetadata(IS_SECURED_KEY, role);

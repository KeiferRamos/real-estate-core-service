import { SetMetadata } from '@nestjs/common';

export const IS_ADMIN_KEY = 'isAdmin';
export const IsAdmin = () => SetMetadata(IS_ADMIN_KEY, true);

export const IS_PUBLIC_KEY = 'isPublic';
export const IsPublic = () => SetMetadata(IS_PUBLIC_KEY, true);

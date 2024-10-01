import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAdminInput } from './dto/create-admin.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SigninUserInput } from './dto/signin-admin.input';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    private readonly jwtService: JwtService,
  ) {}

  async create({ password, ...rest }: CreateAdminInput) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    return this.adminRepository.save({
      ...rest,
      password: hash,
    });
  }

  async signin({ username, password }: SigninUserInput) {
    try {
      const isValidUser = await this.adminRepository.findOneBy({ username });

      if (!isValidUser) {
        throw new UnauthorizedException();
      }

      const isPasswordCorrect = await bcrypt.compare(
        password,
        isValidUser.password,
      );

      if (!isPasswordCorrect) {
        throw new BadRequestException('incorrect username or password');
      }

      return this.jwtService.sign({ id: isValidUser.id }, { expiresIn: '8h' });
    } catch (error) {
      throw new BadRequestException('internal server error');
    }
  }

  findAll() {
    return this.adminRepository.find();
  }

  findOne(id: string) {
    return this.adminRepository.findOneBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}

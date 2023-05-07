import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  async createUser(createUser: CreateUserDto) {
    const email = createUser.email;
    const password = createUser.password;
    const user = this.repo.create({ email, password });
    return Promise.resolve(user);
  }

  async deleteUser(userId: any) {
    return Promise.resolve(undefined);
  }

  async getUserById(userId: string) {
    return Promise.resolve(undefined);
  }

  async getUsers() {
    return Promise.resolve(undefined);
  }
}

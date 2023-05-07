import { Body, Injectable, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  async createUser(createUser: CreateUserDto) {
    return Promise.resolve(createUser);
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

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  async createUser(createUser: CreateUserDto) {
    return Promise.resolve(undefined);
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

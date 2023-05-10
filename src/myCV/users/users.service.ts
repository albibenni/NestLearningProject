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
    return Promise.resolve(this.repo.save(user));
  }

  async deleteUser(userId: any) {
    return Promise.resolve(undefined);
  }

  async getUserById(id: number) {
    const user = await this.repo.findOne({
      where: { id },
    });
    return Promise.resolve(user);
  }

  async getUsers() {
    return Promise.resolve(undefined);
  }
}

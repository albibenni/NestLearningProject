import { Injectable, NotFoundException } from '@nestjs/common';
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
  async getUserById(id: number) {
    const user = await this.repo.findOne({
      where: { id },
    });
    return Promise.resolve(user);
  }

  async getAllUsers() {
    const users: User[] = await this.repo.find({});
    return Promise.resolve(users);
  }

  async getUsersByEmail(email: string) {
    const users: User[] = await this.repo.find({
      where: { email },
    });
    return Promise.resolve(users);
  }
  async updateUser(id: number, attrs: Partial<User>) {
    const user = await this.getUserById(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return Promise.resolve(this.repo.save(user));
  }

  async deleteUser(id: number) {
    const user = await this.getUserById(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return Promise.resolve(this.repo.remove(user));
  }
}

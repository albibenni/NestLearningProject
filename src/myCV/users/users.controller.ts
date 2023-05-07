import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getUsers() {
    return await this.usersService.getUsers();
  }
  @Get(':courseId')
  async getCourseById(@Param('userId') userId: string) {
    return await this.usersService.getUserById(userId);
  }

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    return await this.usersService.createUser(body);
  }
  @Delete()
  async deleteCourse(@Query() query: any) {
    return await this.usersService.deleteUser(query.userId);
  }
}

import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { SerializeInterceptor } from '../interceptors/serialize.interceptor';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    return await this.usersService.createUser(body);
  }
  @Get()
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }

  @UseInterceptors(SerializeInterceptor)
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    console.log('handler is running');
    const user = await this.usersService.getUserById(parseInt(id));
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  @Get('/users')
  async getUsersByEmail(@Query('email') email: string) {
    return await this.usersService.getUsersByEmail(email);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return await this.usersService.updateUser(parseInt(id), body);
  }
  @Delete(':id')
  async deleteCourse(@Param('id') id: string) {
    return await this.usersService.deleteUser(parseInt(id));
  }
}

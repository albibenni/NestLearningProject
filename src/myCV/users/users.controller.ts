import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

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
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return await this.usersService.getUserById(parseInt(id));
  }

  @Get('/users')
  async getUsersByEmail(@Query('email') email: string) {
    return await this.usersService.getUsersByEmail(email);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() body: CreateUserDto) {
    return await this.usersService.updateUser(id, body);
  }
  @Delete(':id')
  async deleteCourse(@Param() id: string) {
    return await this.usersService.deleteUser(parseInt(id));
  }
}

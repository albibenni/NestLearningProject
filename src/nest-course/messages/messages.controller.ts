import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Get()
  listMessages() {
    return this.messagesService.listMessages();
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    const message = this.messagesService.createMessage(body);
    return message;
  }

  @Delete()
  deleteMessage() {
    this.messagesService.deleteMessage();
  }
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.getMessage(id);
    if (message) {
      return message;
    }
    throw new NotFoundException('Message not found');
  }
}

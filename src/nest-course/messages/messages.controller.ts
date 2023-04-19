import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Get()
  listMessages() {
    this.messagesService.listMessages();
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    this.messagesService.createMessage(body);
  }

  @Delete()
  deleteMessage() {
    this.messagesService.deleteMessage();
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    this.messagesService.getMessage(id);
  }
}

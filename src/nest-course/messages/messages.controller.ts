import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Get('')
  listMessages() {
    this.messagesService.listMessages();
  }
  @Post('')
  createMessage(@Body() body: any) {
    this.messagesService.createMessage(body);
  }

  @Delete('')
  deleteMessage() {
    this.messagesService.deleteMessage();
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    this.messagesService.getMessage(id);
  }
}

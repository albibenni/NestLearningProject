import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private readonly messagesRepository: MessagesRepository) {}
  listMessages() {
    return this.messagesRepository.findAll();
  }

  deleteMessage() {
    /* TODO document why this method 'deleteMessage' is empty */
  }

  getMessage(id) {
    return this.messagesRepository.findOne(id);
  }

  createMessage(body: any) {
    return this.messagesRepository.create(body);
  }
}

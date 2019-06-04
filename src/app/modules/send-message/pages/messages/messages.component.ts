import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages = [];

  constructor(
      private messageService: MessageService
  ) { }

  ngOnInit() {
    this.messageService.messages.subscribe(messages => {
        this.messages = [...messages].reverse();
    });
  }

}

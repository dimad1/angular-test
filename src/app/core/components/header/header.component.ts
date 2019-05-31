import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    private counter:number = 0;
    messages: any;

    constructor(
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.messageService.messages.subscribe(messages => {
            this.counter = messages.length;
        });
    }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../../../services/message.service';

@Component({
    selector: 'app-send-message',
    templateUrl: './send-message.component.html',
    styleUrls: ['./send-message.component.scss'],
})
export class SendMessageComponent implements OnInit {
    messageForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private messageService: MessageService
    ) {
        this.messageForm = fb.group({
            message: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
    }

    sendMessage(): void {
        let date = new Date();
        this.messageService.addMessage({date: date, text: this.messageForm.value.message});
        this.messageForm.reset();
    }


}

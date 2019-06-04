import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    public messages = new BehaviorSubject(this.getInitMessages());

    constructor() {
    }

    addMessage(message: object) {
        let messagesArr = this.messages.value;
        messagesArr.push(message);
        this.messages.next(messagesArr);
    }

    getInitMessages() {
        return [];
    }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { SendMessageComponent } from './pages/send-message/send-message.component';
import { SendMessageRouting } from './send-message.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './pages/messages/messages.component';

@NgModule({
    declarations: [
        SendMessageComponent,
        MessagesComponent
    ],
    imports: [
        CommonModule,
        SendMessageRouting,
        MatFormFieldModule,
        MatInputModule,
        FlexModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule
    ],
})
export class SendMessageModule {
}

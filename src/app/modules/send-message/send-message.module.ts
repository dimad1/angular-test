import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { SendMessageComponent } from './pages/send-message/send-message.component';
import { SendMessageRouting } from './send-message.routing';

@NgModule({
    declarations: [SendMessageComponent],
    imports: [
        CommonModule,
        SendMessageRouting,
        MatFormFieldModule,
        MatInputModule,
        FlexModule,
        MatButtonModule,
    ]
})
export class SendMessageModule {
}

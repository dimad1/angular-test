import { RouterModule, Routes } from '@angular/router';
import { SendMessageComponent } from './pages/send-message/send-message.component';

const routes: Routes = [
    {
        path: '',
        component: SendMessageComponent,
    },
];

export const SendMessageRouting = RouterModule.forChild(routes);

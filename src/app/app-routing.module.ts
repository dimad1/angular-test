import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/send-message/send-message.module').then(m => m.SendMessageModule),
    },
    {
        path: '**',
        redirectTo: '',
    },

];

export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

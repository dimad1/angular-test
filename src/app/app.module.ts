import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MessageService } from './services/message.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        appRoutingModule,
        CoreModule,
        BrowserAnimationsModule
    ],
    providers: [
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

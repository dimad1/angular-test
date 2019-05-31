import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        FlexLayoutModule,

    ],
    exports: [
        HeaderComponent,
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

}

import { NgModule } from '@angular/core';
import { NavigatorDirective } from './navigator.directive';

@NgModule ({
    declarations: [NavigatorDirective],
    exports: [NavigatorDirective]
})

export class SharedDirectiveModule {}
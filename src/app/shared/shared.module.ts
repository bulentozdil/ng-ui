
import { NgModule } from "@angular/core";

import { SharedComponentModule } from "./shared-component.module";
import { SharedDirectiveModule } from "./shared-directive.module";
import { SharedServiceModule } from "./shared-service.module";

@NgModule({
    imports: [
        SharedComponentModule,
        SharedDirectiveModule,
        SharedServiceModule
    ],
    exports: [
        SharedComponentModule,
        SharedDirectiveModule,
        SharedServiceModule
    ]
})
export class SharedModule { }
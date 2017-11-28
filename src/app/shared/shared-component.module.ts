import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LineChartComponent } from "./components/charts";

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        LineChartComponent
    ],
    exports: [
        CommonModule,
        LineChartComponent
    ]
})
export class SharedComponentModule { }
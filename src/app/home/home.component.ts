import { Component } from "@angular/core";

import { ComponentRootBase } from "../core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent extends ComponentRootBase {

    constructor() {
        super({});
    }
}
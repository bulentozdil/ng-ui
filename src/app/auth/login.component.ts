import { Component } from "@angular/core";

import { ComponentRootBase } from "../core";
 
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent extends ComponentRootBase {

    constructor() {
        super({});

        this.__.ngAfterViewInit = () => {
            this.setJsPlugin();
         };
    }

    setJsPlugin(){
        this.$('.styled').uniform();
    }
}
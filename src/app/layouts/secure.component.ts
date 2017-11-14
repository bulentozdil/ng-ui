
import { Component,OnInit } from "@angular/core";

import { App } from "../core/bindings/app";

@Component({
    selector:'app-layout-secure',
    templateUrl:'./secure.component.html'
})
export class SecureComponent implements OnInit{
   
    ngOnInit(){
        App();
    }
}
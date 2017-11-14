import { ErrorHandler,NgModule } from "@angular/core";

export class CustomErrorHandler implements ErrorHandler {

    constructor(private rethrowError?: boolean) { }

    handleError(error: any): void {
        if(this.rethrowError){
            console.log(error);
        } 
    }
}

@NgModule({
    providers:[
        {
            provide: ErrorHandler,
            useClass: CustomErrorHandler
          }
    ]
})
export class CustomErrorModule{

}
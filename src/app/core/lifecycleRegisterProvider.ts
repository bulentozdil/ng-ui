
import { SimpleChanges } from "@angular/core";

export interface ComponentLifecycleRegisterProvider {
    /**
     * ngOnInit 
     */
    ngOnInit: () => void;
    /**
     * ngAfterViewInit
     */
    ngAfterViewInit?: () => void;
}

export interface DirectiveLifecycleRegisterProvider {
    /**
     * ngOnChanges  
     */
    ngOnChanges: (changes?: SimpleChanges) => void;
    /**
    * ngOnInit 
    */
    ngOnInit: () => void;
    /**
    * ngDoCheck 
    */
    ngDoCheck: () => void;
}
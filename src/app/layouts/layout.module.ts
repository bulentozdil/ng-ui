/**
 * System Modules
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SecureComponent } from "./secure.component";
import { PublicComponent } from "./public.component";

import { NavbarComponent, SidebarComponent } from "./shared";

@NgModule({
    declarations: [
        SecureComponent,
        PublicComponent,
        NavbarComponent,
        SidebarComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        CommonModule
    ],
    exports: [
        SecureComponent,
        PublicComponent,
        NavbarComponent,
        SidebarComponent
    ],
    providers: [

    ]
})
export class LayoutModule { }
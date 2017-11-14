import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

/**
 * Modules
 */
import { APP_ROUTING_MODULE } from "./app.route";
import { LayoutModule } from "./layouts/layout.module";
import { CustomErrorModule } from './core/customErrorHandler';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./auth/login.component";

/**
 * Providers
 */
import { CORE_PROVIDERS } from "./core/coreProviders";


/**
 * Interceptors
 */
import { AuthInterceptor } from "./core/authInterceptor";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    LayoutModule,
    APP_ROUTING_MODULE
  ],
  providers: [
    CORE_PROVIDERS,
    CustomErrorModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

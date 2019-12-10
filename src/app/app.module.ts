import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { httpInterceptorProviders } from './http-interceptors';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}

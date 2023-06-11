import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {CommonModule, registerLocaleData} from "@angular/common";
import localePT from '@angular/common/locales/pt';
import {PaginaInicialModule} from "./components/pagina-inicial/pagina-inicial.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PagesModule} from "./components/pages.module";
import {SidebarModule} from "primeng/sidebar";


registerLocaleData(localePT);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PaginaInicialModule,
    PagesModule,
    SidebarModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

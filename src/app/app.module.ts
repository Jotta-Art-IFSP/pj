import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {SolicitacaoModule} from "./solicitacao/solicitacao.module";
import {CardModule} from "primeng/card";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {LoginModule} from "./login/login.module";
import {registerLocaleData} from "@angular/common";
import localePT from '@angular/common/locales/pt';
import {StepsModule} from "primeng/steps";
import {ToastModule} from "primeng/toast";
import {StatusModule} from "./status/status.module";


registerLocaleData(localePT);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    SolicitacaoModule,
    CardModule,
    ReactiveFormsModule,
    ButtonModule,
    LoginModule,
    StepsModule,
    ToastModule,
    StatusModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

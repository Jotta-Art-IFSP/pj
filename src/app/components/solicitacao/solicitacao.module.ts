import { NgModule } from '@angular/core';
import {SolicitacaoComponent} from "./component/solicitacao.component";
import {CommonModule} from "@angular/common";
import {SolicitacaoRoutingModule} from "./solicitacao-routing.module";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DialogModule} from "primeng/dialog";
import {CustomDatePipe} from "./custom.datepipe";
import {DropdownModule} from "primeng/dropdown";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [SolicitacaoComponent, CustomDatePipe],
  imports: [CommonModule, BrowserAnimationsModule, SolicitacaoRoutingModule, CalendarModule, FormsModule, DialogModule, DropdownModule, ToastModule],
  exports: [SolicitacaoComponent, CustomDatePipe],
})
export class SolicitacaoModule {}


import {NgModule} from '@angular/core';
import {SolicitacaoComponent} from "./component/solicitacao.component";
import {SolicitacaoRoutingModule} from "./solicitacao-routing.module";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {CustomDatePipe} from "./custom.datepipe";
import {DropdownModule} from "primeng/dropdown";
import {ToastModule} from "primeng/toast";
import {SidebarModule} from "primeng/sidebar";
import {NgIf} from "@angular/common";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [SolicitacaoComponent, CustomDatePipe],
  imports: [SolicitacaoRoutingModule, CalendarModule, FormsModule, DialogModule, DropdownModule, ToastModule, SidebarModule, NgIf, ButtonModule],
  exports: [SolicitacaoComponent, CustomDatePipe],
})
export class SolicitacaoModule {}


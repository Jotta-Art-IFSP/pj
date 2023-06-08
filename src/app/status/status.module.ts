import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {StatusRoutingModule} from "./status-routing.module";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {ToastModule} from "primeng/toast";
import {StatusComponent} from "./component/status.component";
import {StepsModule} from "primeng/steps";
import {AppModule} from "../app.module";

@NgModule({
  declarations: [StatusComponent],
  imports: [CommonModule, BrowserAnimationsModule, StatusRoutingModule, CalendarModule, FormsModule, DialogModule, DropdownModule, ToastModule, StepsModule],
  exports: [StatusComponent],
})
export class StatusModule {
}


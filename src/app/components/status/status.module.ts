import {NgModule} from '@angular/core';
import {StatusRoutingModule} from "./status-routing.module";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {ToastModule} from "primeng/toast";
import {StatusComponent} from "./component/status.component";
import {StepsModule} from "primeng/steps";
import {SidebarModule} from "primeng/sidebar";
import {NgClass} from "@angular/common";
import {HeaderModule} from "../header/header.module";

@NgModule({
  declarations: [StatusComponent],
    imports: [StatusRoutingModule, CalendarModule, FormsModule, DialogModule, DropdownModule, ToastModule, StepsModule, SidebarModule, NgClass, HeaderModule],
  exports: [StatusComponent],
})
export class StatusModule {
}


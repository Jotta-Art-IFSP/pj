import {NgModule} from '@angular/core';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "primeng/api";
import {ServicosRoutingModule} from "./servicos-routing.module";
import {ServicosComponent} from "./component/servicos.component";
import {HeaderModule} from "../header/header.module";

@NgModule({
  declarations: [ServicosComponent],
    imports: [SidebarModule, ButtonModule, SharedModule, ServicosRoutingModule, HeaderModule],
  exports: [ServicosComponent],
})
export class ServicosModule {}


import {NgModule} from '@angular/core';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "primeng/api";
import {ServicosRoutingModule} from "./servicos-routing.module";
import {ServicosComponent} from "./component/servicos.component";

@NgModule({
  declarations: [ServicosComponent],
  imports: [SidebarModule, ButtonModule, SharedModule, ServicosRoutingModule],
  exports: [ServicosComponent],
})
export class ServicosModule {}


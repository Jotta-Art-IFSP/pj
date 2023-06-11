import {NgModule} from '@angular/core';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "primeng/api";
import {ServicosRoutingModule} from "./servicos-routing.module";
import {ServicosComponent} from "./component/servicos.component";
import {HeaderModule} from "../header/header.module";
import {FooterModule} from "../footer/footer.module";

@NgModule({
  declarations: [ServicosComponent],
  imports: [SidebarModule, ButtonModule, SharedModule, ServicosRoutingModule, HeaderModule, FooterModule],
  exports: [ServicosComponent],
})
export class ServicosModule {}


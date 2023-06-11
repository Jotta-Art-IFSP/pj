import {NgModule} from '@angular/core';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "primeng/api";
import {SobreRoutingModule} from "./sobre-routing.module";
import {SobreComponent} from "./component/sobre.component";
import {HeaderModule} from "../header/header.module";
import {FooterModule} from "../footer/footer.module";

@NgModule({
  declarations: [SobreComponent],
  imports: [SidebarModule, ButtonModule, SharedModule, SobreRoutingModule, HeaderModule, FooterModule],
  exports: [SobreComponent],
})
export class SobreModule {}


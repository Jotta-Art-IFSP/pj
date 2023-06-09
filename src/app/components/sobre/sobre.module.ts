import {NgModule} from '@angular/core';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "primeng/api";
import {SobreRoutingModule} from "./sobre-routing.module";
import {SobreComponent} from "./component/sobre.component";

@NgModule({
  declarations: [SobreComponent],
  imports: [SidebarModule, ButtonModule, SharedModule, SobreRoutingModule],
  exports: [SobreComponent],
})
export class SobreModule {}


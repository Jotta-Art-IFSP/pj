import {NgModule} from '@angular/core';
import {PaginaInicialComponent} from "./pagina-inicial.component";
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "primeng/api";
import {PaginaInicialRoutingModule} from "./pagina-inicial-routing.module";

@NgModule({
  declarations: [PaginaInicialComponent],
  imports: [SidebarModule, ButtonModule, SharedModule, PaginaInicialRoutingModule],
  exports: [PaginaInicialComponent],
})
export class PaginaInicialModule {}


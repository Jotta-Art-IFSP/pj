import {NgModule} from '@angular/core';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "primeng/api";
import {ContatoComponent} from "./component/contato.component";
import {ContatoRoutingModule} from "./contato-routing.module";
import {HeaderModule} from "../header/header.module";

@NgModule({
  declarations: [ContatoComponent],
  imports: [SidebarModule, ButtonModule, SharedModule, ContatoRoutingModule, HeaderModule],
  exports: [ContatoComponent],
})
export class ContatoModule {}


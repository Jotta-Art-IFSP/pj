import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PaginaInicialComponent} from "./pagina-inicial.component";
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "primeng/api";

@NgModule({
  declarations: [PaginaInicialComponent],
  imports: [CommonModule, BrowserAnimationsModule, SidebarModule, ButtonModule, SharedModule],
  exports: [PaginaInicialComponent],
})
export class PaginaInicialModule {}


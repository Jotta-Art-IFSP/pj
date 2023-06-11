import {NgModule} from "@angular/core";
import {SidebarModule} from "primeng/sidebar";
import {RouterLink} from "@angular/router";
import {SharedModule} from "primeng/api";
import {NgClass} from "@angular/common";
import {FooterComponent} from "./component/footer.component";

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    SidebarModule,
    RouterLink,
    SharedModule,
    NgClass
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {

}

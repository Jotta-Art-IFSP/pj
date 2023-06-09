import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ServicosComponent} from "./component/servicos.component";

const routes: Routes = [{path: '', component: ServicosComponent}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class ServicosRoutingModule {
}

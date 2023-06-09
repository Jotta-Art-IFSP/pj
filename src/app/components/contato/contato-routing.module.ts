import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ContatoComponent} from "./component/contato.component";

const routes: Routes = [{path: '', component: ContatoComponent}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class ContatoRoutingModule {
}

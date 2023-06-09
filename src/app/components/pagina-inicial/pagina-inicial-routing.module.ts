import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PaginaInicialComponent} from "./component/pagina-inicial.component";

const routes: Routes = [{path: '', component: PaginaInicialComponent}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class PaginaInicialRoutingModule {
}

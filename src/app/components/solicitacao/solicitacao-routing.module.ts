import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SolicitacaoComponent} from "./component/solicitacao.component";

const routes: Routes = [
  {path: 'solicitacao', component: SolicitacaoComponent},
];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class SolicitacaoRoutingModule {
}

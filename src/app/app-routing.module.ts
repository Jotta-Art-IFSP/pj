import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {PaginaInicialComponent} from "./pagina-inicial/pagina-inicial.component";

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  // outras rotas do seu aplicativo
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

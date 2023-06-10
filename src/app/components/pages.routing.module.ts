import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: 'pagina-inicial', loadChildren: () =>
            import('./pagina-inicial/pagina-inicial.module').then(mod => mod.PaginaInicialModule)
    },
    {
        path: 'login', loadChildren: () =>
            import('./login/login.module').then(mod => mod.LoginModule)
    },
    {
        path: 'sobre', loadChildren: () =>
            import('./sobre/sobre.module').then(mod => mod.SobreModule)
    },
    {
        path: 'servicos', loadChildren: () =>
            import('./servicos/servicos.module').then(mod => mod.ServicosModule)
    },
    {
        path: 'contato', loadChildren: () =>
            import('./contato/contato.module').then(mod => mod.ContatoModule)
    },
    {
        path: 'status', loadChildren: () =>
            import('./status/status.module').then(mod => mod.StatusModule)
    },
    {
        path: 'solicitacao', loadChildren: () =>
            import('./solicitacao/solicitacao.module').then(mod => mod.SolicitacaoModule)
    }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class PagesRoutingModule { }

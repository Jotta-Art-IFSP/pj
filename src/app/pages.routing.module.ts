import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: 'login', loadChildren: () =>
            import('./login/login.module').then(mod => mod.LoginModule)
    },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class PagesRoutingModule { }

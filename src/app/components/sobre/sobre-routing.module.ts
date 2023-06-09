import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SobreComponent} from "./component/sobre.component";

const routes: Routes = [{path: '', component: SobreComponent}];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class SobreRoutingModule {
}

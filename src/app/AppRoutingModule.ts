import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoComponent } from './logo/logo.component' ;
import { CadastroComponent } from './cadastro/cadastro.component' ;
import { ErroComponent } from './erro/erro.component';
import { ListaComponent } from './lista/lista.component';
import { MasterdetailComponent } from './masterdetail/masterdetail.component';

const routes : Routes = [
    { path: "", component: LogoComponent},
    { path: "lista", component: ListaComponent},
    { path: "cadastro", component: CadastroComponent},
    { path: "masterdetail", component: MasterdetailComponent},
    { path: "**", component: ErroComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

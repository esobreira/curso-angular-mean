import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './AppRoutingModule';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.compontent' ;
import { LogoComponent } from './logo/logo.component' ;
import { CadastroComponent } from './cadastro/cadastro.component' ;
import { ErroComponent } from './erro/erro.component';
import { ListaComponent } from './lista/lista.component';
import { CursosService } from './services/cursos.services';
import { MasterdetailComponent } from './masterdetail/masterdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MenuComponent,
    CadastroComponent,
    ErroComponent,
    ListaComponent,
    MasterdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    CursosService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

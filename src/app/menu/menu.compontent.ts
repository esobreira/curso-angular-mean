import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'menu', 
    templateUrl: 'views/menu.component.html',
})
export class MenuComponent {
    titulo_home: string = "Home";
    titulo_cadastro: string = "Cadastro";
    titulo_loja: string = "Loja";
    titulo_masterdetail = "Master/Detail";
}
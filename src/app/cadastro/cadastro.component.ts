import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.cursos'

@Component({
    moduleId: module.id,
    templateUrl: 'views/cadastro.component.html'
//     template: `
//                 <div class="container margem">
//                     <h1>CADASTRO</h1>
//                     <h3>Código: {{curso.codigo}}</h3>
//                     <h3>Descrição: {{curso.descricao}}</h3>
//                     <h3>Carga: {{curso.ch}}</h3>
//                 </div>
// `
})
export class CadastroComponent {
    public curso : ICurso = {
        codigo: 10,
        descricao: "Node 35",
        ch: 24
    };
}

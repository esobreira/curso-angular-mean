import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.cursos'
import { CursosService } from '../services/cursos.services'

@Component({
  moduleId: module.id,
  templateUrl: './lista.component.html',
})
export class ListaComponent {

  public listaCursos: ICurso[];
  constructor(cursosService: CursosService) {
    this.listaCursos = cursosService.getListaCursos();
  }

  // public listaCursos: ICurso[] = [
  //   { codigo: 11, descricao: "ASP.NET", ch: 40},
  //   { codigo: 12, descricao: "Java Programmer", ch: 40},
  //   { codigo: 13, descricao: "C# Fundadmentos", ch: 60},
  //   { codigo: 14, descricao: "Lógica de Programação", ch: 24},
  // ]
}

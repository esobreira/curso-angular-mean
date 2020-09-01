import { Component, OnInit } from '@angular/core';
import { CursosService } from "../services/cursos.services";
import { ICurso } from 'app/classes/interface.cursos';

@Component({
  moduleId: module.id,
  templateUrl: 'views/masterdetail.component.html'
  // styleUrls: ['./masterdetail.component.css']
})
export class MasterdetailComponent implements OnInit{
  
  private curso : ICurso = {
      codigo: 0,
      descricao: "",
      ch: 0
  }

  private novoCurso : ICurso;

  public cursoSelecionado : ICurso;
  
  public selecionar(item: ICurso): void {
    this.cursoSelecionado = item;
  }

  public listaCursos: ICurso[];
  constructor(cursosService: CursosService) {
    this.listaCursos = cursosService.getListaCursos();
  }

  ngOnInit(): void {
    this.cursoSelecionado = this.curso;
  }

  public novo(): void {
    this.novoCurso = {
      codigo: 0,
      descricao: "",
      ch: 0
    };
    this.cursoSelecionado = this.novoCurso;
  }

  public incluir(curso: ICurso) : void {
    this.listaCursos.push(curso);
    alert('Curso incluído com sucesso!');
  }

}

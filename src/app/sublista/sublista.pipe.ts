import { Pipe, PipeTransform } from '@angular/core';
import { ICurso } from '../classes/interface.cursos'

@Pipe({
  name: 'sublista'
})
export class SublistaComponent implements PipeTransform {
  transform(cursos: ICurso[], input: string) : ICurso[] {
    return cursos.filter(curso => curso.descricao.toLowerCase().includes(input.toLowerCase()));
  }
}

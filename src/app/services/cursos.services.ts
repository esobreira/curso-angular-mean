import { Injectable } from '@angular/core';
import { ICurso } from '../classes/interface.cursos'

@Injectable()
export class CursosService {
    public getListaCursos(): ICurso[] {
        return [
            { codigo: 11, descricao: "ASP.NET", ch: 40},
            { codigo: 12, descricao: "Java Programmer", ch: 40},
            { codigo: 13, descricao: "C# Fundadmentos", ch: 60},
            { codigo: 14, descricao: "Lógica de Programação", ch: 24},
        ];
    }
}
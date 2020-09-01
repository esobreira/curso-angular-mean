class Aluno extends Pessoa {
    private curso: string;

    public setCurso(curso: string): void{
        this.curso = curso;
    }

    public getCurso() : string {
        return this.curso;
    }

    constructor(curso: string, nome: string, idade: number) {
        super(nome, idade);
    }
}
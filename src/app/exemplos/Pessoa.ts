class Pessoa {
    static total: number = 0;
    
    constructor(protected nome: string, protected idade: number) {
        Pessoa.total += 1;
    }
}
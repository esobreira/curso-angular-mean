class Teste {

    public testar(): void {

        let aluno = new Aluno("javascript", "Eberton", 38);
        aluno.setCurso("Angular 4");

        let ponto = new Ponto();
        ponto.x = 10;
        ponto.y = 10;

        alert(ponto.IsQuadrado() ? "É um quadrado" : "Não é um quadrado");

    }

}
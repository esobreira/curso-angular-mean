class Ponto implements IPonto {
    x: number;
    y: number;
    
    IsQuadrado(): boolean {
        return this.x == this.y;
    }
}
function calculoArea(forma, dimensao){
    switch (forma){
        case "retangulo":
            return dimensao.largura * dimensao.altura
        case "circulo":
            return 3.14 * (dimensao.raio * dimensao.raio)
        case "triangulo":
            return dimensao.largura * dimensao.altura / 2
        default:
            return "Formato não suportado"
    }
}

module.exports = calculoArea
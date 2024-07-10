const calculoArea = require("./calculoArea");

test("testar retangulo", () => {
    saida = 10;
    expect(calculoArea("retangulo", {largura: 5, altura: 2})).toEqual(saida)
})

test("testar triangulo", () => {
    saida = 5;
    expect(calculoArea("triangulo", {largura: 5, altura: 2})).toEqual(saida)
})

test("testar circulo", () => {
    saida = 12.56;
    expect(calculoArea("circulo", {raio:  2})).toEqual(saida)
})

test("testar forma inválida ", () => {
    saida = "Formato não suportado";
    expect(calculoArea("losango", {largura: 5, altura: 2})).toEqual(saida)
})

test("nenhuma forma", () => {
    saida = "Formato não suportado";
    expect(calculoArea()).toEqual(saida)
})

test("variáveis faltando", () => {
    saida = "Formato não suportado";
    expect(calculoArea({largura: 5, altura: 2})).toEqual(saida)
})

test("dimensão faltando", () => {
    saida = NaN;
    expect(calculoArea('circulo', { altura: 2})).toEqual(saida)
})

test("dimensão invalida", () => {
    saida = NaN;
    expect(calculoArea('circulo', { altura: "dois"})).toEqual(saida)
})
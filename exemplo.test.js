const removeDuplicate = require('./exemplo');

test('remove itens duplicados' , () => {
    const entrada = [1,2,2,3,4,4,5]
    const saida = [1,2,3,4,5]
    expect(removeDuplicate(entrada)).toEqual(saida)
}
);
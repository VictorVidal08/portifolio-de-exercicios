

const sum = require('./sum.js');

describe('teste retorno se sum retorna o somatório dos argumentos.', () => {
    it('A função recebe 4, 5 e retorna 9', () => {
        expect(9).toEqual(sum(4, 5));
    });
    it('A função recebe 0, 0 e retorna 0', () => {
        expect(0).toEqual(sum(0, 0));
    });
    it('Deve disparar erro quando parametros são string', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    });
});



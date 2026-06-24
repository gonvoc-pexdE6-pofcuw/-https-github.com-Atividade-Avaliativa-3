const _ = require('lodash');

describe('Testes do Lodash', () => {

    describe('_.capitalize', () => {

        test('Deve capitalizar a primeira letra', () => {
            expect(_.capitalize('javascript')).toBe('Javascript');
        });

        test('Deve converter o restante para minúsculo', () => {
            expect(_.capitalize('LODASH')).toBe('Lodash');
        });

        test('Deve retornar string vazia quando receber string vazia', () => {
            expect(_.capitalize('')).toBe('');
        });

    });

    describe('_.filter', () => {

        const usuarios = [
            { nome: 'Ana', idade: 20 },
            { nome: 'Carlos', idade: 30 },
            { nome: 'João', idade: 20 }
        ];

        test('Deve filtrar usuários com idade igual a 20', () => {
            const resultado = _.filter(usuarios, { idade: 20 });

            expect(resultado).toEqual([
                { nome: 'Ana', idade: 20 },
                { nome: 'João', idade: 20 }
            ]);
        });

        test('Deve retornar array vazio quando não encontrar resultados', () => {
            expect(_.filter(usuarios, { idade: 50 })).toEqual([]);
        });

    });

    describe('_.chunk', () => {

        test('Deve dividir o array em grupos de tamanho 2', () => {
            expect(_.chunk([1, 2, 3, 4], 2))
                .toEqual([[1, 2], [3, 4]]);
        });

        test('Deve retornar array vazio para entrada vazia', () => {
            expect(_.chunk([], 2)).toEqual([]);
        });

    });

    describe('_.uniq', () => {

        test('Deve remover valores duplicados', () => {
            expect(_.uniq([1, 1, 2, 2, 3]))
                .toEqual([1, 2, 3]);
        });

    });

    describe('_.compact', () => {

        test('Deve remover valores falsy do array', () => {
            expect(_.compact([0, 1, false, 2, '', 3]))
                .toEqual([1, 2, 3]);
        });

    });

    describe('_.difference', () => {

        test('Deve retornar os valores que não estão no array de comparação', () => {
            expect(_.difference([1, 2, 3, 4], [2, 4]))
                .toEqual([1, 3]);
        });

    });

    describe('_.flatten', () => {

        test('Deve achatar um array aninhado em um nível', () => {
            expect(_.flatten([1, [2, [3, [4]], 5]]))
                .toEqual([1, 2, [3, [4]], 5]);
        });

    });

    describe('_.groupBy', () => {

        test('Deve agrupar elementos por uma propriedade', () => {
            const resultado = _.groupBy(['one', 'two', 'three'], 'length');

            expect(resultado).toEqual({
                3: ['one', 'two'],
                5: ['three']
            });
        });

    });

});
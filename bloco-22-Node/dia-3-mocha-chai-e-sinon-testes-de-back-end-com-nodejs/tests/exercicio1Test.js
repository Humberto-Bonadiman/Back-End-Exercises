const { expect } = require('chai');

const exercicio1 = require('../exercicios/exercicio1');

describe('Executa a função exercicio1', () => {
  describe('quando o número for maior que 0', () => {
    describe('a resposta', () => {
      const numero = exercicio1(4);

      it('é uma string', () => {
        expect(numero).to.be.a('string');
      });

      it('retorna "positivo"', () => {
        const numero = exercicio1(4);
    
        expect(numero).to.be.equals('positivo');
      });
    })
  })

  describe('Quando o número for menor que 0', () => {
    describe('a resposta', () => {
      const numero = exercicio1(-10);

      it('é uma string', () => {
        expect(numero).to.be.a('string');
      });

      it('retorna "negativo"', () => {
    
        expect(numero).to.be.equals('negativo');
      })
    })
  })

  describe('Quando o número for igual a 0', () => {
    describe('a resposta', () => {
      const numero = exercicio1(0);

      it('é uma string', () => {
        expect(numero).to.be.a('string');
      });

      it('retorna "neutro"', () => {
  
        expect(numero).to.be.equals('neutro');
      })
    })
  })

  describe('Quando não é um número', () => {
    describe('a resposta', () => {
      const numero = exercicio1('10');

      it('é uma string', () => {
        expect(numero).to.be.a('string');
      });

      it('retorna "o valor deve ser um número"', () => {
  
        expect(numero).to.be.equals('o valor deve ser um número');
      })
    })
  })
});

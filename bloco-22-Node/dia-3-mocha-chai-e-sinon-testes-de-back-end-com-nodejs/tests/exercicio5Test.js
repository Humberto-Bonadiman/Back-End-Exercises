const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const exercicio5 = require('../exercicios/exercicio4');

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync');
    });

    after(() => {
      fs.writeFileSync.restore();
    });

    describe('a resposta', () => {
      it('é uma string', () => {
        const resposta = exercicio5('arquivo.txt', '#vqv conteúdo');

        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        const resposta = exercicio5('arquivo.txt', '#vqv conteúdo');

        expect(resposta).to.be.equals('ok');
      });
    });
  });
});
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se o argumento count retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Verifica se o argumento names retorna um array que possui Jefferson', () => {
    expect(handlerElephants('names')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Verifica se o argumento averageAge retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Verifica se o argumento undefined retorna undefined', () => {
    expect(handlerElephants('undefined')).toBe(undefined);
  });

  it('Verifica se retorna frase de erro se o argumento nao for string', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica se retorna NW se o argumento for location', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Verifica se retorna um um array de dias da semana que não contém Monday se o argumento for availability', () => {
    expect(handlerElephants('availability')).toBe(['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
  });

  it('Verifica se retorna undefined se nao for passado argumento', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('Verifica se retorna string de parametro invalido se o argumento for um objeto vazio({})', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica se retorna null se o argumento for uma string que nao contempla a funcionalidade', () => {
    expect(handlerElephants('Botafogo Futebol e Regatas')).toBe(null);
  });
});

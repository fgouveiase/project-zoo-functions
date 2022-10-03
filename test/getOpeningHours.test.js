const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se nao passado parametro a funcao retorna objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Verifica se o argumento Monday e 09:00-AM retorna uma string zoologico fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  it('Verifica se o argumento Tuesday e 09:00-AM retorna uma string zoologico aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('Verifica se o argumento Wednesday e 09:00-AM retorna uma string zoologico fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  it('Verifica se o argumento Thu e 09:00-AM  retorna excecao The day must be valid. Example: Monday', () => {
    expect(getOpeningHours('Thu', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });

  it('Verifica se o argumento Friday e 09:00-ZM retorna uma excecao The abbreviation must be', () => {
    expect(getOpeningHours('Friday', '09:00-zM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Verifica se o argumento Saturday e C9:00-AM retorna uma excecao The hour should represent a number', () => {
    expect(getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  it('Verifica se o argumento Sunday e 09:c0-AM retorna uma excecao The minutes should represent a number', () => {
    expect(getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });

  it('Verifica se o argumento Monday e 13:00-AM retorna uma excecao The hour must be between 0 and 12', () => {
    expect(getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Verifica se o argumento Tuesday e 09:60-AM retorna uma excecao The minutes must be between 0 and 59', () => {
    expect(getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});

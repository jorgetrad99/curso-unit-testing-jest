const randomStrings = require('../index');

describe('Probar Funcionalidades de randomString', () => {
  test('Probar la Funcionalidad', () => {
    expect(typeof randomStrings()).toBe('string');
  });
  test('Comprobar que no existe una Ciudad', () => {
    expect(randomStrings()).not.toMatch(/Córdoba/);
  });
});

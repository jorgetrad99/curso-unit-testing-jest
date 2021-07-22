const text = 'Hola Mundo';

test('Debe contener Texto', () => {
  expect(text).toMatch(/Mundo/);
});

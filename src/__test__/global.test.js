const text = 'Hola Mundo';
const fruits = ['manzana', 'melón', 'banana'];

test('Debe contener Texto', () => {
  expect(text).toMatch(/Mundo/);
});

test('¿Tenemos una banana?', () => {
  expect(fruits).toContain('banana');
});

test('Mayor que', () => {
  expect(10).toBeGreaterThan(9);
});

test('Verdadero', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
};

test('Probar un Callback', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH');
  });
});

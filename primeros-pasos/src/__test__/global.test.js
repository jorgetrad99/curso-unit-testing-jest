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

const revertString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'));
    }
    resolve(str.split('').reverse().join(''));
  });
};

test('Probar una promesa', () => {
  return revertString2('Hola').then((string) => {
    expect(string).toBe('aloH');
  });
});

test('Probar async/await', async () => {
  const string = await revertString2('Hola');
  expect(string).toBe('aloH');
});

/* afterEach(() => {
  console.log('Después de cada prueba');
});

afterAll(() => {
  console.log('Después de todas las pruebas');
});

beforeEach(() => {
  console.log('Antes de cada prueba');
});

beforeAll(() => {
  console.log('Antes de todas las pruebas');
});
 */

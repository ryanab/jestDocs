import something from './something';

test(
  'returns "che!"',
  () => {
    expect(something(15)).toBe('che!');
  },
  {
    aloja: true
  }
);

test(
  'returns "blah"',
  () => {
    expect(something(7)).toBe('blah');
  },
  {
    something: true
  }
);

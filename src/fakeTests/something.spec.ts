import something from './something';
test(
  'returns "che!"',
  () => {
    expect(something(15)).toBe('che!');
  },
  {
    metaData: {
      fileName: "something",
      tags: ['code', 'stuff', 'useless']
    },
    aloja: true
  }
);

test(
  'returns "blah"',
  () => {
    expect(something(7)).toBe('blah');
  },
  {
    metaData: {
      fileName: "something",
      tags: ['more', 'stuff', 'here']
    },
    something: true
  }
);

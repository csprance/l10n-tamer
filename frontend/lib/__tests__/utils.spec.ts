import { mergeDefined } from '../utils';

describe('lib/utils', () => {
  it('mergeDefined', () => {
    type TestData = { foo: any; baz: any };
    const data = { foo: 'bar', baz: 'boo' };
    const merged = mergeDefined<TestData>(data, { baz: 'not-boo' } as any);
    expect(merged).toStrictEqual({ foo: 'bar', baz: 'not-boo' });
  });
});

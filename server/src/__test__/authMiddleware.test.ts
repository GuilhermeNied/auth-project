function sum(a: number, b: number): number {
  return a + b;
}

describe('Auth middleware test', () => {
  it('sum two numbers', () => {
    // GIVEN
    const num1 = 2;
    const num2 = 3;
    // WHEN
    const result = sum(num1, num2);

    // THEN
    expect(result).toBe(5);
  });
});

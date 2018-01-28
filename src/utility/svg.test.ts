import * as utility from './svg';

describe('utility', () => {
  it('toPath', () => {
    const pts = [1, 2, 3, 4];

    const path = utility.toPath(pts);
    expect(path).toBe('M1 2 L3 4 Z');
  });

  it('toPath + offset', () => {
    const pts = [1, 2, 3, 4];

    const path = utility.toPath(pts, 10);
    expect(path).toBe('M11 2 L13 4 Z');
  });

});

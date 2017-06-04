const app = require('./');

describe('src:index', () => {
  it('returns `Hello World`', () => {
    expect(app()).toBe('Hello World');
  });
});

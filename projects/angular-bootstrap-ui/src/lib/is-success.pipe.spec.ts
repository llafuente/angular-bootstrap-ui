import { IsSuccessPipe } from './is-success.pipe';

describe('IsSuccessPipe', () => {
  it('create an instance', () => {
    const pipe = new IsSuccessPipe();
    expect(pipe).toBeTruthy();
  });
});

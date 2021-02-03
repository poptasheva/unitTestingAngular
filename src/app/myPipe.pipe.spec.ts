import {MyPipePipe} from './myPipe.pipe';

describe('MyPipePipe', () => {
  const pipe = new MyPipePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should display the pow function', () => {
    let result;
    result = pipe.transform(2, 2);
    expect(result).toBe(4);
    result = pipe.transform(3, 3);
    expect(result).toEqual(27);
  });
});

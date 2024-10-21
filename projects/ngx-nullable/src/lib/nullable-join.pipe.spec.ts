import { NullableJoinPipe } from './nullable-join.pipe';

describe('NullableJoinPipe', () => {
  it('create an instance', () => {
    const pipe = new NullableJoinPipe();
    expect(pipe).toBeTruthy();
  });
});

import executeInstruction from '../instructionExecuter';

describe('executeInstruction', () => {
  it('should return empty array when given empty', () => {
    expect(executeInstruction('')).toHaveLength(0);
  });
});

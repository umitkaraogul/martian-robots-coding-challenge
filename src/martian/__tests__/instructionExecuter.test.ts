import executeInstruction from '../InstructionExecuter';

describe('executeInstruction', () => {
  it('should return empty array when given empty', () => {
    expect(executeInstruction('')).toHaveLength(0);
  });
});

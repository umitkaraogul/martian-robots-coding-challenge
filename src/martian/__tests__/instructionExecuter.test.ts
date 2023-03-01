import executeInstruction from '../instructionExecuter';
describe('executeInstruction', () => {
  it('should return empty array when given empty', () => {
    expect(executeInstruction('')).toHaveLength(0);
  });
  it('should throw an error when given exceed the max character limit', () => {
    const SAMPLE_INSTRUCTION = `5 3
    1 1 E 
    RFRFRFRF

    3 2 N 
    FRRFLLFFRRFLL
    
    0 3 W 
    LLFFFLFLFL
    
    1 1 E 
    RFRFRFRF

    3 2 N 
    FRRFLLFFRRFLL
    
    0 3 W 
    LLFFFLFLFL    
    `;
    expect(() => executeInstruction(SAMPLE_INSTRUCTION)).toThrow();
  });
});

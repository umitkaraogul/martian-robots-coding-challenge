import Robot from '../Robot';
import { Grid, Instruction } from '../types';

describe('Robot', () => {
  const grid: Grid = {
    width: 5,
    height: 3
  };

  it('should initialize correctly', () => {
    const robot = new Robot(
      {
        x: 1,
        y: 1
      },
      'E',
      grid
    );

    expect(robot.coordinate.x).toEqual(1);
    expect(robot.coordinate.y).toEqual(1);
    expect(robot.orientation).toEqual('E');
  });
  it('should turn left correctly', () => {
    const robot = new Robot(
      {
        x: 1,
        y: 1
      },
      'N',
      grid
    );
    robot.move(['L']);
    expect(robot.coordinate.x).toEqual(1);
    expect(robot.coordinate.y).toEqual(1);
    expect(robot.orientation).toEqual('W');
  });
  it('should turn right correctly', () => {
    const robot = new Robot(
      {
        x: 1,
        y: 1
      },
      'N',
      grid
    );
    robot.move(['R']);
    expect(robot.coordinate.x).toEqual(1);
    expect(robot.coordinate.y).toEqual(1);
    expect(robot.orientation).toEqual('E');
  });

  it('should move forward correctly', () => {
    const robot = new Robot(
      {
        x: 1,
        y: 1
      },
      'N',
      grid
    );
    robot.move(['F']);
    expect(robot.coordinate.x).toEqual(1);
    expect(robot.coordinate.y).toEqual(2);
    expect(robot.orientation).toEqual('N');
  });
  describe('should lose when falls off the edge of the grid', () => {
    it('should print "3 3 N LOST" when given "3 2 N" and FRRFLLFFRRFLL', () => {
      const robot = new Robot(
        {
          x: 3,
          y: 2
        },
        'N',
        grid
      );
      const instructions = 'FRRFLLFFRRFLL'.split('') as Instruction[];
      robot.move(instructions);

      expect(robot.isLost).toBeTruthy();
      expect(robot.position).toBe('3 3 N LOST');
    });
    it('should print "3 3 N LOST" when given "0 3 W" and LLFFFLFLFL', () => {
      const robot = new Robot(
        {
          x: 0,
          y: 3
        },
        'W',
        grid
      );
      const instructions = 'LLFFFLFLFL'.split('') as Instruction[];
      robot.move(instructions);

      expect(robot.isLost).toBeTruthy();
      expect(robot.position).toBe('3 3 N LOST');
    });
  });
  describe('should move correctly with multiple instruction', () => {
    it('should move 1 1 E  when given RFRFRFRF', () => {
      const robot = new Robot(
        {
          x: 1,
          y: 1
        },
        'E',
        grid
      );
      const instructions = 'RFRFRFRF'.split('') as Instruction[];
      robot.move(instructions);

      expect(robot.position).toBe('1 1 E');
    });
    it('should move 2 2 N when given FRRFLLFRL', () => {
      const robot = new Robot(
        {
          x: 2,
          y: 2
        },
        'N',
        grid
      );
      const instructions = 'FRRFLLFRL'.split('') as Instruction[];
      robot.move(instructions);

      expect(robot.position).toBe('2 3 N');
    });
  });
});

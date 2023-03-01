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
    it('should print "3 3 N LOST"  when given FRRFLLFFRRFLL', () => {
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
  });
});

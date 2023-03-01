import { MAXIMUM_COORDINATE, MAXIMUM_INSTRUCTION } from './config';
import Robot from './Robot';
import { Coordinate, Grid, Instruction, Orientation } from './types';

const executeInstruction = (instruction: string): string[] => {
  //TODO: execute instruction and return final position of the robot
  const result: string[] = [];
  if (instruction) {
    const { grid, robotDetails } = parseInstruction(instruction);

    for (const { coordinate, orientation, instructions } of robotDetails) {
      const robot = new Robot(coordinate, orientation, grid);
      robot.move(instructions);
      result.push(robot.position);
    }
  }
  return result;
};

//TODO:
const parseInstruction = (instruction: string) => {
  if (instruction.length > MAXIMUM_INSTRUCTION) {
    throw new Error(
      `All instruction strings will be less than ${MAXIMUM_INSTRUCTION} characters in length.`
    );
  }
  //TODO:  Dummy data; get from parsed instruction
  const grid: Grid = {
    width: 5,
    height: 3
  };

  if ([grid.width, grid.height].some((value) => value > MAXIMUM_COORDINATE)) {
    throw new Error(
      `The maximum value for any coordinate is ${MAXIMUM_COORDINATE}`
    );
  }
  //TODO: Dummy data; get from parsed instruction
  const robotDetails: {
    coordinate: Coordinate;
    orientation: Orientation;
    instructions: Instruction[];
  }[] = [
    {
      coordinate: {
        x: 1,
        y: 1
      },
      orientation: 'E',
      instructions: 'RFRFRFRF'.split('') as Instruction[]
    },
    {
      coordinate: {
        x: 3,
        y: 2
      },
      orientation: 'N',
      instructions: 'FRRFLLFFRRFLL'.split('') as Instruction[]
    }
  ];
  return { grid, robotDetails };
};

export default executeInstruction;

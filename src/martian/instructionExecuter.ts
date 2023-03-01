import { MAXIMUM_COORDINATE, MAXIMUM_INSTRUCTION } from './config';
import Robot from './Robot';
import { Coordinate, Grid, Instruction, Orientation } from './types';

type RobotDetails = {
  coordinate: Coordinate;
  orientation: Orientation;
  instructions: Instruction[];
};

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

const parseInstruction = (instruction: string) => {
  if (instruction.length > MAXIMUM_INSTRUCTION) {
    throw new Error(
      `All instruction strings will be less than ${MAXIMUM_INSTRUCTION} characters in length.`
    );
  }

  //Get Grid info
  const commandLines = instruction.split('\n').filter((str) => str.trim());
  const [x, y] = commandLines[0].split(' ');
  const grid: Grid = {
    width: parseInt(x),
    height: parseInt(y)
  };

  if ([grid.width, grid.height].some((value) => value > MAXIMUM_COORDINATE)) {
    throw new Error(
      `The maximum value for any coordinate is ${MAXIMUM_COORDINATE}`
    );
  }

  //Get Robot Details
  const robotDetails: RobotDetails[] = [];
  for (let i = 1; i < commandLines.length; i += 2) {
    const [x, y, direction] = commandLines[i].split(' ');
    const coordinate: Coordinate = {
      x: parseInt(x),
      y: parseInt(y)
    };

    //TODO: It can be a util method.
    if (
      [coordinate.x, coordinate.y].some((value) => value > MAXIMUM_COORDINATE)
    ) {
      throw new Error(
        `The maximum value for any coordinate is ${MAXIMUM_COORDINATE}`
      );
    }

    const orientation = direction as Orientation;
    const instructions = commandLines[i + 1].split('') as Instruction[];

    robotDetails.push({
      coordinate,
      orientation,
      instructions
    });
  }

  return { grid, robotDetails };
};

export default executeInstruction;

import { Grid, Coordinate, Instruction, Orientation } from './types';
import { leftOrientationMap, rightOrientationMap } from './util/orientationMap';

export default class Robot {
  public coordinate: Coordinate;
  public orientation: Orientation;
  public isLost: boolean;
  private grid: Grid;
  constructor(coordinate: Coordinate, orientation: Orientation, grid: Grid) {
    this.coordinate = coordinate;
    this.orientation = orientation;
    this.grid = grid;
    this.isLost = false;
  }
  public move = (instructions: Instruction[]) => {
    for (const instruction of instructions) {
      this.executeInstruction(instruction);
      if (this.isLost) {
        break;
      }
    }
  };
  get position() {
    return `${this.coordinate.x} ${
      this.coordinate.y
    } ${this.orientation.toString()}${this.isLost ? ' LOST' : ''}`;
  }

  private executeInstruction = (instruction: Instruction) => {
    switch (instruction) {
      case 'L':
        this.turnLeft();
        break;
      case 'R':
        this.turnRight();
        break;
      case 'F':
        this.forward();
        break;
      default:
        break;
    }
    //Maybe can return output.
  };

  private turnLeft = () => {
    this.orientation = leftOrientationMap[this.orientation];
  };
  private turnRight = () => {
    this.orientation = rightOrientationMap[this.orientation];
  };
  private forward = () => {
    const isValid = this.moveValidate();
    if (!isValid) {
      this.isLost = true;
      return;
    }

    switch (this.orientation) {
      case 'N':
        this.coordinate.y += 1;
        break;
      case 'S':
        this.coordinate.y -= 1;
        break;
      case 'E':
        this.coordinate.x += 1;
        break;
      case 'W':
        this.coordinate.x -= 1;
        break;
      default:
        break;
    }
  };
  private moveValidate = () => {
    switch (this.orientation) {
      case 'N':
        return this.coordinate.y < this.grid.height;
      case 'S':
        return this.coordinate.y > 0;
      case 'E':
        return this.coordinate.x < this.grid.width;
      case 'W':
        return this.coordinate.x > 0;
      default:
        return true;
    }
  };
}

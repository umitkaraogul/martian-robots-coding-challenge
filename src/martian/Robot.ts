import { Grid, Coordinate, Instruction, Orientation } from './types';
import { leftOrientationMap, rightOrientationMap } from './util/orientationMap';

export default class Robot {
  public coordinate: Coordinate;
  public orientation: Orientation;
  private grid: Grid;
  constructor(coordinate: Coordinate, orientation: Orientation, grid: Grid) {
    this.coordinate = coordinate;
    this.orientation = orientation;
    this.grid = grid;
  }
  public move = (instructions: Instruction[]) => {
    for (const instruction of instructions) {
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
    }
  };
  get position() {
    return `${this.coordinate.x} ${
      this.coordinate.y
    } ${this.orientation.toString()}`;
  }

  private turnLeft = () => {
    this.orientation = leftOrientationMap[this.orientation];
  };
  private turnRight = () => {
    this.orientation = rightOrientationMap[this.orientation];
  };
  private forward = () => {
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
}

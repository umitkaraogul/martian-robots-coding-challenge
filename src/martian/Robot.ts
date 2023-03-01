import { Grid, Coordinate, Instruction, Orientation } from './types';

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
          //TODO: implement turn left
          break;
        case 'R':
          //TODO: implement turn right
          break;
        case 'F':
          //TODO: implement turn forward
          break;
        default:
          //TODO:Throw error
          break;
      }
    }
  };
}

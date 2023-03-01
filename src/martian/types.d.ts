export type Grid = {
  width: number;
  height: number;
};
export type Coordinate = {
  x: number;
  y: number;
};

export type Orientation = 'N' | 'S' | 'E' | 'W'; //north, south, east,west
export type Instruction = 'L' | 'R' | 'F';

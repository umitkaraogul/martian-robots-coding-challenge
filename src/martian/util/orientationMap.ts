import { Orientation } from '../types';

type OrientationMap = { [key in Orientation]: Orientation };

export const leftOrientationMap: OrientationMap = {
  N: 'W',
  S: 'E',
  E: 'N',
  W: 'S'
};
export const rightOrientationMap: OrientationMap = {
  N: 'E',
  S: 'W',
  E: 'S',
  W: 'N'
};

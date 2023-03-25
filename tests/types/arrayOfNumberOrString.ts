import {Vts} from '../../src/vts.js';

export const ArrayOfNumberOrStringSchema = Vts.array(Vts.or([
  Vts.string(),
  Vts.number()
]));

export const ArrayOfNumberOrStringData = [
  0,
  'String2'
];
import {Vts} from '../../src/vts.js';

export const ArrayOfStringSchema = Vts.array(Vts.string());

export const ArrayOfStringData = [
  'String1',
  'String2'
];
import {Vts} from '../../src/vts.js';

export const OrStringNullSchema = Vts.or([
  Vts.string(),
  Vts.null()
]);
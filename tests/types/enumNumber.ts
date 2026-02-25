import {Vts} from '../../src/vts.js';

enum EnumNumber {
  KEY1,
  KEY2
}

export const EnumNumberSchema = Vts.enum(EnumNumber);

export const EnumNumberData: unknown = EnumNumber.KEY1;
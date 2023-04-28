import {Vts} from '../../src/vts.js';

enum EnumNumber {
  KEY1 = 1,
  KEY2 = 2
}

export const EnumNumberSchema = Vts.enum(EnumNumber);

export const EnumNumberData = EnumNumber.KEY2;

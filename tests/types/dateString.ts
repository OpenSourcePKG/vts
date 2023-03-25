import {Vts} from '../../src/vts.js';

export const DateStringSchema = Vts.dateString();

export const DateStringData = JSON.parse(JSON.stringify(new Date()));
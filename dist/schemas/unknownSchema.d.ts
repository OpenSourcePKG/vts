import { Schema } from '../schema.js';
export declare class UnknownSchema extends Schema<unknown> {
    validate(_data: unknown): _data is unknown;
}

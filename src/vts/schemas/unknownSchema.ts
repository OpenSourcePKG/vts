import {Schema} from '../schema.js';

export class UnknownSchema extends Schema<unknown> {

  public validate(_data: unknown): _data is unknown {
    return true;
  }

}
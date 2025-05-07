import {Schema, SchemaDescription} from '../schema.js';

export interface UnknownSchemaDescription extends SchemaDescription {
  type: 'unknown';
}

export class UnknownSchema extends Schema<unknown> {

  public override describe(): UnknownSchemaDescription {
    return {
      ...super.describe(),
      type: 'unknown'
    };
  }

  public validate(_data: unknown): _data is unknown {
    return true;
  }

}
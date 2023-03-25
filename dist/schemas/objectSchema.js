import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
import { OptionalSchema } from './objectSchema/optionalSchema.js';
export class ObjectSchema extends Schema {
    constructor(_schemaItems, _options) {
        super();
        this._schemaItems = _schemaItems;
        this._options = _options;
    }
    extend(_schemaItems, _options) {
        return new ObjectSchema({
            ...this._schemaItems,
            ..._schemaItems
        }, {
            ...this._options,
            ..._options
        });
    }
    validate(_data, _errors, _options) {
        if (!Vts.isObject(_data, _options?.objectSchema?.strict ?? true)) {
            this.addError(_errors, 'not an object');
            return false;
        }
        const objectErrors = {};
        for (const schemaKey of Object.keys(this._schemaItems)) {
            const schema = this._schemaItems[schemaKey];
            if (!Vts.isInstanceOf(schema, OptionalSchema) && !(schemaKey in _data)) {
                this.addErrors(objectErrors, schemaKey, ['missing required key']);
            }
            if (schemaKey in _data) {
                const valueErrors = [];
                if (!schema.validate(_data[schemaKey], valueErrors, _options)) {
                    this.addErrors(objectErrors, schemaKey, valueErrors);
                }
            }
        }
        if (!(this._options?.objectSchema?.ignoreAdditionalItems || _options?.objectSchema?.ignoreAdditionalItems)) {
            for (const dataKey of Object.keys(_data)) {
                if (!(dataKey in this._schemaItems)) {
                    this.addErrors(objectErrors, dataKey, ['unexpected additional key']);
                }
            }
        }
        if (Object.keys(objectErrors).length > 0) {
            this.addError(_errors, objectErrors);
        }
        return Object.keys(objectErrors).length === 0;
    }
}

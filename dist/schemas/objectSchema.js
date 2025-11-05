import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
import { DiscriminatorSchema } from './objectSchema/discriminatorSchema.js';
import { OptionalSchema } from './objectSchema/optionalSchema.js';
export class ObjectSchema extends Schema {
    constructor(_schemaItems, _options) {
        super(_options);
        this._schemaItems = _schemaItems;
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
    describe() {
        const objectSchemaDescription = {
            ...super.describe(),
            items: {},
            type: 'object'
        };
        for (const [schemaKey, schema] of Object.entries(this._schemaItems)) {
            objectSchemaDescription.items[schemaKey] = schema.describe();
        }
        return objectSchemaDescription;
    }
    validate(_data, _errors, _options) {
        const strict = _options?.objectSchema?.strict ?? this._options?.objectSchema?.strict ?? true;
        const ignoreAdditionalItems = _options?.objectSchema?.ignoreAdditionalItems ??
            this._options?.objectSchema?.ignoreAdditionalItems ?? false;
        if (!Vts.isObject(_data, strict)) {
            this.addError(_errors, 'not an object');
            return false;
        }
        const objectErrors = {};
        for (const schemaKey of Object.keys(this._schemaItems)) {
            const schema = this._schemaItems[schemaKey];
            const keyIsInData = schemaKey in _data;
            const valueErrors = [];
            const validated = keyIsInData ? schema.validate(_data[schemaKey], valueErrors, _options) : false;
            if (Vts.isInstanceOf(schema, DiscriminatorSchema) && (!keyIsInData || !validated)) {
                return false;
            }
            if (!Vts.isInstanceOf(schema, OptionalSchema) && !keyIsInData) {
                this.addErrors(objectErrors, schemaKey, ['missing required key']);
            }
            if (keyIsInData && !validated) {
                this.addErrors(objectErrors, schemaKey, valueErrors);
            }
        }
        if (!ignoreAdditionalItems) {
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

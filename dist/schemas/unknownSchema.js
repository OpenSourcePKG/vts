import { Schema } from '../schema.js';
export class UnknownSchema extends Schema {
    describe() {
        return {
            ...super.describe(),
            type: 'unknown'
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validate(_data) {
        return true;
    }
}

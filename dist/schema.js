export class Schema {
    _options;
    constructor(_options) {
        this._options = _options;
    }
    describe() {
        return {
            description: this._options?.description
        };
    }
    addError(_errors, _error) {
        _errors.push(_error);
    }
    addErrors(_errorsObject, _key, _errors) {
        _errorsObject[_key] ||= [];
        _errorsObject[_key].push(..._errors);
    }
}

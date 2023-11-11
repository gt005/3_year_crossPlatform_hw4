"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseItemValidationRules = exports.mongoIdValidator = exports.validate = void 0;
const express_validator_1 = require("express-validator");
const express_validator_2 = require("express-validator");
const validate = (req, res, next) => {
    const errors = (0, express_validator_2.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
exports.validate = validate;
const mongoIdValidator = () => {
    return [(0, express_validator_1.check)('id').isMongoId()];
};
exports.mongoIdValidator = mongoIdValidator;
const baseItemValidationRules = () => {
    return [
        (0, express_validator_2.body)('size').isString(),
        (0, express_validator_2.body)('material').isString(),
        (0, express_validator_2.body)('color.name').isString(),
        (0, express_validator_2.body)('color.hexCode').isString(),
        (0, express_validator_2.body)('quantityInStock').optional().isInt({ min: 0 }),
        (0, express_validator_2.body)('cost').isFloat({ min: 0 }),
        (0, express_validator_2.body)('description').optional().isString(),
        (0, express_validator_2.body)('image').optional().isString()
    ];
};
exports.baseItemValidationRules = baseItemValidationRules;

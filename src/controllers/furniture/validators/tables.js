"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableValidationRules = void 0;
const express_validator_1 = require("express-validator");
const tableValidationRules = () => {
    return [
        (0, express_validator_1.body)('size').isString(),
        (0, express_validator_1.body)('material').isString(),
        (0, express_validator_1.body)('color.name').isString(),
        (0, express_validator_1.body)('color.hexCode').isString(),
        (0, express_validator_1.body)('quantityInStock').optional().isInt({ min: 0 }),
        (0, express_validator_1.body)('cost').isFloat({ min: 0 }),
        (0, express_validator_1.body)('description').optional().isString(),
        (0, express_validator_1.body)('image').optional().isString()
    ];
};
exports.tableValidationRules = tableValidationRules;

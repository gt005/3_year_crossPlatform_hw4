"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoIdValidator = exports.validate = void 0;
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

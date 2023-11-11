"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chairValidationRules = void 0;
const commonValidators_1 = require("../../validators/commonValidators");
const chairValidationRules = () => {
    const baseRules = (0, commonValidators_1.baseItemValidationRules)();
    return baseRules;
};
exports.chairValidationRules = chairValidationRules;
